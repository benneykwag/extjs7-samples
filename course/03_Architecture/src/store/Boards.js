Ext.define('arch.store.Boards',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: '/course/02_DataPackage/data.json?read',
            create: 'data.json?create',
            update: 'data.json?update',
            destroy: 'data.json?destroy'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            allowSingle: false,
            writeAllFields: true
        }
    },
});