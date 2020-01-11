Ext.define('arch.view.mvvm.BoardForm', {
    extend: 'Ext.form.Panel',
    xtype: 'mvvm-form',
    items: [
        {
            fieldLabel: 'Name',
            xtype: 'textfield',
            bind: '{currentData.name}'
        },
        {
            fieldLabel: 'Title',
            xtype: 'textfield',
            bind: '{currentData.title}'
        },
        {
            fieldLabel: 'UserName',
            xtype: 'textfield',
            bind: '{currentData.userName}'
        },
        {
            fieldLabel: 'Content',
            xtype: 'textfield',
            bind: '{currentData.content}'
        },
        {
            fieldLabel: 'Role',
            xtype: 'textfield',
            bind: '{currentData.role}'
        },
        {
            fieldLabel: 'readCnt',
            xtype: 'textfield',
            bind: '{currentData.readCnt}'
        }
    ]
});