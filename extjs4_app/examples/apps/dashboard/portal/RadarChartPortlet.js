Ext.define('Ext.portal.RadarChartPortlet', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.radarchartportlet',
    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.theme.Base',
        'Ext.chart.series.Series',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric'
    ],

	 seriesConfig : function(field) {
		return {
			type: 'radar',
			xField: 'name',
			yField: field,
			showInLegend: true,
			showMarkers: true,
			markerConfig: {
				radius: 5,
				size: 5
			},
			tips: {
				trackMouse: true,
				width: 100,
				height: 28,
				renderer: function(storeItem, item) {
					this.setTitle(storeItem.get('name') + ': ' + storeItem.get(field));
				}
			},
			style: {
				'stroke-width': 2,
				fill: 'none'
			}
		}
	},
    initComponent: function(){

        Ext.apply(this, {
            layout: 'fit',
          //  height: 200,
            items: {
                xtype: 'chart',
	            style: 'background:#fff',
	            theme: 'Category2',
	            animate: true,
	            store: store1,
	            insetPadding: 20,
	            legend: {
		            position: 'right'
	            },
	            axes: [{
		                   type: 'Radial',
		                   position: 'radial',
		                   label: {
			                   display: true
		                   }
	                   }],
	            series: [
		            this.seriesConfig('data1'),
		            this.seriesConfig('data2'),
		            this.seriesConfig('data3')
	            ]
            }
        });

        this.callParent(arguments);
    }
});
