/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',

    name: 'cla',

    requires: [
        'cla.view.main.Main'
    ],

    launch: function(){
        Ext.create('cla.view.main.Main')
    }
});
