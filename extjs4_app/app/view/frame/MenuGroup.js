Ext.define('SAT.view.frame.MenuGroup', {
    extend: 'Ext.panel.Panel',
    xtype: 'menugroup',
    requires : ['SAT.view.frame.MenuProgram'],
    layout: 'accordion',
    onRender: function(component, eOpts) {  // #1
        var me = this;
        me.callParent(arguments);
        Ext.getStore('MenuGroups').load(function (records, b, c) {  // #2
            Ext.each(records, function (rec) {  // #3
                me.add({        // #4
                    xtype: 'menuprogram', // #5
                    title: rec.get('pgmSysNm'), // #6
                    pgmSysCd: rec.get('pgmSysCd'),  // #7
                    iconCls: rec.get('iconCls') // #8
                });
            });
        });
    }
});