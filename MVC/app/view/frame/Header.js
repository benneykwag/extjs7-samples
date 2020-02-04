Ext.define('SAT.view.frame.Header', {
    extend: 'Ext.container.Container',
    xtype: 'frameheader',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.ProgressBar',
        'SAT.view.frame.TopMenu'    // #1
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'topmenu'    // #2
                },
                {
                    xtype: 'toolbar',
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',    // #3
                            itemId: 'fullscreen',
                            iconCls: 'button-icon-move'
                        },
                        {
                            xtype: 'button',    // #4
                            disabled: true,
                            itemId: 'originscreen',
                            iconCls: 'button-icon-trackback'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',    // #7
                            itemId: 'help',
                            iconCls: 'button-icon-help' // #8
                        },
                        {
                            xtype: 'progressbar',   // #9
                            itemId: 'topprogressbar',
                            maxWidth: 400,
                            minWidth: 300,
                            text: 'Stand By...',
                            value: 0
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});