Ext.define('RiaApp.MyViewport',{
    extend : 'Ext.container.Viewport',
    alias : 'widget.myviewport',
    requires: [
        'RiaApp.Student',
        'RiaApp.MyButton',
        'RiaApp.MyTabPanel'
    ],
    layout : 'border',
    items : [{
        region : 'center',
        xtype : 'mytabpanel',
        height: 300
    },{
        region : 'north',
        height : 50,
        xtype : 'mybutton',
        text : '안녕하세요.'
    },{
        region : 'west',
        width : 100,
        xtype : 'student' ,
        title : 'Hello Student !!',
        html : '안녕하세요 여러분',
        grade : '2',
        className : '꾸러기',
        teacher : '홍길동',
        studentName : '김철수',
        studentAddress : '경기도 고양시 일산'
    }]
});