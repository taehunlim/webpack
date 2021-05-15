const path = require('path');
const webpack = require('webpack');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dotenv = require('dotenv');

module.exports = (env, options) => {

    const {DEV} = env;

    if(DEV) {
        dotenv.config({path: "./env/dev.env"})
    } else {
        dotenv.config({path: "./env/.env"})
    }
  

    return {
        mode: 'development', // for development, when you deploy this app, to use "production"

        devtool: DEV ? "inline-source-map" : "", // dvelopment mode 에서 JS의 sourch map 제공 / bundle.map 파일을 만든다. 
    
        devServer: {
            contentBase: "./dist", //  webpack-dev-server to serve the files from the dist directory ( defined in output.path ) on localhost:8080,
            historyApiFallback: true, // React 에서 SPA 라우팅을 위해 설정
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
            filename: DEV ? "[name].[hash].bundle.js" : '[name].[chunkhash].bundle.js', // basic
            // filename: '[name].bundle.js', // 결과 파일 이름에 entry 속성을 포함하는 옵션
            // filename: '[id].bundle.js', // 결과 파일 이름에 webpack 내부적으로 사용하는 모듈 ID를 포함하는 옵션
            // filenmae: '[name].[hash].bundle.js', // 매 빌드시 마다 고유 해시 값을 붙이는 옵션
            // filename: '[chunkhash].bundle.js', // webpack 각 모듈 내용을 기준으로 생성된 해시 값을 붙이는 옵션

            chunkFilename: '[name].chunk.js', //dynamic import 결과 파일
            
    
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
    

            //------------------------common
            new HtmlwebPackPlugin({
                template: './client/public/index.html', // 템플릿 경로를 지정
                templateParameters: { // 템플릿에 주입할 변수들 지정
                  env: DEV ? '(개발중)' : ''
                },

                showErrors: true
            }), // 따로 분리한 bundle한 css파일과 js파일을 각각 html 파일에 link 태그와 script태그로 추가하는 걸 자동화 해줌.
            
            new WebpackManifestPlugin({
                filename: 'manifest.json',
                basePath: "./dist"
            }),

            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.API_URL': JSON.stringify(process.env.API_URL),
            }),

            // webpack.EnvironmentPlugin
            

            //-------------------------dev
            new webpack.ProgressPlugin(), // webpback 의 빌드 진행률을 표시

            //-------------------------prod

            new CleanWebpackPlugin(),  // 새로 빌드하가 이전의 빌드물을 제거해줌
            
        ],
        
        optimization: {
            
            splitChunks: {
              chunks: 'all', // 모듈 중복을 방지해줌, a, b 모듈이 각각 (a,b,c) / (a,b,d) 를 가지고 있을 경우 공통 부분인 a,b 를 따로 분리한 vendor파일 을 만듬
            }, // vendors
            runtimeChunk: { 
                name: "runtime"
            }, // runtime

            minimizer: [
                new OptimizeCSSAssetsPlugin({}), //css 압축 (min) 파일로 만들어줌
      
                new UglifyJsPlugin({ // 난독화 
                  cache: true,
                  parallel: true,
                  sourceMap: true // set to true if you want JS source maps
                }),
            ]
        },

    }
   
}