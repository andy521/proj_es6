'use strict';

import Base from './base.js';
import fs from "fs";
import path from "path";

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //let model = this.model("user");
        //console.log(model.pk);
        //let data = await model.select();
        //console.log(data);
        //console.log(this.config("type"));
        //this.navType = "home";
        //let insertId = await model.add({last_name: "ddd1",first_name: "xxx1",userName: "xxx1", password: "yyy1"});
        //console.log(insertId);
        //let affectedRows = await model.where({id: "17"}).update({userName: "admin@thinkjs.org"});
        //console.log(affectedRows);
        //let result = await model.thenAdd({userName: "admin@thinkjs.org"}, {id: "17"});
        //let result = await model.where({userName: "admin@thinkjs.org"}).update({userName: "admin"})
        // let model = this.model("user");
        //let result = await model.where({id: ["=", 10]}).delete();
        //let sql = "select * from t_user where id=16";
        //let result = yield model.query(sql);
        //console.log(result);
        //this.assign("name","test art-template");
        return this.display();
    };
    async index2Action(){
        return this.display();
    };
    async listAction(){
        let posts = this.post();
        let whereObj = {};
        for (let prop in posts) {
            if (posts.hasOwnProperty(prop) && posts[prop] && prop != "page" && prop != "rows") {
                whereObj[prop] = posts[prop];
            }
        }
        let userModel = this.model("user");
        let data = await userModel.field("id,name,pass,email,image,phone,addr,regtime,birth,remark").where(whereObj).page(this.post("page"),this.post("rows")).countSelect();
        this.json({"total":data.count,"rows":data.data});
    };
    async delAction(){
        let userModel = this.model("user");
        let posts = this.post("id");
        let delNums = userModel.where({id: ['IN', posts]}).delete();
        if(delNums){
            this.json({"succ":true});
        }else{
            this.json({"succ":false});
        }
    };
    async addAction(){
        let userModel = this.model("user");
        let values = this.post();
        let id = userModel.add(values);
        if(id){
            this.json({"succ":true});
        }else{
            this.json({"succ":false});
        }
    };
    async uploadAction(){
        let file = think.extend({}, this.file('uploadFile'));
        let filepath = file.path;
        //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
        let uploadPath = think.RESOURCE_PATH + '/static/upload';
        think.mkdir(uploadPath);
        let basename = path.basename(filepath);
        fs.renameSync(filepath, uploadPath + '/' + basename);
        this.json({path: '/static/upload/' + basename});
    };
    async updateAction(){
        let userModel = this.model("user");
        let nums = userModel.where({id: this.get("id")}).update(this.post());
        if(nums){
            this.json({"succ":true});
        }else{
            this.json({"succ":false});
        }
    }
}