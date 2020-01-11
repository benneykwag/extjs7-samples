Ext.define('chapter4.BorderLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter4-borderlayout',
    title: 'Border Layout',
    border: true,
    width: 400,
    height: 400,
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            title: 'center',
            region: 'center'
        },
        {
            xtype: 'panel',
            title: 'West',
            region: 'west',
            width: 100,
            collapsible : true,
            split : true,
            titleCollapse : true
        },
        {
            title : 'East',
            region : 'east',
            margins : '0 5 0 5',
            flex :.5,
            collapsible : true,
            collapsed : false
        },
        {
            title: 'South',
            region: 'south',
            margin: '0 5 5 5',
            flex:.3,
            split: true
        },
        {
            title: 'North',
            region: 'north',
            margin: 5,
            height: 100
        }
    ]
});
