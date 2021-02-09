const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {

    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
     
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
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                    //as shown in docs, it is false by default
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                            
                        ]
                        // using CSSExtract to extract contents of the 2 files into styles.css
                    })
                }
            ]
        },
        
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',   //cheap-module-eval-source-map takes you to the exact code you wrote when debugging with console, instead of the generated babel code
        
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true                //tells browser we are handling all routing through index.html. Routing will be handled client-side, not server-side
        }

    }
}