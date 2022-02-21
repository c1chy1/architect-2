const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");


module.exports = {


    publicPath: process.env.NODE_ENV === "production" ? "/architect-2/" : "/",



    pwa: {
        name: 'Acme Studios',
        themeColor: '#F0ECE3',
        msTileColor: '#596E79',


    },
    configureWebpack: {
        plugins: [
            new ImageminWebpWebpackPlugin({
                config: [{
                    test: /\.(jpe?g|png|webp)/,
                    options: {
                        quality: 50
                    }
                }],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true
            }),
        ],

    },
    chainWebpack: (config) =>  {

        config.module
            .rule('images')
            .test(/\.(jpe?g|png|webp)$/i)
            .use('webp')
            .loader('webp-loader')

    },


}


