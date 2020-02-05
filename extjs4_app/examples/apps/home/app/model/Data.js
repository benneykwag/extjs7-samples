Ext.define('Home.model.Data', {
    extend: 'Ext.data.Model',
    fields : [
        { name:'cd' , type:'string'}
        ,'cdnm','prodPkNo','prodNo','prtcPkNo','prtcNo','mapPkNo','mapNm','sitePkNo','siteNo','sun','mon','tue','wed','thu','fri','sat',
        {
            name : 'scheduleDt',
            type : 'string'
        },
        {
            name : 'scheduleTitle',
            type : 'string'
        },
        {
            name : 'studendCnt',
            type : 'string'
        },
        {
            name : 'area',
            type : 'string'
        }
    ]
});
