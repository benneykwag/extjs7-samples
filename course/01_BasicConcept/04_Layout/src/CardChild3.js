Ext.define('chapter4.CardChild3', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-cardchild3',
    id: 'card3',
    title: '세 번째 그리드 패널(id: card3)',
    listeners: {
        render: function () {
            console.log('card3이 렌더링 되었습니다.')
        }
    }
});