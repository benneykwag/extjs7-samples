/**
 * @class Ext.app.Portlet
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.portal.DashboardPortlet', {
	extend: 'Ext.portal.AbstractDashboardPanel',
	requires: [
		'Ext.panel.Header',
		'Ext.fx.Anim',
		'Ext.util.KeyMap',
		'Ext.panel.DD',
		'Ext.XTemplate',
		'Ext.layout.component.Dock',
		'Ext.util.Memento'
	],
	alias: 'widget.dashboardportlet',

	addTools: Ext.emptyFn,
	updateHeader: function(force) {
		var me = this,
			header = me.header,
			title = me.title,
			tools = me.tools,
			icon = me.icon || me.iconCls,
			vertical = me.headerPosition == 'left' || me.headerPosition == 'right';

		if (Ext.isObject(header) || (header !== false && (force || (title || icon) || (tools && tools.length) || (me.collapsible && !me.titleCollapse)))) {
			if (header && header.isHeader) {
				header.show();
			} else {
				// Apply the header property to the header config
				header = me.header = Ext.widget(Ext.apply({
					xtype       : 'header',
					title       : title,
					titleAlign  : me.titleAlign,
					orientation : vertical ? 'vertical' : 'horizontal',
					dock        : me.headerPosition || 'top',
					textCls     : me.headerTextCls,
					iconCls     : me.iconCls,
					icon        : me.icon,
					glyph       : me.glyph,
					baseCls     : me.baseCls + '-header',
					tools       : tools,
					ui          : me.ui,
					id          : me.id + '_header',
					overCls: me.headerOverCls,
					indicateDrag: me.draggable,
					frame       : (me.frame || me.alwaysFramed) && me.frameHeader,
					ignoreParentFrame : me.frame || me.overlapHeader,
					ignoreBorderManagement: me.frame || me.ignoreHeaderBorderManagement,
					ownerCt     : me,
					listeners   : me.collapsible && me.titleCollapse ? {
						click: me.toggleCollapse,
						scope: me
					} : null
				}, me.header));
				// Header's onAdd mutates the tools array.
				// It replaces tool configs at each index with the instantiated tool
				// It also injects the tool instances as properties keyed by their type.
				me.addDocked(header, 0);
			}
			me.initHeaderAria();
		} else if (header) {
			header.hide();
		}
	},
	initComponent: function() {
		var me = this;

		me.addEvents(

			/**
			 * @event beforeclose
			 * Fires before the user closes the panel. Return false from any listener to stop the close event being
			 * fired
			 * @param {Ext.panel.Panel} panel The Panel object
			 */
			'beforeclose',

			/**
			 * @event close
			 * Fires when the user closes the panel.
			 * @param {Ext.panel.Panel} panel The Panel object
			 */
			'close',

			/**
			 * @event beforeexpand
			 * Fires before this panel is expanded. Return false to prevent the expand.
			 * @param {Ext.panel.Panel} p The Panel being expanded.
			 * @param {Boolean} animate True if the expand is animated, else false.
			 */
			"beforeexpand",

			/**
			 * @event beforecollapse
			 * Fires before this panel is collapsed. Return false to prevent the collapse.
			 * @param {Ext.panel.Panel} p The Panel being collapsed.
			 * @param {String} direction . The direction of the collapse. One of
			 *
			 *   - Ext.Component.DIRECTION_TOP
			 *   - Ext.Component.DIRECTION_RIGHT
			 *   - Ext.Component.DIRECTION_BOTTOM
			 *   - Ext.Component.DIRECTION_LEFT
			 *
			 * @param {Boolean} animate True if the collapse is animated, else false.
			 */
			"beforecollapse",

			/**
			 * @event expand
			 * Fires after this Panel has expanded.
			 * @param {Ext.panel.Panel} p The Panel that has been expanded.
			 */
			"expand",

			/**
			 * @event collapse
			 * Fires after this Panel has collapsed.
			 * @param {Ext.panel.Panel} p The Panel that has been collapsed.
			 */
			"collapse",

			/**
			 * @event titlechange
			 * Fires after the Panel title has been set or changed.
			 * @param {Ext.panel.Panel} p the Panel which has been resized.
			 * @param {String} newTitle The new title.
			 * @param {String} oldTitle The previous panel title.
			 */
			'titlechange',

			/**
			 * @event iconchange
			 * Fires after the Panel icon has been set or changed.
			 * @param {Ext.panel.Panel} p The Panel which has the icon changed.
			 * @param {String} newIcon The path to the new icon image.
			 * @param {String} oldIcon The path to the previous panel icon image.
			 */
			'iconchange',

			/**
			 * @event iconclschange
			 * Fires after the Panel iconCls has been set or changed.
			 * @param {Ext.panel.Panel} p The Panel which has the iconCls changed.
			 * @param {String} newIconCls The new iconCls.
			 * @param {String} oldIconCls The previous panel iconCls.
			 */
			'iconclschange',

			/**
			 * @event glyphchange
			 * Fired when the Panel glyph has been changed by the {@link #setGlyph} method.
			 * @param {Ext.panel.Panel} this
			 * @param {Number/String} newGlyph
			 * @param {Number/String} oldGlyph
			 */
			'glyphchange',

			/**
			 * @event float
			 * Fires after a collapsed Panel has been "floated" by clicking on
			 * it's header. Only applicable when the Panel is an item in a
			 * {@link Ext.layout.container.Border Border Layout}.
			 */
			'float',

			/**
			 * @event unfloat
			 * Fires after a "floated" Panel has returned to it's collapsed state
			 * as a result of the mouse leaving the Panel. Only applicable when
			 * the Panel is an item in a
			 * {@link Ext.layout.container.Border Border Layout}.
			 */
			'unfloat'
		);

		if (me.collapsible) {
			// Save state on these two events.
			this.addStateEvents(['expand', 'collapse']);
		}
		if (me.unstyled) {
			me.setUI('plain');
		}

		if (me.frame) {
			me.setUI(me.ui + '-framed');
		}

		// Backwards compatibility
		me.bridgeToolbars();

		me.callParent();
		me.collapseDirection = me.collapseDirection || me.headerPosition || Ext.Component.DIRECTION_TOP;

		// Used to track hidden content elements during collapsed state
		me.hiddenOnCollapse = new Ext.dom.CompositeElement();

	},

	bridgeToolbars: function() {
		var me = this,
			docked = [],
			fbar,
			fbarDefaults,
			minButtonWidth = me.minButtonWidth;

		function initToolbar (toolbar, pos, useButtonAlign) {
			if (Ext.isArray(toolbar)) {
				toolbar = {
					xtype: 'toolbar',
					items: toolbar
				};
			}
			else if (!toolbar.xtype) {
				toolbar.xtype = 'toolbar';
			}
			toolbar.dock = pos;
			if (pos == 'left' || pos == 'right') {
				toolbar.vertical = true;
			}

			// Legacy support for buttonAlign (only used by buttons/fbar)
			if (useButtonAlign) {
				toolbar.layout = Ext.applyIf(toolbar.layout || {}, {
					// default to 'end' (right-aligned) if me.buttonAlign is undefined or invalid
					pack: { left:'start', center:'center' }[me.buttonAlign] || 'end'
				});
			}
			return toolbar;
		}

		// Short-hand toolbars (tbar, bbar and fbar plus new lbar and rbar):

		/**
		 * @cfg {String} buttonAlign
		 * The alignment of any buttons added to this panel. Valid values are 'right', 'left' and 'center' (defaults to
		 * 'right' for buttons/fbar, 'left' for other toolbar types).
		 *
		 * **NOTE:** The prefered way to specify toolbars is to use the dockedItems config. Instead of buttonAlign you
		 * would add the layout: { pack: 'start' | 'center' | 'end' } option to the dockedItem config.
		 */

		/**
		 * @cfg {Object/Object[]} tbar
		 * Convenience config. Short for 'Top Bar'.
		 *
		 *     tbar: [
		 *       { xtype: 'button', text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'top',
         *         items: [
         *             { xtype: 'button', text: 'Button 1' }
         *         ]
         *     }]
		 */
		if (me.tbar) {
			docked.push(initToolbar(me.tbar, 'top'));
			me.tbar = null;
		}

		/**
		 * @cfg {Object/Object[]} bbar
		 * Convenience config. Short for 'Bottom Bar'.
		 *
		 *     bbar: [
		 *       { xtype: 'button', text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'bottom',
         *         items: [
         *             { xtype: 'button', text: 'Button 1' }
         *         ]
         *     }]
		 */
		if (me.bbar) {
			docked.push(initToolbar(me.bbar, 'bottom'));
			me.bbar = null;
		}

		/**
		 * @cfg {Object/Object[]} buttons
		 * Convenience config used for adding buttons docked to the bottom of the panel. This is a
		 * synonym for the {@link #fbar} config.
		 *
		 *     buttons: [
		 *       { text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'bottom',
         *         ui: 'footer',
         *         defaults: {minWidth: {@link #minButtonWidth}},
		 *         items: [
		 *             { xtype: 'component', flex: 1 },
		 *             { xtype: 'button', text: 'Button 1' }
		 *         ]
		 *     }]
		 *
		 * The {@link #minButtonWidth} is used as the default {@link Ext.button.Button#minWidth minWidth} for
		 * each of the buttons in the buttons toolbar.
		 */
		if (me.buttons) {
			me.fbar = me.buttons;
			me.buttons = null;
		}

		/**
		 * @cfg {Object/Object[]} fbar
		 * Convenience config used for adding items to the bottom of the panel. Short for Footer Bar.
		 *
		 *     fbar: [
		 *       { type: 'button', text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'bottom',
         *         ui: 'footer',
         *         defaults: {minWidth: {@link #minButtonWidth}},
		 *         items: [
		 *             { xtype: 'component', flex: 1 },
		 *             { xtype: 'button', text: 'Button 1' }
		 *         ]
		 *     }]
		 *
		 * The {@link #minButtonWidth} is used as the default {@link Ext.button.Button#minWidth minWidth} for
		 * each of the buttons in the fbar.
		 */
		if (me.fbar) {
			fbar = initToolbar(me.fbar, 'bottom', true); // only we useButtonAlign
			fbar.ui = 'footer';

			// Apply the minButtonWidth config to buttons in the toolbar
			if (minButtonWidth) {
				fbarDefaults = fbar.defaults;
				fbar.defaults = function(config) {
					var defaults = fbarDefaults || {};
					if ((!config.xtype || config.xtype === 'button' || (config.isComponent && config.isXType('button'))) &&
						!('minWidth' in defaults)) {
						defaults = Ext.apply({minWidth: minButtonWidth}, defaults);
					}
					return defaults;
				};
			}

			docked.push(fbar);
			me.fbar = null;
		}

		/**
		 * @cfg {Object/Object[]} lbar
		 * Convenience config. Short for 'Left Bar' (left-docked, vertical toolbar).
		 *
		 *     lbar: [
		 *       { xtype: 'button', text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'left',
         *         items: [
         *             { xtype: 'button', text: 'Button 1' }
         *         ]
         *     }]
		 */
		if (me.lbar) {
			docked.push(initToolbar(me.lbar, 'left'));
			me.lbar = null;
		}

		/**
		 * @cfg {Object/Object[]} rbar
		 * Convenience config. Short for 'Right Bar' (right-docked, vertical toolbar).
		 *
		 *     rbar: [
		 *       { xtype: 'button', text: 'Button 1' }
		 *     ]
		 *
		 * is equivalent to
		 *
		 *     dockedItems: [{
         *         xtype: 'toolbar',
         *         dock: 'right',
         *         items: [
         *             { xtype: 'button', text: 'Button 1' }
         *         ]
         *     }]
		 */
		if (me.rbar) {
			docked.push(initToolbar(me.rbar, 'right'));
			me.rbar = null;
		}

		if (me.dockedItems) {
			if (!Ext.isArray(me.dockedItems)) {
				me.dockedItems = [me.dockedItems];
			}
			me.dockedItems = me.dockedItems.concat(docked);
		} else {
			me.dockedItems = docked;
		}
	},
	initHeaderAria: function() {
		var me = this,
			el = me.el,
			header = me.header;
		if (el && header) {
			el.dom.setAttribute('aria-labelledby', header.titleCmp.id);
		}
	},
	beforeDestroy: function() {
		var me = this;
		Ext.destroy(
			me.placeholder,
			me.ghostPanel,
			me.dd
		);
		me.callParent();
	},

	beforeRender: function() {
		var me = this,
			wasCollapsed;

		me.callParent();

		// Add class-specific header tools.
		// Panel adds collapsible and closable.
		me.initTools();

		// Dock the header/title unless we are configured specifically not to create a header
		if (!(me.preventHeader || (me.header === false))) {
			me.updateHeader();
		}

		// If we are rendering collapsed, we still need to save and modify various configs
		if (me.collapsed) {
			if (me.isPlaceHolderCollapse()) {
				if (!me.hidden) {
					me.hidden = true;

					// This will insert the placeholder Component into the ownerCt's child collection
					// Its getRenderTree call which is calling this will then iterate again and
					// recreate the child items array to include the new Component. Prevent the first
					// collapse from firing
					me.preventCollapseFire = true;
					me.placeholderCollapse();
					delete me.preventCollapseFire;
					wasCollapsed = me.collapsed;

					// Temporarily clear the flag so that the header is rendered with a collapse tool in it.
					// Placeholder collapse panels never really collapse, they just hide. The tool is always
					// a collapse tool.
					me.collapsed = false;
				}
			} else {
				me.beginCollapse();
				me.addClsWithUI(me.collapsedCls);
			}
		}

		// Restore the flag if we are being rendered initially placeholder collapsed.
		if (wasCollapsed) {
			me.collapsed = wasCollapsed;
		}
	},
	initTools: function() {
		var me = this;

		me.tools = me.tools ? Ext.Array.clone(me.tools) : [];

		// Add a collapse tool unless configured to not show a collapse tool
		// or to not even show a header.
		if (me.collapsible && !(me.hideCollapseTool || me.header === false || me.preventHeader)) {
			me.collapseDirection = me.collapseDirection || me.headerPosition || 'top';
			me.collapseTool = me.expandTool = Ext.widget({
				xtype: 'tool',
				type: (me.collapsed && !me.isPlaceHolderCollapse()) ? ('expand-' + me.getOppositeDirection(me.collapseDirection)) : ('collapse-' + me.collapseDirection),
				handler: me.toggleCollapse,
				scope: me
			});

			// Prepend collapse tool is configured to do so.
			if (me.collapseFirst) {
				me.tools.unshift(me.collapseTool);
			}
		}

		// Add subclass-specific tools.
		me.addTools();

		// Make Panel closable.
		if (me.closable) {
			me.addClsWithUI('closable');
			me.addTool(Ext.widget({
				xtype : 'tool',
				type: 'close',
				handler: Ext.Function.bind(me.close, me, [])
			}));
		}

		// Append collapse tool if needed.
		if (me.collapseTool && !me.collapseFirst) {
			me.addTool(me.collapseTool);
		}
	},

	getCollapsed: function() {
		var me = this;
		// The collapsed flag, when the Panel is collapsed acts as the direction in which the collapse took
		// place. It can still be tested as truthy/falsy if only a truth value is required.
		if (me.collapsed === true) {
			return me.collapseDirection;
		}
		return me.collapsed;
	}
});