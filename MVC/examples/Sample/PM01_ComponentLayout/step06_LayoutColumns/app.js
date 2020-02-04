Ext.onReady(function() {
Ext.create('Ext.Panel', {
    title : 'Column Layout',
    layout : 'column',
    frame : true,
    width : 500,
    style : {
        margin: '50px'
    },
    defaults : {
        height : 180
    },
    items : [ {
        title : '첫번째 패널',
        columnWidth : .3,
        html : '30%의 가로 길이 사용'
    }, {
        title : '두번째 패널',
        columnWidth : .7,
        margin : '0 5 0 5',
        html : '70%의 가로 길이 사용'
    }, {
        title : '세번째 패널',
        width : 150,
        html : '150px의 가로 길이 사용'
    } ],
    renderTo : document.body
});

});