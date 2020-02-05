Ext.define('cla.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'cla.view.main.MainModel',
        'cla.view.main.MainController',
        'cla.view.customer.Grid',
        'cla.view.customer.Form'
    ],
    controller: "cla-main",

    viewModel: {
        type: "cla-main"
    },
    layout: {
        type: "vbox",
        align: "stretch"
    },
    defaults: {
        border: true
    },
    items: [
        {
            xtype: "customersgrid",
            title: "Customers Grid",
            height: 220
        },
        {
            xtype: "customerform",
            title: "Customer Form",
            height: 250
        }
    ]
});