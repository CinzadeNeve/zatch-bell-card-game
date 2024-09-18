const path = require('path');

module.exports = {
    entry: './public/src/js/main.ts', // Arquivo inicial do app
    devtool: 'inline-source-map', // Facilita o debug
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Dizendo para ele carregar arquivos com extensões .tsx e .ts
                use: 'ts-loader', // Utilizando o ts-loader
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Tipos de imagens que é para ele carregar
                use: 'file-loader', // Utilizando o file-loader
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        devMiddleware: {
            publicPath: '/dist/' // Agora ele será disponibilizado em ./public/js/
        }
    },
    mode: 'development', // Aqui tem as opções development e production
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Caminho e nome do arquivo de saída
    },
};