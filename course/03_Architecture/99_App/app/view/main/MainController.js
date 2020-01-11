Ext.define("cla.view.main.MainController", {
    extend: "Ext.app.ViewController",
    alias: "controller.cla-main",

    onReject: function () {
        var b = this.getViewModel().get("currentCustomer");
        b.reject()
    },

    onCommit: function () {
        var b = this.getViewModel().get("currentCustomer");
        b.commit();
    }
});
