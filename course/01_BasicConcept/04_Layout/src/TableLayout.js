Ext.define('chapter4.TableLayout', {
   extend: 'Ext.panel.Panel',
    xtype: 'chapter4-tablelayout',
    width: 500,
    height: 300,
    layout: {
        type : 'table',
        columns : 4
    },
    items: [
        {
            height: 100,
            colspan: 4,
            html : '헤더 <br/>Colspan : 4, Rowspan : 1'
        },
        {
            width: 100,
            height: 200,
            rowspan: 2,
            html : '메뉴 <br/>Colspan:1, Rowspan:2'
        },
        {
            width: 300,
            height: 100,
            colspan: 2,
            html: 'Colspan:2, Rowspan:1'
        },
        {
            width: 300,
            height: 200,
            rowspan: 2,
            html: 'Colspan 1, Rowspan : 2'
        },
        {
            height: 100,
            width: 150,
            html : 'colspan1, rowspan1'
        },
        {
            height: 100,
            width: 150,
            html : 'colspan1, rowspan1'
        }
    ]
});