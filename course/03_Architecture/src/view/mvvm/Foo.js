Ext.define('arch.view.mvvm.Foo', {
    extend: 'Ext.panel.Panel',
    xtype: 'foo',
    
    requires: [
        'arch.view.mvvm.FooController',
        'DataPackage.view.DataGrid',
        'arch.view.mvvm.BoardForm'
    ],

    viewModel: {
        data: {
            title: 'MVVM 샘플.'
        }
    },
    controller: 'foo',
    // defaultListenerScope: true,

    bind: {
        title: '{title}'
    },

    collapsible : true,
    split : true,
    titleCollapse : true,

    listeners: {
        change: {
            delegate: 'textfield[fieldLabel=검색]',
            fn: 'onBarChange'
        },
        scope: 'this',
        render: 'onBarChange'
    },
    tbar: [
        {
            xtype: 'textfield',
            reference: 'searchKey',
            fieldLabel: '검색',
            listeners: {
                change: 'onBarChange'
            }
        },
        {
            xtype: 'button',
            text: 'Search',
            handler: 'onSearch',
            reference: 'fooButton'
        },
        {
            xtype: 'button',
            text: '추가',
            handler: 'onAdd'
        }
    ],

    layout: 'hbox',

    items: [
        {
            reference: 'myGrid',
            xtype: 'datagrid',
            listeners: {
                select: 'onSelectData'
            }
        },
        {
            xtype: 'mvvm-form'
        }
    ],
    onBarChange: function (barTextField) {
        // called by 'change' event
        console.log('MyApp.view.foo.Foo called...')
    }
});