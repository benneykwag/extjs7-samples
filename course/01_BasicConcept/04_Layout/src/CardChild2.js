Ext.define('chapter4.CardChild2', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-cardchild2',
    title: 'Child2',
    id: 'card2',
    border: 1,
    html: '두 번째 컨테이너(id: card2)',
    listeners: {
        render: function () {
            console.log('card2이 렌더링 됐습니다.')
        }
    }
});