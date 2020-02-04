Ext.define('Dashboard.view.portlet.GridPortlet', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridportlet',
	padding : '5 5 5 5',
	uses: [
		'Ext.data.ArrayStore'
	],
	height: 250,
	myData: [
		['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'],
		['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
		['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
		['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
		['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
		['AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am'],
		['Pfizer Inc', 27.96, 0.4, 1.45, '9/1 12:00am'],
		['The Coca-Cola Company', 45.07, 0.26, 0.58, '9/1 12:00am'],
		['The Home Depot, Inc.', 34.64, 0.35, 1.02, '9/1 12:00am'],
		['The Procter & Gamble Company', 61.91, 0.01, 0.02, '9/1 12:00am'],
		['United Technologies Corporation', 63.26, 0.55, 0.88, '9/1 12:00am'],
		['Verizon Communications', 35.57, 0.39, 1.11, '9/1 12:00am'],
		['Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am']
	],

	/**
	 * Custom function used for column renderer
	 * @param {Object} val
	 */
	change: function (val) {
		if (val > 0) {
			return '<span style="color:green;">' + val + '</span>';
		} else {
			if (val < 0) {
				return '<span style="color:red;">' + val + '</span>';
			}
		}
		return val;
	},

	/**
	 * Custom function used for column renderer
	 * @param {Object} val
	 */
	pctChange: function (val) {
		if (val > 0) {
			return '<span style="color:green;">' + val + '%</span>';
		} else {
			if (val < 0) {
				return '<span style="color:red;">' + val + '%</span>';
			}
		}
		return val;
	},

	initComponent: function () {

		var store = Ext.create('Ext.data.ArrayStore', {
			fields: [
				{name: 'company'},
				{name: 'change', type: 'float'},
				{name: 'pctChange', type: 'float'}
			],
			data: this.myData
		});

		Ext.apply(this, {
			store: store,
			stripeRows: true,
			columnLines: true,
			columns: [
				{
					text: 'Company1',
					//width: 120,
					flex: 1,
					sortable: true,
					dataIndex: 'company'
				},
				{
					text: 'Change',
					width: 75,
					sortable: true,
					renderer: this.change,
					dataIndex: 'change'
				},
				{
					text: '% Change',
					width: 75,
					sortable: true,
					renderer: this.pctChange,
					dataIndex: 'pctChange'
				}
			]
		});

		this.callParent(arguments);
		this.on('select', function (grid, record) {
			var panel = Ext.ComponentQuery.query('panel[itemId=portal_panel]')[0];
			panel.add({
				xtype: 'component',
				html: record.get('company')
			});
			console.log(panel)
		})
	}
});
