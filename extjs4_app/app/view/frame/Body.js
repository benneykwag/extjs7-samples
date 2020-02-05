Ext.define('SAT.view.frame.Body', {
    extend: 'Ext.container.Container',
    xtype: 'framebody',
    requires: [
        'SAT.view.frame.MenuGroup',
        'SAT.view.frame.PgmDashBoard'
    ],
    layout: 'border',
    items: [
        {
            region: 'west',
            xtype: 'menugroup',
            width: 150,
            split: true
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'pgmdashboard'
                }
            ]
        }
    ]
});