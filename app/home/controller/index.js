'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}






    /**
     * index action
     * @return {Promise} []
     */_class.prototype.
    indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return', 


















                            this.display());case 1:case 'end':return _context.stop();}}}, _callee, this);}));return function indexAction() {return ref.apply(this, arguments);};}();_class.prototype.

    index2Action = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return', 
                            this.display());case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));return function index2Action() {return ref.apply(this, arguments);};}();_class.prototype.

    listAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var 
            posts, 
            whereObj, 
            prop, 




            userModel, 
            data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:posts = this.post();whereObj = {};for (prop in posts) {if (posts.hasOwnProperty(prop) && posts[prop] && prop != "page" && prop != "rows") {whereObj[prop] = posts[prop];}}userModel = this.model("user");_context3.next = 6;return userModel.field("id,name,pass,email,image,phone,addr,regtime,birth,remark").where(whereObj).page(this.post("page"), this.post("rows")).countSelect();case 6:data = _context3.sent;
                            this.json({ "total": data.count, "rows": data.data });case 8:case 'end':return _context3.stop();}}}, _callee3, this);}));return function listAction() {return ref.apply(this, arguments);};}();_class.prototype.

    delAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var 
            userModel, 
            posts, 
            delNums;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:userModel = this.model("user");posts = this.post("id");delNums = userModel.where({ id: ['IN', posts] }).delete();
                            if (delNums) {
                                this.json({ "succ": true });} else 
                            {
                                this.json({ "succ": false });}case 4:case 'end':return _context4.stop();}}}, _callee4, this);}));return function delAction() {return ref.apply(this, arguments);};}();_class.prototype.


    addAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {var 
            userModel, 
            values, 
            id;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:userModel = this.model("user");values = this.post();id = userModel.add(values);
                            if (id) {
                                this.json({ "succ": true });} else 
                            {
                                this.json({ "succ": false });}case 4:case 'end':return _context5.stop();}}}, _callee5, this);}));return function addAction() {return ref.apply(this, arguments);};}();_class.prototype.


    uploadAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {var 
            file, 
            filepath, 

            uploadPath, 

            basename;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:file = think.extend({}, this.file('uploadFile'));filepath = file.path; //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
                            uploadPath = think.RESOURCE_PATH + '/static/upload';think.mkdir(uploadPath);basename = _path2.default.basename(filepath);_fs2.default.renameSync(filepath, uploadPath + '/' + basename);
                            this.json({ path: '/static/upload/' + basename });case 7:case 'end':return _context6.stop();}}}, _callee6, this);}));return function uploadAction() {return ref.apply(this, arguments);};}();_class.prototype.

    updateAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {var 
            userModel, 
            nums;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:userModel = this.model("user");nums = userModel.where({ id: this.get("id") }).update(this.post());
                            if (nums) {
                                this.json({ "succ": true });} else 
                            {
                                this.json({ "succ": false });}case 3:case 'end':return _context7.stop();}}}, _callee7, this);}));return function updateAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;