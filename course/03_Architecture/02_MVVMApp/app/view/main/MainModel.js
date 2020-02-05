Ext.define("cla.view.main.MainModel", {
    extend : "Ext.app.ViewModel",
    alias : "viewmodel.cla-main",
    requires: ['cla.model.Customer'],
    stores : {
        customers : {
            proxy : {
                type : "ajax",
                url : "data/data.json",
                actionMethods : {
                    read : "POST"
                },
                reader : {
                    type : "json",
                    rootProperty : "data"
                }
            },
           
            model : "cla.model.Customer",
            autoLoad : true
        }
    },
    formulas : {
        currentCustomer : {
            bind : {
                bindTo : "{customersGrid.selection}",
                deep : true
            },
            get : function(b) {
                return b
            }
        },
        status : {
            bind : {
                bindTo : "{currentCustomer}",
                deep : true
            },
            get : function(c) {
                var d = {
                    dirty : c ? c.dirty : false,
                    valid : c && c.isModel ? c.isValid() : false
                };
                d.dirtyAndValid = d.dirty && d.valid;
                return d;
            }
        }
    }
});
