Ext.define('SAT.store.MenuPrograms', {
    extend: 'Ext.data.Store',

    requires: [
        'SAT.model.Program',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    model: 'SAT.model.Program',
    proxy: {
        type: 'ajax',
        url: 'resources/json/menuprograms.json',
        reader: {
            type: 'json',
            messageProperty: 'message',
            root: 'entitys',
            totalProperty: 'totalCount'
        }
    }
});