var autoErrMsg = function(response){
    var result = Ext.JSON.decode(response.responseText, true); // #1

    if(result.errMsg){
        Ext.Msg.show({
            title: result.errTitle,
            msg: result.errMsg,
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK,
            fn: function(){
                if(result.reload){
                    window.location.reload();
                }
            }
        });
    }
};
