Ext.define('Home.view.MyNotice', {
	extend : 'Ext.container.Container',
	alias : 'widget.mynotice',
	cls : 'homeP01 bdr_blue',
    layout: 'border',
	initComponent: function(){
    	var me = this;
    	Ext.apply(this, {
    		items : [this.getTitle(),
    		         this.getGridPanel()]
    	});
    	me.callParent(arguments);
	},
	getTitle : function(){
		return {
			xtype : 'component',
			region : 'north',
			data : {},
			tpl: ['<div class="titleH">',
			      '	<h3>Schedule3</h3>',
			      '</div>']
		};
	},

	getGridPanel : function(){
        var store = Ext.create('Home.store.CalendarGridStore', {
            depth : 'myalert',
            autoLoad: true
        });

        return {
            xtype : 'grid',
            hideHeaders: true,
            region : 'center',
            store : store,
            columns : [{ text: '강의일',  dataIndex: 'scheduleDt' },
                       { text: '제목', dataIndex: 'scheduleTitle', flex: 1 },
                       { text: '장소', dataIndex: 'area', flex: 1 },
                       { text: '인원', dataIndex: 'studendCnt' }],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: store,   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
        };
	}
});
