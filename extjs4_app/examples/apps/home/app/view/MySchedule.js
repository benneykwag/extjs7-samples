Ext.define('Home.view.MySchedule', {
	extend : 'Ext.container.Container',
	alias : 'widget.myschedule',
	cls : 'homeP01 bdr_blue',
	layout: 'border',
	initComponent: function(){
    	var me = this;
    	Ext.apply(this, {
    		items : [
    		         this.getTitle(),
    		         this.getCalendar(),
    		         this.getDailySchedule()]
    	});
    	me.callParent(arguments);
	},

    onRender : function(){
    	var me = this;
		this.el.on('click', function(f, d){
			var element = Ext.get(d).down('a'),
			dt = element.getAttribute('class');

			// 달력 내부에 이전 달과 이후 달 의 날자를 클릭할 경우 처리다.
			// 타이틀 상의 달과 일치하는 날자면
			// 클릭한 날자에 맞게 하단 그리드 데이터를 불러오고
			if(me.formatDate('m') == dt.split('-')[1]){
				me.today = new Date(dt);
				me.gridLoad();
//				Ext.select('td.today').removeCls('today');
//				element.up('td').addCls('today');
//				me.down('grid').getStore().load({
//					params : {
//						dt : dt
//					}
//				});
			}else{
				// 타이틀 상의 달과 달리 이전 또는 이후 달의 날자를 클릭할 경우.
				// 클릭한 날자를 현재일로 세팅하고
				// 달력을 해달 날자의 월로 전환한다.
				me.today = new Date(dt);
				this.scheduleLoad();
			}

		}, this, {
			delegate : 'td.dt_area',
			preventDefault: true
		});

		this.el.on('click', function(f, d){
			var element = Ext.get(d);
			idx = element.getAttribute('idx');
			me.today = me.calMonth(idx);
			me.scheduleLoad();

		}, this, {
			delegate : '.month_move',
			preventDefault: true
		});

		this.callParent(arguments);
		me.today = new Date();

		this.scheduleLoad();
    },

    calMonth : function(idx){
    	return Ext.Date.add(this.today, Ext.Date.MONTH, idx);
    },

    formatDate : function(format){
    	return Ext.Date.format(this.today, format);
    },

    /***
     * 하단 일별 데이터를 로드한다.
     * 로드 전에 클릭한 날자 또는 오늘 날자로 세팅된 today css를 제거하고
     * today로 설정된 날자의 td에 today css를 세팅한다.
     */
    gridLoad: function(){
    	var me = this;
    	Ext.select('td.today').removeCls('today');
    	Ext.select('a.'+me.formatDate('Y-m-d')).each(function(item){
			item.up('td').addCls('today');
		});
		me.down('grid').getStore().load({
			params : {
				scheduleYmd : me.formatDate('Y-m-d')
			}
		});
    },

    /**
     * 상단 달력을 이전 이후 변경한다.
     * 변경에 따라 하단의 그리드도 변경해준다.
     */
    scheduleLoad: function(){
    	var me = this;
    	this.down('dataview').getStore().load({
			params : {
				scheduleYM : me.formatDate('Y-m')
			},
			callback : function(){
				me.gridLoad();
			}
		});
    },

	getTitle : function(){
		return {
			xtype : 'component',
			region : 'north',
            margin : '5 0 0 7',
			data : {},
			tpl: ['<div class="titleH">',
			      '	<h3>My Schedule</h3>',
			      '</div>']
		};
	},

	getDailySchedule : function(){
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
			           { text: '인원', dataIndex: 'studendCnt' }]
		};
	},

	getCalendar : function(){
		var me = this;
		return {
			xtype : 'dataview',
//			margin : '5 5 5 5',
			height: 310,
			region : 'north',
			itemSelector : '',
            store : Ext.create('Home.store.CalendarStore', {
                depth : '4'
            }),
    		tpl: [
                  '<table width="100%" border="0" cellspacing="5" cellpadding="0" bgcolor="#efefef">',
                  '	<tbody>',
                  '		<tr><td>',
                  '		<table class="cal-table" border="0" cellpadding="0" cellspacing="0">',
                  '     	<caption class="cal-caption">',
                  '     	{[this.getScheduleTitle()]}	',
                  '         </caption>',
                  '         <thead>',
                  '         <tr>',
                  '         	<th>SUN</th>',
                  '             <th>Mon</th>',
                  '             <th>Tue</th>',
                  '             <th>Wed</th>',
                  '             <th>Thu</th>',
                  '             <th>Fri</th>',
                  '             <th>Sat</th>',
                  '         </tr>',
                  '         </thead>',
                  '       	<tbody class="cal-body" valign="top" style="margin:5px">',
                  '			<tpl for=".">',
                  '				<tr>',
                  '     			{[this.getDaily(values.sun)]}	',
                  '     			{[this.getDaily(values.mon)]}	',
                  '     			{[this.getDaily(values.tue)]}	',
                  '     			{[this.getDaily(values.wed)]}	',
                  '     			{[this.getDaily(values.thu)]}	',
                  '     			{[this.getDaily(values.fri)]}	',
                  '     			{[this.getDaily(values.sat)]}	',
                  '     		</tr>',
                  '			</tpl>',
                  ' 		</tbody>',
                  ' 		<tbody class="cal-body">',
                  '         </tbody>',
                  '     </table>',
                  '     <div id="calcat">',
                  '     	<div class="caldot yellow"></div>',
                  '         	<p>개인일정</p>',
                  '             <div class="caldot gray"></div>',
                  '             	<p>회사일정</p>',
                  '             </div>',
                  '    </td></tr>',
                  '	</tbody></table>',{
                	  getScheduleTitle : function(yoil){
              		  	var str = '<a href="#none" idx="-1" class="month_move prev">«</a> <a href="#none" idx="1" class="month_move next">»</a> <div class="month_year">{0}</div>';
              		  	return Ext.String.format(str, me.formatDate('M Y'));
                	  },

                	  getDaily: function(yoil){
                		  // off 이번달이 아닌 나머지 달.
                          // seleted 선택한 날자.
                          // today 오늘 날자.
                          // ok 일정이 있는 날.
                		  var data = yoil.split('|'),
                		  	dt = data[0],
                		  	today = me.formatDate('M'),
                		  	mineAother = data[2],
                		  	cls ='',
                		  	clsAry = ['',''];
                		  // 현재월이 아닌 날자를 off처리한다.
                		  if(dt.split('-')[1] != today) cls = 'off';

                		  // mine와 other은 동시에 가질 수 있으므로 cls+cls한다.
                		  // 0이면 값이 없다. 0이상일 경우 td의 배경css를 ok로 지정한다.
                		  if(mineAother > 0) cls = cls + ' ok';

                		  // 1이면 mine만 존재한다.
                		  if(mineAother == 1) clsAry[0] = 'yellow';
                		  // 2이면 other만 존재한다.
                		  if(mineAother == 2) clsAry[1] = 'gray';
                		  // 3이면 동시에 존재한다.
                		  if(mineAother == 3) clsAry[0] = 'yellow', clsAry[1] = 'gray';

                		  var str = '<td class="dt_area {0}"><a href="#none" class={1}>{2}</a><div class="dots"><ul><li class="{3}"></li><li class="{4}"></li></ul></div></td>';
                		  return Ext.String.format(str, cls, dt, parseInt(dt.split('-')[2]), clsAry[0], clsAry[1]);
                	  }
                  }
              ]
		};
	}
});
