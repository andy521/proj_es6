'use strict';
/**
 * base adapter
 */exports.__esModule = true;var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$adapter$base) {(0, _inherits3.default)(_class, _think$adapter$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$adapter$base.apply(this, arguments));}

    /**
     * init
     * @return {[]}         []
     */_class.prototype.
    init = function init() {var _think$adapter$base$p;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
        (_think$adapter$base$p = _think$adapter$base.prototype.init).call.apply(_think$adapter$base$p, [this].concat(args));};_class.prototype.


    run = function run(templateFile, tVar, config) {
        var template = require("art-template");
        template.config("extname", "");
        if (think.env != "production") {
            template.config("cache", false);}

        return template(templateFile, tVar);};return _class;}(think.adapter.base);exports.default = _class;