Ext.define('SAT.controller.Frame', {
    extend: 'Ext.app.Controller',

    views: [
        'frame.AppMain',
        'frame.LoginUserInfo',
        'frame.AboutWindow'
    ],
    stores: [
        'MenuGroups', 'MenuPrograms'
    ],
    refs: [
        {
            ref: 'dashboardButton',  // #1
            selector: 'button#dashboard'
        },
        {
            ref: 'appbodyButton',  //#2
            selector: 'button#appbody'
        },
        {
            ref: 'framebody',        // #1
            selector: 'framebody'   // #2
        },
        {
            ref: 'topprogressbar',
            selector: '#topprogressbar'
        }
    ],

    progressBarStart: function () { // #1
        var progressbar = this.getTopprogressbar(); // #2
        if (progressbar !== undefined) {     // #3
            progressbar.wait({  // #4
                interval: 100,  // #5
                increment: 100,  // #6
                text: 'Progress...' + Ext.Date.format(new Date(), 'A H:i:s')    // #7
            });
        }
    },

    progressBarEnd: function () {   // #8
        var progressbar = this.getTopprogressbar();
        if (progressbar !== undefined) {
            progressbar.reset();// #9
            progressbar.updateText('Complete..' + Ext.Date.format(new Date(), 'A H:i:s'));  // #10
        }
    },

    progressBarStop: function (response) {  // #11
        var progressbar = this.getTopprogressbar(),
            errStr = 'Error: ' + response.status +  // #12
                ' ' + response.statusText +  // #13
                ' (' + Ext.Date.format(new Date(), 'A H:i:s') + ')';
        if (progressbar !== undefined) {
            progressbar.updateText(errStr);
        }
    },

    init: function (application) {

        application.on('progressbarstart', this.progressBarStart, this);
        application.on('progressbarend', this.progressBarEnd, this);
        application.on('progressbarstop', this.progressBarStop, this);

        this.control({
            "menuprogram > dataview": { // #14
                select: this.onProgramSelect    // #15
            },
            "viewport": {
                resize: function (view, width, height, oldWidth, oldHeight) {
                    // 브라우저의 "전체화면닫기" 클릭시
                    if (oldWidth > width) {
                        this.toggleScreen(false);
                    }
                }
            },
            "#about": {
                click: this.showAbout   // #1
            },
            "#fullscreen": {    // #2
                click: this.onFullScreen
            },
            "#originscreen": {  // #3
                click: this.onOriginScreen
            },
            "#exit": {      // #4
                click: this.onExit
            },
            "#userInfo": {  // #5
                change: this.onChangeUser
            },
            "button#dashboard": {  // #3
                click: this.onChangeBody
            },
            "button#appbody": {  // #4
                click: this.onChangeBody
            }
        });
    },

    onProgramSelect: function (dataview, record) {
        var pgmClass = record.get('pgmClass'),  // #3
            pgmNm = record.get('pgmNm'),    // #4
            pgmId = record.get('pgmId');    // #5
        var tabpanel = this.getFramebody().down('tabpanel'); // #6
        var tab = tabpanel.down('[itemId=' + pgmClass + pgmId + ']'); // #7

        if (!tab) { // #8
            tab = Ext.create(pgmClass);     // #9

            tab.title = pgmNm + " ( " + pgmClass + pgmId + " ) ";    // #10
            tab.itemId = pgmClass + pgmId;  // #11
            tabpanel.add(tab);   // #12
        }
        tabpanel.setActiveTab(tab);  // #13
    },

    onChangeBody: function (button) {
        var centerpanel = Ext.ComponentQuery.query('viewport container[region="center"]')[0];
        var xtype = centerpanel.xtype;
        xtype = (xtype == 'dashboard' ? 'framebody' : 'dashboard');

        centerpanel.destroy();

        Ext.ComponentQuery.query('viewport > container')[0].add({
            region: 'center',
            xtype: xtype
        });
        this.getDashboardButton().setDisabled(false);
        this.getAppbodyButton().setDisabled(false);
        button.setDisabled(true);
    },

    onFullScreen: function () { // #6
        var docElm = document.documentElement;

        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        this.toggleScreen(true);    // #7
    },

    onOriginScreen: function () {  // #8
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        this.toggleScreen(false);
    },

    toggleScreen: function (fullscreen) { // #9
        Ext.each(Ext.ComponentQuery.query('[itemId=fullscreen]'), function (item) {
            item.setDisabled(fullscreen ? true : false);
        });
        Ext.each(Ext.ComponentQuery.query('[itemId=originscreen]'), function (item) {
            item.setDisabled(fullscreen ? false : true);
        });
    },

    onExit: function (button) {     // #10
        Ext.Msg.confirm('로그아웃', '로그아웃 하시겠습니까 ?', function (id, value) {
            if (id === 'yes') {
                Ext.Ajax.request({
                    url: 'resources/json/success.json', // #11
                    success: function (response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if (obj.success) {
                            Ext.util.Cookies.clear('userinfo');     // #12

                            location.href = '/';
                        }
                    }
                });
            } else if (button.xtype == 'cycle') {   // #13
                button.setActiveItem(button.menu.items.items[0]);   // #14
            }
        }, this);
    },

    onChangeUser: function (button, item) {
        if (item.itemIndex == 1) {  // #15
            this.onExit(button);
        } else if (item.itemIndex == 2) {   // #16

            var userinfo = SAT.app.userinfo;    // #17
            var userWindow = Ext.widget('loginuserinfo');    // #18

            userWindow.on('show', function (w) {    // #19
                var board = Ext.ModelMgr.getModel('SAT.model.User');    // #20
                board.load(userinfo.userSeq, {  // #21
                    success: function (record, operation) {
                        userWindow.down('form').loadRecord(record); // #22
                    }
                });
                button.setActiveItem(button.menu.items.items[0]);   // #23
            });

            userWindow.show();  // #24
        }
    },

    showAbout: function () {
        Ext.widget('aboutwindow').show();   // #25
    }
});