Ext.define('SAT.view.login.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',
    requires: [
        'SAT.view.login.LoginForm'
    ],

    width: 300,
    layout: 'fit',
    closeAction: 'hide',
    title: '환영합니다. ^^',
    titleAlign: 'center',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'loginform',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }
});