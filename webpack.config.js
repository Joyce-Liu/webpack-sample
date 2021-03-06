/**
 * Created by joyce.liu on 7/6/17.
 */
module.exports={
    devtool:'eval-source-map',//配置生成Source Maps,选择合适的选项

    //注："__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: __dirname +"/app/main.js",//唯一入口文件
    output:{
        path: __dirname+"/public",//打包后的文件存放的地方
        filename:"bundle.js"//打包后输出文件的文件名
    },

    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    devServer:{
        contentBase:'./public',//本地服务器所加载的页面所在的目录
        colors: true,//终端输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}
