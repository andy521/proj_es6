'use strict';exports.__esModule = true;var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var moment = require("moment");
/**
 * model
 */var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, _class);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _think$model$base.call.apply(_think$model$base, [this].concat(args))), _this), _this.

        schema = { 
            view_nums: { //阅读数
                default: 0 //默认为 0
            }, 
            fullname: { //全名
                default: function _default() {//first_name 和 last_name 的组合，这里不能用 Arrows Function
                    return this.first_name + this.last_name;} }, 


            create_time: { //创建时间
                default: function _default() {//获取当前时间
                    return moment().format("YYYY-MM-DD HH:mm:ss");}, 

                readonly: true //只读，添加后不可修改
            } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return _class;}(think.model.base);exports.default = _class;