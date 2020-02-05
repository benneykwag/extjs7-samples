Ext.define('SAT.view.login.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    itemId: 'loginform',
    defaults: {
        xtype: 'textfield',
        anchor: '100%',
        labelWidth: 80
    },
    bodyPadding: 15,
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '이메일',
                    msgTarget: 'under',
                    name: 'email',
                    allowBlank: false,
                    maxLength: 25,
                    minLength: 3,
                    vtype: 'email'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    id: 'password',
                    fieldLabel: '비밀번호',
                    msgTarget: 'under',
                    name: 'password',
                    inputType: 'password',
                    enableKeyEvents: true,
                    minLength: 3
                },
                {
                    xtype: 'button',
                    formBind: true,
                    text: '로그인',
                    listeners: {
                        click: {    // #3
                            fn: me.onLogin,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    // #8
onLogin: function(button, e, eOpts) {
    var formPanel = button.up('form'),
        login = button.up('login'),
        email = formPanel.down('textfield[name=email]').getValue(), // #1
        origin_pass = formPanel.down('textfield[name=password]').getValue(),
        pass = ((origin_pass.length == 32)?origin_pass:MD5.encode(origin_pass)),    // #2
        me = this;

    if (formPanel.getForm().isValid()) {    // #4
        Ext.get(login.getEl()).mask("Authenticating... Please wait...",
            'loading'); // #5

        Ext.Ajax.request({  // #6
            url: 'resources/json/login.json',
            params: {
                email: email,
                password: pass
            },
            failure: function (conn, response, options, eOpts) {    // #7
                Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            },
            success: function (conn, response, options, eOpts) {    // #8
                Ext.get(login.getEl()).unmask();    // #12
                var result = Ext.JSON.decode(conn.responseText, true);
                if (result.success) {   // #13
                    login.close();  // #14
                    window.location.reload();   // #15
                } else {
                    Ext.Msg.show({
                        title: result.errTitle,
                        msg: result.errMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        });
    }
}
});