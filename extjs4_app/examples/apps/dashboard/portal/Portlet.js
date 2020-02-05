/**
 * @class Ext.app.Portlet
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.portal.Portlet', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.portlet',
	layout: 'fit',
	anchor: '100%',
	frame: true,
	closable: true,
//	collapsible: true,
//	animCollapse: true,
	draggable: {
		moveOnDrag: false
	},
	cls: 'x-portlet',

	// Override Panel's default doClose to provide a custom fade out effect
	// when a portlet is removed from the portal
	doClose: function () {
		var me = this;
		// Ext.defer(function () {
//		console.log(me.ownerCt.id);
//		console.log(Ext.getCmp(me.ownerCt.id));
		console.log('portalcolumnCount', me.type, Ext.ComponentQuery.query('portletgroup[type='+me.type+'] portalcolumn')[0]);

		Ext.ComponentQuery.query('portletgroup[type='+me.type+'] portalcolumn')[0].insert(0,{
			xtype : 'portlet',
			type : me.type,
			items : Ext.create(me.portletClsName),
			portletClsName: me.portletClsName,
			title : me.title
		});
		me.up('dbvpt').onSave(me.classId);
		if (!this.closing) {
			this.closing = true;
			this.el.animate({
				opacity: 0,
				callback: function () {

					var closeAction = this.closeAction;
					this.closing = false;
					this.fireEvent('close', this);
					this[closeAction]();
					if (closeAction == 'hide') {
						this.el.setOpacity(1);
					}
				},
				scope: this
			});
		}
	}
});