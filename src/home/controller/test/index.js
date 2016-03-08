'use strict';

import Base from '../base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  __before(){
      console.log("########before######");
  }
  __after(){
    console.log("########after######");
  }
  //__call(){
  //  console.log("action不存在时自动调用");
  //  return this.displayError(404);
  //}
  indexAction(){
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
    return this.display();
  }
  index2Action(){
    //auto render template file index_index2.html
    return this.display();
  }
}