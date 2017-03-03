var m = require("mithril");

var Layout = {
    view:function(vnode){
        return m(".mdl-layout.mdl-js-layout.mdl-layout--fixed-header",[
		    m("header.mdl-layout__header", 
                m(".mdl-layout__header-row",
                    [
                        m("span.mdl-layout-title", 
                            "Title"
                        ),
                        m(".mdl-layout-spacer"),
                        m("nav.mdl-navigation.mdl-layout--large-screen-only",
                            [
                                m("a.mdl-navigation__link[href='']", 
                                    "Link"
                                ),
                                m("a.mdl-navigation__link[href='']", 
                                    "Link"
                                ),
                                m("a.mdl-navigation__link[href='']", 
                                    "Link"
                                ),
                                m("a.mdl-navigation__link[href='']", 
                                    "Link"
                                )
                            ]
                        )
                    ]
                )
		    ),
            m(".mdl-layout__drawer",
                [
                    m("span.mdl-layout-title", 
                        "Title"
                    ),
                    m("nav.mdl-navigation",
                        [
                            m("a.mdl-navigation__link[href='']", 
                                "Link"
                            ),
                            m("a.mdl-navigation__link[href='']", 
                                "Link"
                            ),
                            m("a.mdl-navigation__link[href='']", 
                                "Link"
                            ),
                            m("a.mdl-navigation__link[href='']", 
                                "Link"
                            )
                        ]
                    )
                ]
            ),
            m("main", vnode.children)
	    ]);
    }
};

module.exports = Layout;