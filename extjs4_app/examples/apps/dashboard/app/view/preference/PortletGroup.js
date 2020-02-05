Ext.define('Dashboard.view.preference.PortletGroup', {
	extend : 'Ext.portal.PortalPanel',
	alias : 'widget.portletgroup',

	initComponent : function() {
		var me = this;
		Ext.applyIf(this, {
			items : [ {
				xtype : 'portalcolumn'
			} ]
		});
		me.callParent(arguments);
		me.on('afterrender', function(panel){
			this.getHeader().addCls('left-group-header');
			var store = Ext.create('Ext.data.Store', {
        		autoLoad: true,
        		proxy : {
        			type : 'memory',
        			reader : {
        				type : 'array'
        			}
        		},
        		fields : ['cd','cdnm','description'],
        		data : eval('Dashboard.view.common.DataSet.'+me.type)
        	});
        	store.each(function(record){
        		me.down('portalcolumn').add({
        			xtype : 'portlet',
        			items : Ext.create(record.get('cd')),
        			type : me.type,
        			portletClsName: record.get('cd'),
        			title :  record.get('cdnm')
        		});
        	});
		});
		me.on('expand',  function(panel){
			console.log('expand', arguments)
		});
	}
});
