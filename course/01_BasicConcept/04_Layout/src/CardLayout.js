Ext.define('chapter4.CardLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-cardlayout',
    title: 'Card Layout',
    requires: [
        'chapter4.CardChild1',
        'chapter4.CardChild2',
        'chapter4.CardChild3'
    ],
    width: 350,
    height: 250,
    layout: {
        type: 'card',
        deferredRender: true
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            bbar: [
                {
                    xtype: 'button',
                    text: '이전',
                    handler: function (btn) {
                        var layout = btn.up('panel').getLayout();
                        if (layout.getPrev()) {
                            layout.prev();
                            me.cardInfo();
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: '다음',
                    handler: function (btn) {
                        var layout = btn.up('panel').getLayout();
                        if (layout.getNext()) {
                            layout.next();
                            me.cardInfo();
                        }
                    }
                }
            ],
            items: [
                {
                    xtype: 'chapter4-cardchild1'
                },
                {
                    xtype: 'chapter4-cardchild2'
                },
                {
                    xtype: 'chapter4-cardchild3'
                }
            ],
            listeners: {
                render: {
                    fn: me.cardInfo,
                    scope: me
                }
            }
        });
        this.callParent(arguments);
    },

    cardCheck: function (domId) {
        var checkValue = Ext.Object.isEmpty(document.getElementById(domId));

        return domId + '는  ' + (checkValue ? '존재하지 않는다' : '존재한다.') + '전체 dom 크기는'
            + document.getElementsByTagName("*").length + '입니다.';
    },

    cardInfo: function () {
        var me = this,
            task = new Ext.util.DelayedTask(function () {
                console.log(me.cardCheck('card1'));
                console.log(me.cardCheck('card2'));
                console.log(me.cardCheck('card3'));
            });
        task.delay(500);
    }
});