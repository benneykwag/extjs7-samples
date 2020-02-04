/**
 * @class Ext.app.Portlet
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.app.DashboardPortlet', {
	extend: 'Ext.Component',
	alias: 'widget.dashboardportlet',
	initComponent: function () {
		var me = this;
		Ext.apply(this, {
			width: 200,
			height: 100,
			html: {
				tag: 'div',
				html: 'X',
				style: {
					'float': 'right',
					'padding': '10px',
					'background-color': '#e00',
					'color': '#fff',
					'font-weight': 'bold'
				}
			},
			myOwnProperty: [1, 2, 3, 4]
		});

		me.callParent(arguments);
		console.log('1. initComponent')
	},
	beforeRender: function () {

		console.log('2. beforeRender');

		this.callParent(arguments);

	},

	onRender: function () {

		console.log('3. onRender');

		this.callParent(arguments);

		this.el.setStyle('background-color', '#ccc');

	},

	afterRender: function () {

		console.log('4. afterRender');

		this.el.down('div').on('click', this.myCallback, this);

		this.callParent(arguments);

	},

	beforeDestroy: function () {

		console.log('5. beforeDestroy');

		this.callParent(arguments);

	},
	onDestroy: function () {

		console.log('6. onDestroy');

		delete this.myOwnProperty;

		this.el.down('div').un('click', this.myCallback);

		this.callParent(arguments);

	},
	myCallback: function () {

		var me = this;
		Ext.Msg.confirm('Confirmation', 'Are you sure you want to close this panel?', function (btn) {
			if (btn === 'yes') {
				me.destroy();
			}
		});
	}
});