var m = require("mithril");

var User = {
    list:[],
    loadList: function(){
        m.request({
           method:'GET' ,
           url:'https://rem-rest-api.herokuapp.com/api/users',
           withCredentials: true
        }).then(function(result){
            
            for (var i = 0; i < 1000; i++) {
                User.list = User.list.concat(result.data);
            }
        });
    },
    current: {},
    load: function (id) {
        return m.request({
           method:"GET" ,
           url:"https://rem-rest-api.herokuapp.com/api/users/:id",
           data: {id: id},
           withCredentials: true
        })
        .then(function (result) {
            User.current = result;
        });
    },
    save:function () {
        return m.request({
            method: "PUT",
            url:"https://rem-rest-api.herokuapp.com/api/users/:id",
            data: User.current,
            withCredentials: true
        });
    }
}

module.exports = User;