Ext.define('SAT.model.Program', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'pgmNm'
        },
        {
            name: 'pgmSysCd'
        },
        {
            name: 'pgmSysNm'
        },
        {
            name: 'pgmClass'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'pgmId'
        }
    ]
});