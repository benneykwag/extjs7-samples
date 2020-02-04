Ext.define('Dashboard.view.portlet.StudyList', {
    extend: 'Ext.view.View',
    alias : 'widget.studylist',
    cls : 'dashP01_content',
    trackOver: true,
    autoScroll: true,
    cls: 'feed-list',
    itemSelector: '.dashP02',
    overItemCls: 'feed-list-item-hover',
    onRender : function(){
    	var me = this;
		this.callParent(arguments);
		 var task = new Ext.util.DelayedTask(function() {
		        me.getSelectionModel().select(me.store.getAt(0));
		        Ext.select('.x-border-layout-ct').removeCls('x-border-layout-ct');
		 });
		 task.delay(100);
    },

    selectOnChange : function(dataview, record){
    	Ext.select( 'div.dashP03Head').removeCls('dashP03Head')
    	Ext.select( '.x-item-selected div.dashP02Head').addCls('dashP03Head');

//    	console.log('record', record.data);
    	var gridportlet = Ext.ComponentQuery.query('countrystudy');
    	Ext.each(gridportlet, function(item){
    		item.down('dataview').getStore().load({
    			callback: function(){
    				console.log('tem', item)
    				item.fireEvent('subGridCall');
    			}
    		});
    	});
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
				fields : ['caption1','caption2','caption3',
				          'caption4','caption5','caption6',
				          'caption7','caption8','caption9',
				          'caption10','caption11','caption12',
				          'caption13','caption14','caption15',
				          'caption16','caption17','caption18',
				          'caption19','caption20','caption21',
				          'caption22','caption23'
				          ],
				data : Dashboard.view.common.DataSet.studyListData
			}),

			tpl: [
	                '<div class="dashP01_content"> ',
	                '            <div class="">',
	                '			<tpl for=".">',
	                '              <div class="dashP02">',
	                '                <div class="dashP02Head">',
	                '                  <h3><a href="#">{caption1}</a></h3>',
	                '                  <span>{caption2}</span> </div>',
	                '                <div class="dashP02_content">',
	                '                  <p> 지역 코드  : <strong>{caption3}</strong><br>',
	                '                    권역코드 : <strong>{caption4}</strong></p>',
	                '                  <div class="stat_view">',
	                '                    <div class="view_site">',
	                '                      <p class="percent">{caption5}<span>%</span></p>',
	                '                      <p class="count">{caption6}</p>',
	                '                      <p class="type">{caption7}</p>',
	                '                    </div>',
	                '                    <div class="view_screen">',
	                '                      <p class="percent orange">{caption8}<span>%</span></p>',
	                '                      <p class="count">{caption9}</p>',
	                '                      <p class="type">{caption10}</p>',
	                '                    </div>',
	                '                    <div class="view_random">',
	                '                      <p class="percent red">{caption11}<span>%</span></p>',
	                '                      <p class="count">{caption12}</p>',
	                '                      <p class="type">{caption13}</p>',
	                '                    </div>',
	                '                    <div class="view_fail">',
	                '                      <p class="percent">{caption15}<span>%</span></p>',
	                '                      <p class="count">{caption16}</p>',
	                '                      <p class="type">{caption17}</p>',
	                '                    </div>',
	                '                  </div>',
	                '                  <div class="stat_view2">',
	                '                    <div class="view_issue">',
	                '                      <p class="num">{caption18}</p>',
	                '                      <p class="type">{caption19}</p>',
	                '                    </div>',
	                '                    <div class="view_PD">',
	                '                      <p class="num">{caption20}</p>',
	                '                      <p class="type">{caption21}</p>',
	                '                    </div>',
	                '                    <div class="view_SAE">',
	                '                      <p class="num">{caption22}</p>',
	                '                      <p class="type">{caption23}</p>',
	                '                    </div>',
	                '                  </div>',
	                '                </div>',
	                '              </div>',
	                '			</tpl>',
	                '            </div>',
	                '          </div>'
	            ]
    	});
    	me.callParent(arguments);
    	me.on('select', me.selectOnChange, me)
    }
});