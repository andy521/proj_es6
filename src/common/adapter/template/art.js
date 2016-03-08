'use strict';
/**
 * base adapter
 */
export default class extends think.adapter.base {
    /**
     * init
     * @return {[]}         []
     */
    init(...args) {
        super.init(...args);
    }

    run(templateFile, tVar, config) {
        let template = require("art-template");
        template.config("extname", "");
        if (think.env != "production") {
            template.config("cache",false);
        }
        return template(templateFile, tVar);
    }
}