Ext.Loader.setConfig({
    enabled : true,
    paths : {
        'Dashboard' : 'app'
//        'Ext.portal' : 'portal'
    }
});
Ext.onReady(function(){
    Ext.create('Dashboard.view.preference.DashboardMain', {
        renderTo : document.body
    });
});