Ext.define('arch.view.mvvm.FooController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.foo',
    control: {
        '#': {  // matches the view itself
            collapse: 'onCollapse'
        },
        button: {
            click: 'onAnyButtonClick'
        }
    },

    onAnyButtonClick: function (btn) {
          console.log('click button', btn.getText())
    },

    onCollapse: function (panel) {
        Ext.Msg.alert('확인', panel.collapsed)
    },

    onSearch: function () {
        var search = this.lookupReference('searchKey');
        this.lookupReference('myGrid').store.load({
            params: {
                searchKey: search.getValue()
            }
        })
    },

    onAdd: function () {
        var record = Ext.create('DataPackage.model.Board', {
            name: '쥐박이',
            title: '안녕 못해.'
        });
        var grid = this.lookupReference('myGrid');
        grid.store.add(record);

        Ext.toast('데이터가 입력되었습니다');
    },

    onBarChange: function (barTextField) {
        var fooButton = this.lookupReference('fooButton');
        console.log('MyApp.view.foo.FooController called.', fooButton.text)
    },

    onSelectData: function (grid, record, index) {
        this.getViewModel().set('currentData', record);
    }
});
