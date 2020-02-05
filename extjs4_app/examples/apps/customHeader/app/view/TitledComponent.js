Ext.define('MyApp.view.TitledComponent', {
    extend: 'Ext.Component',

    baseCls: 'titled-component',
    childEls: ['body', 'headerEl'],

    renderTpl: [
        '<h4 id="{id}-headerEl" class="{baseCls}-header">{header:htmlEncode}</h4>',
        '<div id="{id}-body" class="{baseCls}-body">{% this.renderContent(out, values) %}</div>'
    ],

    getTargetEl: function() {
        return this.body;
    },

    // Override the default implementation to add in the header text
    initRenderData: function() {
        var data = this.callParent();

        // Add the header property to the renderData
        data.header = this.header;

        return data;
    },

    setHeader: function(header) {
        this.header = header;

        // The headerEl will only exist after rendering
        if (this.headerEl) {
            this.headerEl.update(Ext.util.Format.htmlEncode(header));
        }
    }
});