//  className: chapter4.AbsoluteLayout
//  alias : chapter4-absolutelayout
Ext.define('chapter4.AbsoluteLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-absolutelayout',
    layout: 'absolute',
    title: 'Absolute Layout',
    height: 300,
    width: 300,
    padding: '5 5 5 5',
    border: true,
    items: [
        {
            title: '패널',
            xtype: 'panel',
            width: 150,
            height: 150,
            x: 20,
            y: 30,
            html: 'x: 20, y: 30',
            frame: true
        },
        {
            title: '패널2',
            x: 100,
            y: 100,
            anchor: '80% 80%',      // #6
            html: 'x: 100, y: 100',
            frame: true
        }
    ]
});