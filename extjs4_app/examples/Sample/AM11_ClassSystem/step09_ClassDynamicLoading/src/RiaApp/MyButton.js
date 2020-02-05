Ext.define('RiaApp.MyButton',{
   extend : 'Ext.button.Button',
    xtype : 'mybutton',
    text: 'Click me',
    renderTo: Ext.getBody(),
    handler: function() {
        alert('You clicked the button!');
    }
});