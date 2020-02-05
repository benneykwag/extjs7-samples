Ext.define('Dashboard.view.preference.RightTabTitle', {
    extend: 'Ext.view.View',
    alias : 'widget.righttitle',
    height : 27,
    cls : 'dashP01Head',
    itemSelector: '',
    onRender : function(){

    	var me = this;
		this.el.on('click', function(f, d){
			Ext.select('.dashP01Head ul li').removeCls('current');
			Ext.get(d).up('li').addCls('current');
			me.fireEvent('tabchange', Ext.get(d).getAttribute('tabIndex'));
		}, this, {
			delegate : 'a',
			preventDefault: true
		});

		this.callParent(arguments);
    },

    initComponent: function(){
    	var me = this;
    	Ext.apply(this, {
    		store : Ext.create('Ext.data.Store', {
				autoLoad : true,
				proxy : {
					type : 'memory',
					reader : {
						type : 'array'
					}
				},
				fields : ['title'],
				data : Dashboard.view.common.DataSet.titleData
			}),
    		tpl: [
    		      '<div class="dashP01Head">',
    		      	'<ul>',
    		      		'<tpl for=".">',
    		      			'<li class="{[xindex === 1 ? "current" : ""]}"><a href="#" tabIndex="{[xindex]}">{title}</a></li>',
    		      		'</tpl>',
    		      	'</ul>',
    		      '</div>']
    	});
    	me.callParent(arguments);
    }
});