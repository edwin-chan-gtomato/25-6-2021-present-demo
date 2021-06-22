const { override, useBabelRc, addWebpackPlugin } = require('customize-cra')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function myOverrides(config, env) {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.use instanceof Array) {
            return {
                ...rule,
                test: /\.css$/,
                use: [
                    ...rule.use,

                    {
                        loader: '@linaria/webpack-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV !== 'production',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                ]


            };
        }

        return rule;
    });




    return config;
}

module.exports = override(
    myOverrides,
    useBabelRc(),
    addWebpackPlugin(new MiniCssExtractPlugin({
        filename: 'App.css',
    }))
)