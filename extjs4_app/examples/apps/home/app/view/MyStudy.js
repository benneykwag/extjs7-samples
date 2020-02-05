Ext.define('Home.view.MyStudy', {
	extend : 'Ext.view.View',
	alias : 'widget.mystudy',
	autoScroll: true,
	itemSelector: '',
	initComponent: function(){
    	var me = this;
        console.log(Home.view.DataSet.portletGroups)
    	Ext.apply(this, {
    		store : Ext.create('Ext.data.Store', {
                fields : ['cdnm','cd'],
                proxy : {
                    type : 'memory',
                    reader: {
                        type : 'array'
                    }
                },
                data : Home.view.DataSet.studyListData
    		}),
			tpl: [
	                '<div class="">',
	                '	<ul class="treeMenu">',
	                '	<tpl for=".">',
	                '   	<li class="item2" cd={cd} depth="1" open="NA"><a href="#">{cdnm}    	<span></span></a></li>',
	                '	</tpl>',
	                '	</ul>',
	                '</div>'
	            ]
    	});
    	me.callParent(arguments);
    	me.on('afterrender', function(){
            console.log('store', me.store.load())
			this.el.on('click', function(f, d){
				me.setTree(d);
			}, this, {
				delegate : 'a',
				preventDefault: true
			});
		});
	},

	/**
	 * 마지막 3단계 클릭인지 확인하기 위한 메소드임.
	 * @param element
	 * @returns {Boolean}
	 */
	thirdDepthChk : function(element){
		var first;
		try{
			first  = Ext.get(element).up('li').up('li').up('li');
		}catch(e){}
		if(first){
			return false;
		}else{
			return true;
		}
	},

	/***
	 * 클릭된 anchor를 인자로 전달한다.
	 * anchor는 li에 감싸여 있다.
	 * depth는 1단계 Study, 2단계 Country, 3단계 Site
	 * depth는 Store호출시 전달하고 있음, 이 depth값에 의해 Study, Country, Site값을 선택적으로
	 * 가져오면 되겠다.
	 * key는 Store호출시 전달하고 있음. MyStudy는 값이 없이 호출 가능하나 이후 클릭에 의해 country, site값은 가져와야 하므로
	 * 꼭 필요하다.
	 * 1단계의 열고 닫는 클래스는 item1, item2
	 * 2단계의 열고 닫는 클래스는 plus, minus이다.
	 * @param element
	 */
	setTree: function(element){

		var me = this,
			liElement = Ext.get(element).up('li'),
			openStatus = liElement.getAttribute('open'),
			key = liElement.getAttribute('cd'),
			depthCondition = (liElement.getAttribute('depth')=='1'?"2":"3");

		if(this.thirdDepthChk(element)){
            var data = Home.view.DataSet.country_study;
            if(depthCondition == 3)
                data = Home.view.DataSet.studyChart;

			if(openStatus == 'NA'){
				var store = Ext.create('Ext.data.Store', {
                    fields : ['cdnm','cd'],
                    proxy : {
                        type : 'memory',
                        reader: {
                            type : 'array'
                        }
                    },
                    data : data
                });

				//store.on('load', function(){
					store.each(function(record){
                        console.log('record', record)
						// <ul class는 접고 펴기 위한 용도로 사용함.
						var str = '<ul class={0}><li class="plus" cd={1} depth={2} open="NA"><a href="#">{3}</a></li></ul>';
						if(depthCondition==3){
							str = '<ul class={0}><li class="plus" cd={1} cdnm={3} prtcPkNo={4} prtcNo={5} prodPkNo={6} prodNo={7} open="NA"><a href="#"}>{3}</a></li></ul>';
							liElement.createChild(Ext.String.format(str, key, record.get('cd'), depthCondition, record.get('cdnm'), record.get('prtcPkNo'), record.get('prtcNo'),record.get('prodPkNo'),record.get('prodNo') ));
						}else{
							liElement.createChild(Ext.String.format(str, key, record.get('cd'), depthCondition, record.get('cdnm')));
						}
					});
					if(store.getCount()==0){
						var str = '<ul class={0}><li depth={1} open="NA"><a href="#">No Sites</a></li></ul>';
						liElement.createChild(Ext.String.format(str,key, depthCondition));
					}
					me.setElement(liElement,  key, openStatus);
//				});
			}else {
				me.setElement(liElement,  key, openStatus);
			}
		}else{
			// 여기서 site링크를 호출.
			console.log(element);
			var liElement = Ext.get(element).up('li');


		}
	},

	setElement : function(element,  key, openStatus){
		var openResult = {
			open  : (openStatus=='Y'?'N':'Y'),
			cls : (openStatus=='Y'?'item2 plus':'item1 minus'),
			display : (openStatus=='Y'?'none':'')
		};

		element.set({
			"open" : openResult.open,
			"class": openResult.cls
		});
		Ext.select('.'+key).setStyle('display', openResult.display);
	},

    onRender : function(){
//    	var me = this;
//		this.el.on('click', function(f, d){
//			me.setTree(d);
//		}, this, {
//			delegate : 'a',
//			preventDefault: true
//		});

		this.callParent(arguments);
    }

});
