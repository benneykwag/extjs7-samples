Ext.Loader.setConfig({
    enabled : true,
    paths : {
        'Home' : 'app'
    }
});
Ext.require('Home.model.Data');
Ext.require('Home.view.DataSet');
Ext.onReady(function(){

    Ext.create('Home.view.AppMain');
});