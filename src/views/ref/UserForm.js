var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: function (vnode) {
        User.load(vnode.attrs.id);
    },
    view: function () {
        return m("form", [
            m("label.label", "First Name"),
            m("input.input[type=text][placeholder=First name]",{
                value:User.current.firstName,
                oninput: m.withAttr("value", function (value) {User.current.firstName = value})
            }),
            m("label.label", "Last Name"),
            m("input.input[placeholder=Last Name]",{
                value:User.current.lastName,
                oninput: m.withAttr("value", function (value) {User.current.lastName = value})
            }),
            m("button.button[type=submit]",{
                onclick:User.save
            },"Save")
        ]);
    }
}