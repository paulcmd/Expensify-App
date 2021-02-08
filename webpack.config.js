const path = require('path')

module.exports = (env) => {

    const isProduction = env === 'production'
     
    return {
        entry: './src/app.js',

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
    
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
    
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',   //cheap-module-eval-source-map takes you to the exact code you wrote when debugging with console, instead of the generated babel code
        
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true                //tells browser we are handling all routing through index.html. Routing will be handled client-side, not server-side
        }

    }
}