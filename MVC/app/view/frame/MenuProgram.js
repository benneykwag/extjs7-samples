Ext.define('SAT.view.frame.MenuProgram', {
    extend: 'Ext.panel.Panel',
    xtype: 'menuprogram',

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'dataview',  // #1
                    cls: 'dataview-list',   // #2
                    itemSelector: '.dataview-list-item',    // #3
                    tpl: [
                        '<tpl for=".">', // #4
                        '<div class="dataview-list-item {iconCls}">',   // #5
                        '&nbsp;&nbsp;{pgmNm}',  // #6
                        '</div>',
                        '</tpl>'
                    ],
                    overItemCls: 'dataview-list-item-hover',    // #7
                    store: 'MenuPrograms',  // #8
                    listeners: {
                        afterrender: {  // #9
                            fn: me.onFilterData,
                            scope: me
                        }
                    }
                }
            ],
            listeners: {
                expand : this.onFilterData  // #10
            }
        });
        me.callParent(arguments);
        var store = Ext.getStore('MenuPrograms');   // #11
        if (!store.loading) {   // #12
            store.load();   // #13
        }
    },

    onFilterData: function(p, eOpts) {
        var me = this,
            store = me.down('dataview').store;  // #14
        if (me.collapsed) {     // #15
            return false;   // #16
        }
        store.clearFilter();    // #17
        store.filter([      // #18
            {
                property: 'pgmSysCd',   // #19
                value: me.pgmSysCd  // #20
            }
        ]);
    }
});