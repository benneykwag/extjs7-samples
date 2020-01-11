Ext.define('chapter4.VBoxLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-vboxlayout',
    title: 'VBox Layout',
    border: true,
    width: 300,
    height: 400,
    layout: 'vbox',
    items: [
        {
            title: '첫번째 패널',
            html: '가로 150px<br/>세로 70px',
            width: 150,
            height: 70
        },
        {
            title: '두번째 패널',
            html: '너비는  100px <br>높이 가변적',
            flex:1,
            width: 100
        },
        {
            title: '세번째 패널',
            width: 200,
            height: 100,
            html: '너비200px<br/>높이 100px'
        }
    ]
});


    Ext.define('chapter4.VBoxLayout', {
        extend: 'Ext.panel.Panel',
        width: 300,
        height: 400,
        layout: 'vbox',
        items: [
            {
                title: '첫번째 패널',
                html: '가로 150px<br/>세로 70px',
                width: 150,
                height: 70
            },
            {
                title: '두번째 패널',
                html: '너비는  100px <br>높이 가변적',
                flex:1,
                width: 100
            },
            {
                title: '세번째 패널',
                width: 200,
                height: 100,
                html: '너비200px<br/>높이 100px'
            }
        ]
    });