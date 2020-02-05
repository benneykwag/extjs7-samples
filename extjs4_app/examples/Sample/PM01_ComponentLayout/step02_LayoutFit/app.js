Ext.onReady(function () {
Ext.create('Ext.container.Container', {
    title: 'Fit Layout',
    width: 500,
    height: 100,
    style: {
        margin: '50px',
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: '5px'
    },
    layout: 'fit',
    items: [
        {
            xtype: 'button',
            text: '첫번째 버튼'
        },
        {
            xtype: 'button',
            text: '두번째 버튼'
        },
        {
            xtype: 'panel',
            title: '세번째 패널',
            html: '크기가 정해지지 않은 패널'
        }
    ],
    renderTo: Ext.getBody()
});

});
