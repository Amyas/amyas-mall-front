const pxtorem = require('postcss-pxtorem')
const postImport = require('postcss-import')
const postUrl = require('postcss-url')
const autoprefixer = require('autoprefixer')

module.exports = ({file})=>{
  return {
    plugins:[
      autoprefixer(),
      postImport(),
      postUrl(),
      pxtorem({
        rootValue: 75,
        unitPrecision:5,
        propList:['*'],
        selectorBlackList: [
          /^html$/,
          /^.van-/
        ]
      })
    ]
  }
}