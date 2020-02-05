Ext.define('SAT.view.frame.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'topmenu',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    cls: 'custom-button-text-bold',
                    text: 'ExtJS Ria Application',
                    menu: {
                        xtype: 'menu',
                        width: 200,
                        items: [
                            {
                                xtype: 'menuitem',
                                itemId: 'about',
                                width: 300,
                                iconCls: 'button-icon-film',
                                text: '애플리케이션 정보'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                iconCls: 'button-icon-display',
                                text: '보기설정',
                                menu: {
                                    xtype: 'menu',
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            itemId: 'fullscreen',
                                            iconCls: 'button-icon-move',
                                            text: '전체보기 설정'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            disabled: true,
                                            itemId: 'originscreen',
                                            iconCls: 'button-icon-trackback',
                                            text: '전체보기 해제'
                                        }
                                    ]
                                }
                            },
                            {
                                xtype: 'menuitem',
                                itemId: 'exit',
                                iconCls: 'button-icon-exit',
                                text: '프로그램 종료'
                            }
                        ]
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'label',
                    text: 'UserName'
                },
                {
                    xtype: 'cycle',
                    cls: 'custom-button-text-bold ',
                    itemId: 'userInfo',
                    allowDepress: false,
                    showText: true,
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menucheckitem',
                                text: '[접속중..]'
                            },
                            {
                                xtype: 'menucheckitem',
                                text: '로그아웃'
                            },
                            {
                                xtype: 'menucheckitem',
                                text: '나의 정보'
                            }
                        ]
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});