Ext.define('SAT.view.frame.LoginUserInfo', {
    extend: 'Ext.window.Window',
    alias: 'widget.loginuserinfo',

    width: 400,
    layout: 'fit',
    title: '나의 정보',
    closeAction: 'destroy',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    defaults: {
                        xtype: 'textfield',
                        anchor: '100%',
                        labelWidth: 80
                    },
                    bodyPadding: 15,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'on-save-userinfo',
                                    text: '저장'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'close',
                                    text: '닫기',
                                    handler: function(){
                                        me.close();
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'fieldset',
                            title: '기본정보',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '이메일',
                                    msgTarget: 'under',
                                    name: 'email',
                                    allowBlank: false,
                                    maxLength: 25,
                                    minLength: 3,
                                    vtype: 'email'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '이름',
                                    msgTarget: 'under',
                                    name: 'userName',
                                    allowBlank: false,
                                    maxLength: 25,
                                    minLength: 3
                                },
                                {
                                    xtype: 'radiogroup',
                                    fieldLabel: '성별',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            name: 'gender',
                                            boxLabel: '남',
                                            checked: true,
                                            inputValue: 'M'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name: 'gender',
                                            boxLabel: '여',
                                            inputValue: 'F'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            checkboxName: 'change',
                            checkboxToggle: true,
                            collapsed: true,
                            title: '비밀번호 변경',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    disabled: true,
                                    fieldLabel: '현재 비밀번호',
                                    msgTarget: 'under',
                                    name: 'chk_password',
                                    inputType: 'password',
                                    allowBlank: false,
                                    enableKeyEvents: true,
                                    minLength: 3
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    disabled: true,
                                    fieldLabel: '비밀번호',
                                    msgTarget: 'under',
                                    name: 'n_chk1_password',
                                    inputType: 'password',
                                    allowBlank: false,
                                    enableKeyEvents: true,
                                    minLength: 3
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    disabled: true,
                                    fieldLabel: '비밀번호확인',
                                    msgTarget: 'under',
                                    name: 'n_chk2_password',
                                    inputType: 'password',
                                    allowBlank: false,
                                    enableKeyEvents: true,
                                    minLength: 3
                                },
                                {
                                    xtype: 'hiddenfield',
                                    anchor: '100%',
                                    fieldLabel: 'Label',
                                    name: 'password'
                                }
                            ],
                            listeners: {
                                render: {
                                    fn: me.onFieldsetCollapse,
                                    scope: me
                                },
                                expand: {
                                    fn: me.onFieldsetExpand,
                                    scope: me
                                }
                            }
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onRenderUser,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },
    // #1
    onRenderUser: function(component, eOpts) {
        component.loadRecord(Ext.create('SAT.model.User')); // #2
    },
    // #3
    onFieldsetCollapse: function(fieldset, eOpts) {
        this.setPwdFields(fieldset, true);  // #4
    },
    // #5
    onFieldsetExpand: function(fieldset, eOpts) {
        this.setPwdFields(fieldset, false); // #6
    },
    // #7
    setPwdFields: function(fieldSet, disable) {
        var pwds = fieldSet.query('textfield'); // #8

        Ext.each(pwds, function(password){
            password.setDisabled(disable);  // #9
        });
    }

});