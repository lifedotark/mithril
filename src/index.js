var m = require("mithril");
var ProductGrid = require("./views/ProductGrid");
var main = document.querySelector("main");


m.mount(main, ProductGrid);

// var UserList = require("./views/UserList");
// var UserForm = require("./views/UserForm");
// var Layout = require("./views/Layout");
// m.mount(document.body, UserList);

// m.route(document.body, "/list",{
//     "/list": {
//         render: function(){
//             return m(Layout, m(UserList));
//         }
//     },
//     "/edit/:id": {
//         render:function (vnode) {
//             return m(Layout, m(UserForm, vnode.attrs))
//         }
//     }
// })