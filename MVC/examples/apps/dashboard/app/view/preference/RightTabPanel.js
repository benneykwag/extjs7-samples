Ext.define('Dashboard.view.preference.RightTabPanel', {
	extend : 'Ext.container.Container',
	alias : 'widget.righttabpanel',
	requires : ['Dashboard.view.preference.RightTabTitle'],
	cls : 'dashP01_content',
	margin : '15 15 15 5',
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
//				overflowY: 'auto',
				region : 'center',
				layout : 'card',
				items: [{
					xtype : 'container',
					layout : 'fit',
					margin : '5 5 5 5',
					itemId : 'db-tab1-left'
				},
				{
					xtype : 'container',
					itemId : 'db-tab2',
					layout : 'column',
					defaults: {
						columnWidth: .5,
						margin : '5 5 5 5'
					},
					items: [{
						xtype : 'container',
						itemId : 'db-tab2-left',
						margin : '10 0 5 5',
						defaults: {
							margin : '5 0 0 0'
						}
					},
					{
						xtype : 'container',
						itemId : 'db-tab2-right',
						margin : '10 5 5 5',
						defaults: {
							margin : '5 0 0 0'
						}
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
