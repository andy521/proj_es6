'use strict';
let moment = require("moment");
/**
 * model
 */
export default class extends think.model.base {
    schema = {
        view_nums: { //阅读数
            default: 0  //默认为 0
        },
        fullname: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return this.first_name + this.last_name;
            }
        },
        create_time: { //创建时间
            default: () => { //获取当前时间
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            readonly: true //只读，添加后不可修改
        }
    }
}