Ext.define('SAT.model.User', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Ajax',
        'Ext.data.writer.Json',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'userSeq'
        },
        {
            name: 'email'
        },
        {
            name: 'password'
        },
        {
            name: 'userName'
        },
        {
            name: 'joinDate'
        },
        {
            name: 'confirmDate'
        },
        {
            name: 'withdrawDate'
        },
        {
            name: 'crDate'
        },
        {
            name: 'roleId'
        },
        {
            name: 'roleNm'
        },
        {
            name: 'gender'
        },
        {
            name: 'joinDesc'
        }
    ],

    proxy: {
        type: 'ajax',
        api: {
            create: 'resources/json/user.json?createuser',
            read: 'resources/json/user.json?getusers',
            update: 'resources/json/user.json?updateuser',
            destroy: 'resources/json/user.json?destroyuser'
        },
        writer: {
            type: 'json',
            allowSingle: false,
            encode: true,
            root: 'data'
        },
        reader: {
            type: 'json',
            root: 'entitys'
        }
    }
});
