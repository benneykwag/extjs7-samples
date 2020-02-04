Ext.define('Home.store.MyStudyStore', {
	extend : 'Ext.data.Store',
	constructor: function(cfg) {
		console.log("cfg",cfg);
        var me = this;
        cfg = cfg || {};

        var url = "/ctms/cj/Home/studyList.do";
        if(cfg.depth==2){
			url = + "/ctms/cj/Home/studyRegionList.do";
        }else if(cfg.depth==3){
			url =  "/ctms/cj/Home/studySiteList.do";
        }else if(cfg.depth==11){
        	url = "/ctms/cj/home/mySchd.do";
        }

        me.callParent([Ext.apply({
            autoLoad: false,
            proxy : {
				url : url,
				type : 'ajax',
				reader : {
					type : 'json',
					root: 'result.list'
				},
				extraParams : {
					depth : cfg.depth,
					key: cfg.key
				}
			},
			fields : ['cd','cdnm','prodPkNo','prodNo','prtcPkNo','prtcNo','mapPkNo','mapNm','sitePkNo','siteNo','sun','mon','tue','wed','thu','fri','sat']
        }, cfg)]);
    }
});