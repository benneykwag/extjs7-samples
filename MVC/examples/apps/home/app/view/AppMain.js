Ext.define('Home.view.AppMain', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.dbmaint',
	requires : [ 'Home.view.MyStudy',
	             'Home.view.MyToDo',
	             'Home.view.MyAlert',
	             'Home.view.MyNotice',
	             'Home.view.MySchedule'
	             ],

	layout :  'border',

	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'container',
				region : 'west',
				margin : '20 10 15 20',
				width : 289,
				cls : 'homeP01 bdr_blue',
				layout : 'border',
				items : [{
					xtype : 'component',
					region : 'north',
					data : {},
					tpl: ['<div class="titleH">',
					      '	<h3>My Group</h3>',
					      '</div>']
				}, {
					xtype : 'mystudy',
					region : 'center'
				}]
			},
			{
				region : 'center',
				xtype : 'container',
				margin : '20 20 15 0',
				layout : {
					type : 'hbox',
					align : 'stretch'
				},
				items : [{
                    xtype : 'myschedule',
                    flex : .5
                },{
					xtype : 'container',
					flex : .5,
					layout : 'anchor',
					defaults: {
						margin : '0 0 5 10'
					},
					padding : '0 10 10 0',
		             items : [{
		            	 xtype : 'mytodo',
		            	 anchor : '100% 34%'
		             },{
		            	 xtype : 'myalert',
		            	 anchor : '100% 34%'
		             },{
		            	 xtype : 'mynotice',
		            	 anchor : '100% 34%'
		             }]
				}]
			}]
		});
		me.callParent(arguments);
		me.on('render', function(){

		});
	}
});