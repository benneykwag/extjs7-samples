Ext.define('DataPackage.view.DataGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'datagrid',
    requires: [
        'DataPackage.model.Board'
    ],
    width: 600,
    height: 300,

    store: {
        model: 'DataPackage.model.Board',
        autoLoad: true
    },
    columnLines: true,
    columns: [
        {
            text: "name",
            dataIndex: "name"
        },
        {
            text: "title",
            dataIndex: "title"
        },
        {
            text: "userName",
            dataIndex: "userName"
        },
        {
            text: "content",
            dataIndex: "content"
        },
        {
            text: "role",
            dataIndex: "role"
        },
        {
            text: "readCnt",
            dataIndex: "readCnt"
        }
    ]
});