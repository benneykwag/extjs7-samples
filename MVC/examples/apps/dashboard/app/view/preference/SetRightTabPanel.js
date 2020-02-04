Ext.define('Dashboard.view.preference.SetRightTabPanel', {
	extend : 'Ext.container.Container',
	alias : 'widget.setrighttabpanel',
	requires : ['Dashboard.view.preference.RightTabTitle','Dashboard.view.portlet.StudyList'],
	cls : 'dashP01_content',
	margin : '0 0 0 5',
	layout: 'border',
	initComponent : function() {
		var me = this;
		Ext.apply(this, {
			items: [{
				region : 'north',
				xtype : 'righttitle',
				listeners : {
					tabchange: me.tabChange,
					scope : me
				}
			},
			{
				itemId : 'cardPanel',
				xtype: 'panel',
				cls : 'dashP01',
				overflowY: 'auto',
				region : 'center',
				layout : 'card',
				items: [{
					xtype : 'portalpanel',
					itemId : 'db-tab1',
					layout : 'column',
					defaults: {
						columnWidth: 1
//						margin : '5 5 5 5'
					},
					items: [{
//						autoScroll: true,
						xtype : 'portalcolumn',
						itemId : 'db-tab1-left',
//						margin : '10 0 5 5',
						defaults: {
//							margin : '5 0 0 0'
						}
					}]
				},
				{
					xtype : 'portalpanel',
					itemId : 'db-tab2',
					layout : 'column',
					defaults: {
						columnWidth: .5
					},
					items: [{
						xtype : 'portalcolumn',
						itemId : 'db-tab2-left'
//						margin : '10 0 5 5',
//						defaults: {
//							margin : '5 0 0 0'
//						}
					},
					{
						xtype : 'portalcolumn',
						itemId : 'db-tab2-right'
//						margin : '10 5 5 5'
					}]
				}]
			}]
		});

		me.callParent(arguments);
	},

	tabChange : function(tabIndex){
		this.down('[itemId=cardPanel]').getLayout().setActiveItem(parseInt(tabIndex)-1);
	}
});
