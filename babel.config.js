module.exports = {
  presets: [
    "@babel/preset-env", // CommonJs 즉 import를  require로 변환
    "@babel/preset-react"
  ],
  plugins : [
    "@babel/plugin-syntax-dynamic-import"
  ]
}