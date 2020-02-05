Ext.define('Dashboard.view.portlet.CountryStudy', {
	extend : 'Ext.container.Container',
	alias : 'widget.countrystudy',
	itemId : 'db-tab1' ,
	height: 800,
	layout: 'border',

	getProgressbarPercent: function(percent){
		//percent = Ext.Number.randomInt(0, 100);
		var color = 'progress-bar-success';
		if(percent < 21){
			color = 'progress-bar-danger';
		}else if( percent < 50){
			color = 'progress-bar-warning';
		}

		return color;
	},

	getProgressbar: function(percent){
		var me = this;
		percent = Ext.Number.randomInt(0, 100);
		var color = me.getProgressbarPercent(percent);
//		return Ext.create('Ext.XTemplate',	'<div class="progress"><span class="progressbar-back-text">10%</span>',
//											'<div class="progress-bar progress-bar-info" role="progressbar" aria-valuetransitiongoal="25" aria-valuenow="100" style="width: 100%;"><span class="progressbar-front-text" style="width: 816px;">100%</span></div>',
//											'</div>').html;


		return Ext.create('Ext.XTemplate',	'<div class="progress"> <span class="progressbar-back-text">'+percent+'%</span> ',
				'<div class="progress-bar '+color+'" role="progressbar" aria-valuetransitiongoal="2" ',
				'aria-valuemin="1" aria-valuemax="6" style="width:'+percent+'%;" aria-valuenow="2"> ',
				'<span class="progressbar-front-text" style="width:816px;">20%</span> </div></div>').html ;

//        var id = Ext.id();
//        Ext.defer(function () {
//            Ext.widget('progressbar', {
//                renderTo: id,
//                text : percent,
//                value: percent / 100,
//                width: 100
//            });
//        }, 50);
//        return Ext.String.format('<div id="{0}"></div>', id);
	},

	initComponent : function() {
		var me = this;
		me.addEvents('subGridCall');
		Ext.apply(this, {
			items: [/*{
				xtype : 'component',
				region : 'north',
				data : {},
				padding : '5 0 0 10',
				tpl: ['<div ">',
		              '<ul>',
		                '<li style=" float:left;display:inline;padding:2px 5px 0 0">Sort by Problem</li>',
		                '<li>',
		                  '<div class="select-style">',
		                    '<select>',
		                      '<option selected=""> Product </option>',
		                      '<option>PRD-TE-001</option>',
		                      '<option>PRD-TE-002</option>',
		                    '</select>',
		                  '</div>',
		                '</li>',
		              '</ul>',
		            '</div>']
			},*/{
				xtype : 'dataview',
				region : 'center',
                itemSelector : '',
				autoScroll: true,
				padding : '5 0 0 5',
				store : Ext.create('Ext.data.Store', {
//					autoLoad : true,
					proxy : {
						type : 'memory',
						reader : {
							type : 'array'
						}
					},
					fields: ['field1','field2','field3','field4','field5','field6','field7'],
					data : Dashboard.view.common.DataSet.studyChart
				}),
				tpl: Ext.create('Ext.XTemplate',
				      	'<tpl for=".">',
		                '<table width="100%" border="0" cellspacing="0" cellpadding="0">',
		                '                <colgroup>',
		                '                <col width="300">',
		                '                <col width="5">',
		                '                <col width="*">',
		                '                </colgroup>',
		                '                <tbody><tr>',
		                '                  <td style="vertical-align:top"><div class="dashP04">',
		                '                      <div class="dashP04Head">',
		                '                        <h3>{field1}</h3>',
//		                '                        <span><a href="#"><img src="images/btn_portlet_reload.png"></a><a href="#"><img src="images/btn_portlet_expand.png"></a><a href="#"><img src="images/btn_portlet_close.png"></a></span>',
		                '						</div>',
		                '                      <div class="dashP04_content">',
		                '                        <div class="bs-example vertical bottom v-bottom-aria">',
		                '                          <div class="progress vertical bottom wide">',
		                '                            <div class="progress-bar {[this.getProgressbar(values.field2, 0)]}" role="progressbar" aria-valuetransitiongoal="60" aria-valuemax="120" style="height: {[this.getProgressbar(values.field2, 1)]}%;" aria-valuenow="60">{[this.getProgressbar(values.field2, 1)]}%</div>',
		                '                          </div>',
		                '                          <div class="progress vertical bottom wide">',
		                '                            <div class="progress-bar {[this.getProgressbar(values.field3, 0)]}" role="progressbar" aria-valuetransitiongoal="80" aria-valuemin="30" style="height: {[this.getProgressbar(values.field3, 1)]}%;" aria-valuenow="80">{[this.getProgressbar(values.field3, 1)]}%</div>',
		                '                          </div>',
		                '                          <div class="progress vertical bottom wide">',
		                '                            <div class="progress-bar {[this.getProgressbar(values.field4, 0)]}" role="progressbar" aria-valuetransitiongoal="100" style="height: {[this.getProgressbar(values.field4, 1)]}%;" aria-valuenow="100">{[this.getProgressbar(values.field4, 1)]}%</div>',
		                '                          </div>',
		                '                        </div>',
		                '                        <div class="progress_legend">',
		                '                          <ul>',
		                '                            <li>전월사용총량</li>',
		                '                            <li>당월총량</li>',
		                '                            <li>예상치</li>',
		                '                          </ul>',
		                '                        </div>',
		                '                        <div class="stat_view2">',
		                '                          <div class="view_issue">',
		                '                            <p class="num">{field5}</p>',
		                '                            <p class="type">CODE1</p>',
		                '                          </div>',
		                '                          <div class="view_PD">',
		                '                            <p class="num">{field6}</p>',
		                '                            <p class="type">CODE2</p>',
		                '                          </div>',
		                '                          <div class="view_SAE">',
		                '                            <p class="num">{field7}</p>',
		                '                            <p class="type">CODE3</p>',
		                '                          </div>',
		                '                        </div>',
		                '                      </div>',
		                '                    </div></td>',
		                '                  <td>&nbsp;</td>',
		                '                  <td style="vertical-align:top"><div class="dashP04">',
		                '                      <div class="dashP04_content">',
		                '                        <div class="scrollboxh225">',
		                '                        </div>',
		                '                      </div>',
		                '                    </div></td>',
		                '                </tr>',
		                '              </tbody></table>',
		                '			</tpl>', {
		                	getProgressbar : function(percent, flag){
		                		percent = Ext.Number.randomInt(0, 100);
		                		if(flag == 0)
		                			return me.getProgressbarPercent(percent);
		                		else if(flag==1)
		                			return percent;
		                 	  },
//		                 	 getRamdom : function(percent){
//			               		  	return Ext.Number.randomInt(0, 100);
//			                 	  },
				      		compile : true
				      	})
			}],
			itemSelector: '',
			listeners: {
				render: function(){
//					Ext.Function.defer(function(){
//
//						me.subGridCall();
//
//					}, 100);
				}
			}
		});

		me.callParent(arguments);
		me.on('subGridCall', function(){
			me.subGridCall();
		});
	},

	subGridCall : function(){
		var me = this;
		var gridnode = Ext.query('div.scrollboxh225');
		for(var i in gridnode){
			console.log(gridnode[i])
			Ext.create('Ext.grid.Panel', {
				hiddenHeaders : false,
                frame: true,
				columns : [{
					header : 'Code1', dataIndex : 'field1', flex:1
				},{
					header : 'Code1', dataIndex : 'field2', flex:1
//				},{
//					header : 'Code1', dataIndex : 'field3', flex:1
				},{
					header : 'Code1', dataIndex : 'field4', flex:1,
					renderer : me.getProgressbar, scope: me
				},{
					header : 'Code1', dataIndex : 'field5', flex:1,
					renderer : me.getProgressbar, scope: me
//				},{
//					header : 'Code1', dataIndex : 'field6', flex:1
				},{
					header : 'Code1', dataIndex : 'field7', flex:1
				}],
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['field1','field2','field3','field4','field5','field6','field7'],
					data : Dashboard.view.common.DataSet.country_study
				}),
				renderTo : gridnode[i]
			});
		}
	}
});
