Ext.define('dog.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['dog.view.DogGrid', 'dog.view.DogView'],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'doggrid',
            flex: 1
        },
        {
            xtype: 'dogview',
            id: 'details',
            flex: 1
        }
    ]
});