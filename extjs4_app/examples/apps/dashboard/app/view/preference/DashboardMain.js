
Ext.define('Dashboard.view.preference.DashboardMain', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.dbmaint',
//	renderTo: document.body,
	requires : [ 'Ext.toolbar.Toolbar',
//			'Dashboard.view.preference.DashboardSetToolbar',
//			'Dashboard.view.preference.PortletGroup', 'Ext.panel.Panel',
//			'Ext.portal.PortalPanel', 'Ext.portal.PortalColumn',
//			'Ext.portal.ChartPortlet',
//            'Dashboard.view.preference.DashboardPanel',
            'Dashboard.view.common.DataSet',
			'Dashboard.view.preference.RightTabPanel',
			'Dashboard.view.portlet.CountryStudy'],

	layout :  'border',

	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'container',

				layout : 'border',
				margin : '15 5 15 15',
				width : 315,
				region : 'west',

				items: [{
					xtype : 'component',
					region : 'north',
					html : '<div class="dashP01Head"><ul><li class="current"><a href="#" title="">권역별 데이터</a></li></ul></div>',
					height: 27
				},{
					region : 'center',
					xtype : 'container',
					cls : 'dashP01',
					autoScroll: true,
					//margin : '5 5 5 5',
					itemId : 'db-left'
				}]
			},
			{
				region : 'center',
				xtype : 'righttabpanel'
			}]
		});

		me.callParent(arguments);

		me.on('beforerender', function() {
			var store = Ext.create('Ext.data.Store', {
				autoLoad : true,
				proxy : {
					type : 'memory',
					reader : {
						type : 'array'
					}
				},
				fields : ['classId', 'className','title','height','positionItemId', 'columnWidth','type','args'],
				data : Dashboard.view.common.DataSet.dbData
			});
			store.each(function(record) {
				if(record.get('positionItemId') == 'db-left' || record.get('positionItemId') == 'db-tab1-left'){
					me.down('[itemId=' + record.get('positionItemId') + ']').add(
						Ext.create(record.get('className'), {
							classId : record.get('classId'),
						//height : record.get('height'),
							args: record.get('args')
						})
					);
				}else{
					me.down('[itemId=' + record.get('positionItemId') + ']').add({
						xtype : 'panel',
						title : record.get('title'),
						items: Ext.create(record.get('className'), {
							classId : record.get('classId'),
							//height : record.get('height'),
							args: record.get('args')
						})
					});
				}
			});
		});
	},

	onRender : function() {
		this.el.setStyle({
			'background-color' : 'white'
		});

		this.callParent(arguments);
	}
});