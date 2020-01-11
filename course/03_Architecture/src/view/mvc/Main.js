Ext.define('arch.view.mvc.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mvc-main',
    tbar: [
        {
            xtype: 'button',
            text: 'Refresh'
        },
        {
            xtype: 'button',
            itemId: 'Save',
            text: 'Save'
        },
        {
            xtype: 'button',
            itemId: 'Delete',
            text: 'Delete'
        }
    ],
    items: [
        {
            xtype: 'datagrid'
        }
    ]
});