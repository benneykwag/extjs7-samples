// className chapter4.AnchorLayout
// alias : chapter4-anchorlayout
// extend: 'Ext.panel.Panel
// layout : 'anchor
Ext.define('chapter4.AnchorLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-anchorlayout',
    width: 300,
    height: 300,
    title : 'Anchor Layout을 가진 부모',
    layout: 'anchor',
    items: [
        {
            xtype: 'panel',
            title: '#로 부모 크기 사용',
//            anchor : '75% 50%',
//            html : '너비는 부모의 75% 높이가 부모의 50%'
//            anchor: '-50 -100'  // #1
            anchor: '50% -100'
        }
    ]
});