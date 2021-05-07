const path = require('path');
const webpack = require('webpack');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development', // for development, when you deploy this app, to use "production"

    devtool: 'inline-source-map', // dvelopment mode 에서 JS의 sourch map 제공

    devServer: {
        contentBase: '/', //  webpack-dev-server to serve the files from the dist directory ( defined in output.path ) on localhost:8080
    },

    entry: {
        main: "./client/src/index.js", // 모든 경로가 index.js 와 연결 되어 있기 떄문에 모든 파일들의 내용을 해석

        //아래 와 같이 각각의 엔트리 포인트로 여러개를 설정할 수 있음
        // mainPage: "./src/pages/main",
        // loginPage: "./src/pages/login"
    },

    // webpack 을 돌리고 난후 결과물의 파일 경로
    output: {
        
        // 결과물 파일 생성
        filename: 'bundle.js', // basic
        // filename: '[name].bundle.js', // 결과 파일 이름에 entry 속성을 포함하는 옵션
        // filename: '[id].bundle.js', // 결과 파일 이름에 webpack 내부적으로 사용하는 모듈 ID를 포함하는 옵션
        // filenmae: '[name].[hash].bundle.js', // 매 빌드시 마다 고유 해시 값을 붙이는 옵션
        // filename: '[chunkhash].bundle.js', // webpack 각 모듈 내용을 기준으로 생성된 해시 값을 붙이는 옵션
        

        // 결과물 파일의 경로
        // path.resolve() = 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API
        // __dirname = 현재 실행중인 폴더 경로
        path: path.resolve(__dirname, './dist'), 

        // To combines webpack-dev-middleware with an express server
        // webpack-dev-middleware is a wrapper that will emit files processed by webpack to a server
        publicPath: "/", 
    },
    
    // loader = JS 파일이 아닌 web 자원(HTML, CSS, images, font 등) 들을 webpack 이 인식할 수 있게 추가하는 속성

    module: {
        
        // 자주 사용하는 loader 종류
        // babel-loader : https://webpack.js.org/loaders/babel-loader/#root
        // css-loader 
        // sass-loader : https://webpack.js.org/loaders/sass-loader/#root
        // file-loader : https://webpack.js.org/loaders/file-loader/#root
        // ts-loader : https://webpack.js.org/guides/typescript/#loader

        rules: [
            {
            // loader 를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
              test: /\.js$|jsx$/,

            // 해당 파일에 적용할 loader 이름
                use: 'babel-loader'
            },
            
            // 적용 순서 주의 : 오른쪽에서 왼쪽 순
            // {
            //     test: /\.scss$/,
            //     use: ['css-loader', 'sass-loader']
            // },

            // 배열 입력이 아는 아래 같이 옵션을 포함한 형태도 가능
            // {
            //     test: /\.css$/,
            //     use: [
            //         {loader: 'style-loader'},
            //         {
            //             loader: 'css-loader',
            //             options: { modules: true }
            //         },
            //         {loader: 'sass-loader'}
            //     ]
            // }
        ],
    },

    // plugin = webpack 으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성, 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있습니다
    
    plugins: [

        // 자주 사용하는 plugin
        // split-chunks-plugin: https://webpack.js.org/plugins/split-chunks-plugin/
        // clean-webpack-plugin: https://www.npmjs.com/package/clean-webpack-plugin
        // image-webpack-loader: https://github.com/tcoopman/image-webpack-loader
        // webpack-bundle-analyzer-plugin: https://github.com/webpack-contrib/webpack-bundle-analyzer

        new HtmlwebPackPlugin({
            title: 'Development',
            template: "./dist/index.html"
        }), // webpack 으로 빌드한 결과물로 HTML 파일을 생성 해주는 plugin
        
        new WebpackManifestPlugin({
            filename: 'manifest.json',
            basePath: "./dist"
        }),
        new webpack.ProgressPlugin() // webpback 의 빌드 진행률을 표시
    ]
}