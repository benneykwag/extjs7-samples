Ext.onReady(function () {

Ext.create('Ext.panel.Panel', {
    title: 'Table Layout',
    width: 400,
    height: 300,
    margin : '5 5 5 5',
    renderTo: Ext.getBody(),
    layout: {
        type: 'table',
        columns: 4
    },
    items: [
        {
            height: 100,
            html: 'Colspan : 4. Rowspan = 1',
            colspan: 4
        },
        {
            height: 200,
            html: 'Colspan : 1. Rowspan : 2',
            rowspan: 2
        },
        {
            height: 100,
            width:200,
            html: 'Colspan : 2. Rowspan : 1',

            colspan: 2
        },
        {
            width: 100,
            height: 200,
            html: 'Colspan : 1. Rowspan : 2',

            rowspan: 2
        },
        {

            height: 100,
            width: 100,
            html: 'Colspan : 1. Rowspan : 1'
        },
        {

            height: 100,
            width: 100,
            html: 'Colspan : 1. Rowspan : 1'
        }
    ]
});

});