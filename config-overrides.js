const {
    override,
    removeModuleScopePlugin,
    addWebpackExternals,
} = require('customize-cra');

module.exports = {
    webpack: override(
        removeModuleScopePlugin(),
        addWebpackExternals({
            'react': 'React',
        }),
        (config) => {
            config.output.library = {
                type: 'amd',
            };

            return config;
        },
    ),
};
