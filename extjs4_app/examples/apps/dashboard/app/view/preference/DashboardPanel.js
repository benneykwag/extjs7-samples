/**
 * @class Ext.app.Portlet
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Dashboard.view.preference.DashboardPanel', {
	extend: 'Ext.panel.Panel',
	requires: [
	    'Ext.portal.DashboardPortletTitle',
		'Ext.panel.Header',
		'Ext.fx.Anim',
		'Ext.util.KeyMap',
		'Ext.panel.DD',
		'Ext.XTemplate',
		'Ext.layout.component.Dock',
		'Ext.util.Memento'
	],
	alias: 'widget.dashboardpanel',
	cls : 'dashP04',

	addTools: Ext.emptyFn,
	afterRender: function(){
		this.el.removeCls('x-panel-default');
		this.callParent(arguments)
	},

	updateHeader: function(force) {
		var me = this,
			header = me.header,
			title = me.title,
			tools = me.tools,
			icon = me.icon || me.iconCls,
			vertical = me.headerPosition == 'left' || me.headerPosition == 'right';

		if (Ext.isObject(header) || (header !== false && (force || (title || icon) || (tools && tools.length) || (me.collapsible && !me.titleCollapse)))) {
			if (header && header.isHeader) {
				header.show();
			} else {
				// Apply the header property to the header config
				header = me.header = Ext.widget(Ext.apply({
					xtype       : 'dbptitle',
					title       : title,
					titleAlign  : me.titleAlign,
					orientation : vertical ? 'vertical' : 'horizontal',
					dock        : me.headerPosition || 'top',
					textCls     : me.headerTextCls,
					iconCls     : me.iconCls,
					icon        : me.icon,
					glyph       : me.glyph,
//					baseCls     : me.baseCls + '-header',
					tools       : tools,
					ui          : me.ui,
					id          : me.id + '_header',
					overCls: me.headerOverCls,
					indicateDrag: me.draggable,
					frame       : (me.frame || me.alwaysFramed) && me.frameHeader,
					ignoreParentFrame : me.frame || me.overlapHeader,
					ignoreBorderManagement: me.frame || me.ignoreHeaderBorderManagement,
					ownerCt     : me,
					listeners   : me.collapsible && me.titleCollapse ? {
						click: me.toggleCollapse,
						scope: me
					} : null
				}, me.header));
				// Header's onAdd mutates the tools array.
				// It replaces tool configs at each index with the instantiated tool
				// It also injects the tool instances as properties keyed by their type.
				me.addDocked(header, 0);
			}
			me.initHeaderAria();
		} else if (header) {
			header.hide();
		}
	}
});