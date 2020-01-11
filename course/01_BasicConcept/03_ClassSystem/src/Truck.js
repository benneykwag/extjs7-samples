
    Ext.define('ClassSystem.Truck', {
        extend: 'Ext.Component',
        requires: ['ClassSystem.Sonata'],
        initComponent: function(){
            var sonata = Ext.create('ClassSystem.Sonata');
            console.log(sonata.missionType);
            sonata.run(40);

            this.callParent(arguments);
        }
    });




    