Ext.onReady(function () {
Ext.create('Ext.container.Viewport', {
    layout: {
        type: 'vbox',
        align: 'stretchmax',
        padding: 10
    },
    items: [
        {
            xtype: 'panel',
            title: '첫번째 패널',
            html: '가로 150px <br>세로 70px',
            height: 70,
            width: 150
        },
        {
            xtype: 'panel',
            title: '두번째 패널',
            width: 100,
            html: '세로길이는 가변적이다. <br>가로 100px',
            flex: 1
        },
        {
            xtype: 'panel',
            title: '세번째 패널',
            html: '가로 200px <br>세로 150px',
            height: 150,
            width: 200
        }
    ],
    renderTo: document.body
});
});
