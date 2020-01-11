Ext.define('chapter4.HBoxLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-hboxlayout',
    title: 'HBox Layout',
    border: true,
    height: 300,
    layout: 'hbox',
    items: [
        {
            title: '첫번째 패널',
            html: '가로 100px<br/>세로 200px',
            width: 100,
            height: 200
        },
        {
            title: '두번째 패널',
            html: '너비는  가변적<br>높이 100px',
            height: 100,
            width: 200
        },
        {
            title: '세번째 패널',
            width: 100,
            height: 150,
            html: '너비00px<br/>높이 150px'
        }
    ]
});
