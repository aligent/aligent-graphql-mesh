import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

const nodeModules = new RegExp(/^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/);

// As we are bundling for Lambda, __dirname and __filename will point to `/var`
// This is problematic as all our code is stored at `/var/task/`
// Specifically, the root of the mesh code is stored at `/var/task/src/meshrc/.meshrc`
// This esbuild plugin will essentially find and replace values
// There are probably more efficient ways to do this, but it works
const dirnamePlugin = {
    name: 'dirname',

    setup(build) {
        build.onLoad({ filter: /.*/ }, ({ path: filePath }) => {
            if (!filePath.match(nodeModules)) {
                let contents = fs.readFileSync(filePath, 'utf8');
                const loader = path.extname(filePath).substring(1);
                const dirname = `/var/task/src/meshrc/.meshrc`;
                if (
                    contents.includes(
                        `pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');`
                    )
                ) {
                    contents = contents
                        .replaceAll('__dirname', `'${dirname}'`)
                        .replaceAll('__filename', `'${filePath}'`);
                }
                return {
                    contents,
                    loader,
                };
            }
        });
    },
};

await esbuild.build({
    entryPoints: ['index.ts'],
    bundle: true,
    outdir: 'dist',
    minify: false,
    sourcemap: true,
    platform: 'node',
    target: 'es2020',
    plugins: [dirnamePlugin],
});
