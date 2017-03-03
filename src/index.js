import _ from 'material-design-lite';
import 'material-design-lite/material.css';
import '../styles.css';

var m = require("mithril");
var ProductGrid = require("./views/ProductGrid");
var Layout = require("./views/Layout");
// var main = document.querySelector("main");

m.route(document.body, "/", {
    "/":{
        render:function(){
            return m(Layout, m(ProductGrid));
        }
    }
});

// m.render(document.body, m(Layout,m(ProductGrid)));

// m.mount(document.body, m(Layout));

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