Ext.define('DataPackage.model.Board', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'userName',
            type: 'string'
        },
        {
            name: 'content',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'role',
            type: 'string'
        }
    ],
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
    validators: {
        title: 'presence',
        content: {
            type: 'length',
            min: 2,
            max: 10
        },
        role: [
            {
                type: 'exclusion',
                list: [
                    'Admin','Manager'
                ]
            }
        ]
    }
});