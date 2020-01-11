Ext.define('ClassSystem.Person', {
    name: 'Unknown',
    
    constructor: function(config) {
        this.initConfig(config);
    },

    eat: function(foodType) {
        alert(this.name + " is eating: " + foodType);
    }
});







    // Ext.define('My.own.Window', {
    //     extend: 'Ext.Component',
    //     normalVar: '홍길동',
    //     config: {
    //         title: 'Title Here',

    //         bottomBar: {
    //             height: 50,
    //             resizable: false
    //         }
    //     },

    //     applyTitle: function(title) {
    // //        ...
    //     },

    //     applyBottomBar: function(bottomBar) {
    // //        ...
    //     }
    // });