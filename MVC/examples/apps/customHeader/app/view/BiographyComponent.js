Ext.define('MyApp.view.BiographyComponent', {
    extend: 'MyApp.view.TitledComponent',
    xtype: 'biography',
    cls: 'green-box',
    titleAlign : 'left',
    height : 160,
    width : 300,
    header: 'Biography11',
    tpl: [
        '<tpl for=".">',
        '<li class="list-row">{.}</li>',
        '</tpl>'
    ],
    data: ['London', 'Paris', 'Moscow', 'New York', 'Tokyo'],
    autoEl: 'ul',
    // Override update to automatically set the date in the header
    update: function(data) {
        this.callParent(arguments);

        this.setHeader('Biography updated at ' );
    }
});