'use strict';exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('../base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  __before = function __before() {
    console.log("########before######");};_class.prototype.

  __after = function __after() {
    console.log("########after######");};

  //__call(){
  //  console.log("action不存在时自动调用");
  //  return this.displayError(404);
  //}
  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html    this.json({name: "thinkjs"});
    //let name = this.get("name");
    //let allParams = this.get(); //获取所有 GET 参数
    //let name = this.post("name");
    //let allParams = this.post(); //获取所有 POST 参数
    //let file = this.file("image");
    //let allFiles = this.file(); //获取所有上传的文件   如果文件不存在，那么值为一个空对象 {}。
    //{
    //  fieldName: "file", //表单字段名称
    //      originalFilename: filename, //原始的文件名
    //    path: filepath, //文件保存的临时路径，使用时需要将其移动到项目里的目录，否则请求结束时会被删除
    //    size: 1000 //文件大小
    //}
    return this.display();};_class.prototype.

  index2Action = function index2Action() {
    //auto render template file index_index2.html
    return this.display();};return _class;}(_base2.default);exports.default = _class;