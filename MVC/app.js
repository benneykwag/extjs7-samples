Ext.application({
    name: 'SAT',
    controllers: [
        'Login',
        'Frame'
    ], // #1
    autoCreateViewport: true,
    launch: function () {   // #2
        var me = this;
        me.fireEvent('loginchk');

        Ext.Ajax.on('beforerequest', function (conn, options, eOpts) {
            console.log('aaa', arguments)
            me.fireEvent('progressbarstart');
        });

        Ext.Ajax.on('requestexception', function (conn, response, options) {
            me.fireEvent('progressbarstop', response);
            Ext.Msg.show({
                title: '통신 오류',
                msg: '잠시 오류가 발생하고 있습니다. \n\n 계속 오류가 발생할 경우 관리자에게 문의하세요.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        });

        Ext.Ajax.on('requestcomplete', function (conn, response, options, eOpts) {
            me.fireEvent('progressbarend');
            var result = Ext.JSON.decode(response.responseText, true);  // #1
            if (result.errMsg) {    // #2
                Ext.MessageBox.show({  // #3
                    title: result.errTitle, // #4
                    msg: result.errMsg, // #5
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK,
                    fn: function () {   // #6
                        if (result.reload) {    // #7
                            window.location.reload();   // #7
                        }
                    }
                });
            }
        });
    }
});