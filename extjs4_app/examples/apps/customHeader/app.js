Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('MyApp', 'app');

Ext.require([
    'Ext.layout.container.Table',
    'Ext.ux.*'
]);

Ext.onReady(function () {
    var summary = Ext.create('MyApp.view.BiographyComponent', {
        renderTo : document.body
//        data: {
//            age: 26,
//            location: 'Italy',
//            name: 'Mario'
//        }
    });
});