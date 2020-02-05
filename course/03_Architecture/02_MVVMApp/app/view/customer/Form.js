Ext.define("cla.view.customer.Form", {
    extend: "Ext.form.Panel",
    alias: "widget.customerform",
    bodyPadding: 10,
    bind: {
        title: "<b>{currentCustomer.name}</b>"
    },
    modelValidation: true,
    fieldDefaults: {
        labelWidth: 70,
        labelAlign: "right",
        selectOnFocus: true,
        flex: 1,
        anchor: "100%"
    },
    items: [
        {
            fieldLabel: "Customer",
            bind: "{currentCustomer.name}",
            xtype: "textfield"
        },
        {
            layout: "hbox",
            anchor: "100%",
            defaults: {
                xtype: "textfield"
            },
            items: [
                {
                    fieldLabel: "Street",
                    bind: "{currentCustomer.addrStreet}"
                },
                {
                    fieldLabel: "City",
                    bind: "{currentCustomer.addrCity}"
                },
                {
                    fieldLabel: "Country",
                    bind: "{currentCustomer.addrCountry}"
                }
            ]
        }
    ],
    buttons: [
        {
            text: "Commit",
            handler: "onCommit",
//            disabled: true,
            bind: {
//                disabled: "{!status.dirtyAndValid}",
                disabled: '{!(currentCustomer.valid&&currentCustomer.dirty)}'
            }
        },
        {
            text: "Reject",
            handler: "onReject",
            disabled: true,
            bind: {
                disabled: "{!status.dirty}"
            }
        }
    ]
});
