/**
 * @author：wangjb@taofen8.com
 * @date: 2016/7/29
 * @desc: webpack构建配置文件
 *
 **/
var webpack = require("webpack"),
    path = require("path"),
    //独立打包样式文件
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    // vue = require("vue-loader"),
    ROOT_PATH = path.resolve(__dirname),
    OUT_PATH =  "./dist/";
module.exports = {
    resolve: {
        //参数名的自动补全，现在可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.json', '.coffee','.css','.jsx','.vue'],
        //解析目录名的一个数组到当前目录以及先前的目录，并且是查找模块。
        modulesDirectories: ['node_modules'],
        //设置别名，便于在开发中模块的使用
        alias: {
            jquery : path.resolve(ROOT_PATH, "./node_modules/jquery/dist/jquery.min.js"),
            md5 : path.resolve(ROOT_PATH, "./node_modules/md5/md5.js"),
            vue : path.resolve(ROOT_PATH, "./node_modules/vue/dist/vue.min.js"),
            waterfall : path.resolve(ROOT_PATH, "./node_modules/vue-waterfall/lib/vue-waterfall.min.js"),
            dialog:path.resolve(ROOT_PATH, "./src/common/dialog.js"),
            util:path.resolve(ROOT_PATH, "./src/common/util.js"),
            verify:path.resolve(ROOT_PATH, "./src/common/verify.js"),
            footer:path.resolve(ROOT_PATH, "./src/component/vue/footer.vue"),
        }
    },
    entry: {
        index: ["./src/js/index.js"],
        method: ["./src/js/method.js"],
        computed: ["./src/js/computed.js"],
        class: ["./src/js/class.js"],
        filter: ["./src/js/filter.js"],
        reactivity: ["./src/js/reactivity.js"],
    },
    output: {
        path: OUT_PATH,
        publicPath: OUT_PATH,
        filename: 'js/[name].js'
    },
    // vue: {
    //     css: ExtractTextPlugin.extract("style-loader","css-loader")
    // },
    module: {
        //模块加载器,告知 webpack 每一种文件都需要使用什么加载器来处理
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.less$/,
                loader: ( "style-loader!css-loader!less-loader")
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // {   test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader","css-loader")
            // },
            // {   test: /\.scss$/, loader: "style!css!sass" },
            // {   test: /\.less$/, loader: "style!css!less" },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel?cacheDirectory'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/css/[name].css'),
        //webpack.ProvidePlugin插件作用是jquery变成全局，所以不需要引用就能在js文件中运用
        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "$": "jquery"
        }),
        //压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$','jQuery']
            },
            compress: {
                warnings: false
            }
        }),
        //DefinePlugin 接收字符串插入到代码当中, 可以写上 JS 的字符串或常量
        new webpack.DefinePlugin({
            BUILD_AUTHOR: JSON.stringify("Turbe"),
            BUILD_DATE: JSON.stringify("2016/7/28"),
            BUILD_DESC: JSON.stringify("淘粉吧——海狐海淘"),
        })
    ],
};