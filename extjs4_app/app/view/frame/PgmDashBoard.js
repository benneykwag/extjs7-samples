Ext.define('SAT.view.frame.PgmDashBoard', {
    extend: 'Ext.container.Container',
    xtype: 'pgmdashboard',
    title: '데시보드',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            margin: '5 5 5 5',
            flex: .3,
            cls: 'basic_round_board blue_board'
        },
        {
            xtype: 'container',
            margin: '5 5 5 5',
            flex: .4,
            cls: 'basic_round_board blue_board'
        },
        {
            xtype: 'container',
            margin: '0 5 5 5',
            flex: .3,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: '5 0 0 0'
            },
            items: [
                {
                    xtype: 'grid',
                    store: '',
                    columns: [
                        { text: 'Name', dataIndex: 'name', flex: 1 },
                        { text: 'Email', dataIndex: 'email', flex: 1 },
                        { text: 'Phone', dataIndex: 'phone', flex: 1}
                    ],
                    cls: 'basic_round_board blue_board',
                    flex: .5
                },
                {
                    xtype: 'container',
                    cls: 'basic_round_board blue_board',
                    flex: .5
                }
            ]

        }
    ]
})