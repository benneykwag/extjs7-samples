Ext.define('arch.controller.Root', {
    extend: 'Ext.app.Controller',
    alias: 'controller.root',
    refs: [
        {
            ref: 'myDataGrid',
            selector: 'datagrid'
        }
    ],
    models: ['DataPackage.model.Board'],
    stores: ['Boards'],
    control: {
        'mvc-main button[itemId=Save]': {
            click: 'onSave'
        },
        'button[itemId=Delete]': {
            click: 'onDelete'
        },
        'button[text=Refresh]': {
            click: 'onRefresh'
        }
    },

    init: function () {

    },

    onSave: function (btn) {
        console.log(btn)
    },

    onDelete: function (btn) {
        console.log(btn);
    },

    onRefresh: function () {
        this.getMyDataGrid().store.load();
    }
});