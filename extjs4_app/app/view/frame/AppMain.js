Ext.define('SAT.view.frame.AppMain', {
    extend: 'Ext.container.Container',
    xtype: 'appmain',
    requires: [
        'SAT.view.frame.Header',
        'SAT.view.frame.Body'
    ],
    layout: 'border',
    items: [
        {
            region: 'north',
            frame: true,
            xtype: 'frameheader'
        },
        {
            region: 'center',
            frame: true,
            xtype: 'framebody'
        }
    ]
});