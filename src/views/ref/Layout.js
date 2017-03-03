var m = require("mithril");
var User = require("../models/User");

module.exports = {
    view: function (vnode) { 
        return m("main.layout",[
            m("nav.menu",[
                m("a[href='/list']", {
                    oncreate:m.route.link
                }, "Users"),
                m("a",{},"Total de usuários: " + User.list.length)
            ]),
            m("section", vnode.children)
        ]);
    }
};