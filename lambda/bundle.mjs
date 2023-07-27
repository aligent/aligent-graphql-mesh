import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['index.ts'],
    bundle: true,
    outdir: 'dist',
    minify: false,
    sourcemap: true,
    platform: 'node',
    target: 'es2020',
});
