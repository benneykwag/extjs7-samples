Ext.define('chapter4.CardChild1', {
    extend: 'Ext.form.Panel',
    xtype: 'chapter4-cardchild1',
    id: 'card1',                   // #1
    bodyPadding: 5,
    width: 300,
    title: '첫번째 패널(id: card1)',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'Start date'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'End date'
        }
    ],
    listeners: {
        render: function () {   // #2
            console.log('card1이 렌더링 되었습니다.')
        }
    }
});