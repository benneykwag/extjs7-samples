/**
 * @class Ext.app.Portlet
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.portal.DashboardPortletTitle', {
	extend: 'Ext.Component',
	alias: 'widget.dbptitle',
	cls: 'dashP04Head',
//	cls: ''
	initComponent: function () {
		var me = this;
		Ext.apply(this, {
			//			width: 200,
			//			height: 100,
			data: {},

			tpl: ["<h3>"+this.title+"</h3>"],
//			html: {
//				tag: 'img',
//				cls : 'close',
//				html: 'X',
//				src : '/ctms/comm/images/btn_portlet_close.png',
//				style: {
//					'float': 'right',
//					'padding': '5px',
////					'background-color': '#e00',
////					'color': '#fff',
//					'font-weight': 'bold'
//				}
//			},
			myOwnProperty: [1, 2, 3, 4]
		});

		me.callParent(arguments);
//		console.log('1. initComponent')
	},
	beforeRender: function () {

//		console.log('2. beforeRender');

		this.callParent(arguments);

	},

	onRender: function () {

//		console.log('3. onRender', this);

		this.callParent(arguments);

//		Ext.core.DomHelper.append(this.getEl(), '<div class="moduleHead3" style="width:500px">11</div>');

		//		this.el.setStyle('background-color', '#ccc');

	},

	afterRender: function () {

//		console.log('4. afterRender', this.el.down('.portlet'));

//		this.el.down('.close').on('click', this.myCallback, this);

		this.callParent(arguments);

	},

	beforeDestroy: function () {

//		console.log('5. beforeDestroy');

		this.callParent(arguments);

	},
	onDestroy: function () {

		console.log('6. onDestroy');

		delete this.myOwnProperty;

		this.el.down('.close').un('click', this.myCallback);

		this.callParent(arguments);

	},
	myCallback: function () {

		var me = this;
		Ext.Msg.confirm('Confirmation', 'Are you sure you want to close this panel?', function (btn) {
			if (btn === 'yes') {
				me.up('dashboardpanel').destroy();
			}
		});
	}
});