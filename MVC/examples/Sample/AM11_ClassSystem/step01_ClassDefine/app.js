Ext.onReady(function () {

    Ext.define('MyClass', { // ①
        extend: 'Ext.panel.Panel', // ②

        initComponent: function () { // ③
            var me = this;
            var title = me.getMyName ();
            Ext.apply(me, {
                title: title,
                items: [
                    {
                        xtype: 'button' ,
                        text : 'Click Me!'
                    }
                ]
            });
            me.callParent(arguments); // ④
        },
        getMyName : function(){
           return "홍길동";
        }
    });

    var myClass = Ext.create('MyClass', { // ⑤
        renderTo: document.body
    });


    var panel = Ext.create('Ext.panel.Panel', {
        title: '안녕하세요 환영합니다.^^',
        items: [
            {
                xtype: 'button' ,
                text : 'Click Me!'
            }
        ],
        renderTo: document.body
    });


});