Ext.define('SAT.controller.Login', {
    extend: 'Ext.app.Controller',

    models: [
        'User'
    ],
    views: [
        'login.Login'
    ],
    refs: [
        {
            ref: 'login',
            selector: 'login'
        }
    ],

    init: function (application) {  // #5
        application.on('loginchk', this.loginChk, this);    // #6
    },

    loginChk: function () {     // #8
        Ext.Ajax.request({  // #1
            url: 'resources/json/loginchk.json',
            failure: function (conn, response, options, eOpts) {    // #2
                Ext.get(login.getEl()).unmask();
                Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            },
            success: function (conn, response, options, eOpts) {    // #3
                var result = Ext.JSON.decode(conn.responseText, true);  // #4
                if (!result) {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }

                if (result.success) {   // #5
                    SAT.app.userinfo = result.entity;

                    Ext.ComponentQuery.query('viewport')[0].add({   // #6
                        xtype: 'appmain'
                    });
                } else {
                    Ext.widget('login').show();
                }
            }
        });
    }

});
