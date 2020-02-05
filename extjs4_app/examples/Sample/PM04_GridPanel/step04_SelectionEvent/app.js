Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('MyApp', 'app');

Ext.require([
    'Ext.layout.container.Table',
    'Ext.ux.*'
]);

Ext.onReady(function () {
    Ext.create('MyApp.view.MyGrid', {
        renderTo : document.body,
        listeners: {
            select: function (grid, record, index) {
            console.log('selected grid Data : ', index, record.data)
            },
            itemclick: function (grid, record, item, index) {
                console.log('itemclick grid Data : ', index, record.data)
            },
            itemdblclick: function (grid, record, item, index) {
                console.log('itemdblclick grid Data : ', index, record.data)
            },
            cellclick: function (grid, td, cellIndex, record, tr, rowIndex) {
                console.log('cellclicked grid Data : ', cellIndex, record.data)
            },
            celldblclick: function (grid, td, cellIndex, record, tr, rowIndex) {
                console.log('celldblclicked grid Data : ', cellIndex, record.data)
            }
        }
    });
});