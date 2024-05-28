const secrets = process.env.SECRETS;

if (secrets) {
    const keys = JSON.parse(secrets);

    Object.keys(keys).forEach((key) => {
        process.env[key] = keys[key];
    });
}
