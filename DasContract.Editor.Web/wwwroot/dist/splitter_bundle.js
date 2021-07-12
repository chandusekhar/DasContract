var splitterLib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/splitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/splitter.js":
/*!************************!*\
  !*** ./js/splitter.js ***!
  \************************/
/*! exports provided: createSplit, setResizeHandlerInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSplit\", function() { return createSplit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setResizeHandlerInstance\", function() { return setResizeHandlerInstance; });\n/* harmony import */ var split_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! split-grid */ \"./node_modules/split-grid/dist/split-grid.mjs\");\n\nfunction createSplit(gutterSelector) {\n  Object(split_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    columnGutters: [{\n      track: 1,\n      element: document.querySelector(gutterSelector)\n    }],\n    onDrag: debounce(handleOnDrag, 30)\n  });\n}\n\nfunction debounce(func, timeout = 300) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      func.apply(this, args);\n    }, timeout);\n  };\n}\n\nfunction setResizeHandlerInstance(dotNetObjectRef) {\n  splitterLib.resizeHandlerRef = dotNetObjectRef;\n}\n\nfunction handleOnDrag() {\n  if (splitterLib.resizeHandlerRef != null) {\n    splitterLib.resizeHandlerRef.invokeMethodAsync(\"MainGutterResized\");\n  }\n}\n\n//# sourceURL=webpack://%5Bname%5DLib/./js/splitter.js?");

/***/ }),

/***/ "./node_modules/split-grid/dist/split-grid.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/split-grid/dist/split-grid.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar numeric = function (value, unit) { return Number(value.slice(0, -1 * unit.length)); };\n\nvar parseValue = function (value) {\n    if (value.endsWith('px'))\n        { return { value: value, type: 'px', numeric: numeric(value, 'px') } }\n    if (value.endsWith('fr'))\n        { return { value: value, type: 'fr', numeric: numeric(value, 'fr') } }\n    if (value.endsWith('%'))\n        { return { value: value, type: '%', numeric: numeric(value, '%') } }\n    if (value === 'auto') { return { value: value, type: 'auto' } }\n    return null\n};\n\nvar parse = function (rule) { return rule.split(' ').map(parseValue); };\n\nvar getSizeAtTrack = function (index, tracks, gap, end) {\n    if ( gap === void 0 ) { gap = 0; }\n    if ( end === void 0 ) { end = false; }\n\n    var newIndex = end ? index + 1 : index;\n    var trackSum = tracks\n        .slice(0, newIndex)\n        .reduce(function (accum, value) { return accum + value.numeric; }, 0);\n    var gapSum = gap ? index * gap : 0;\n\n    return trackSum + gapSum\n};\n\nvar getStyles = function (rule, ownRules, matchedRules) { return ownRules.concat( matchedRules)\n        .map(function (r) { return r.style[rule]; })\n        .filter(function (style) { return style !== undefined && style !== ''; }); };\n\nvar getGapValue = function (unit, size) {\n    if (size.endsWith(unit)) {\n        return Number(size.slice(0, -1 * unit.length))\n    }\n    return null\n};\n\nvar firstNonZero = function (tracks) {\n    // eslint-disable-next-line no-plusplus\n    for (var i = 0; i < tracks.length; i++) {\n        if (tracks[i].numeric > 0) {\n            return i\n        }\n    }\n    return null\n};\n\nvar NOOP = function () { return false; };\n\nvar defaultWriteStyle = function (element, gridTemplateProp, style) {\n    // eslint-disable-next-line no-param-reassign\n    element.style[gridTemplateProp] = style;\n};\n\nvar getOption = function (options, propName, def) {\n    var value = options[propName];\n    if (value !== undefined) {\n        return value\n    }\n    return def\n};\n\nfunction getMatchedCSSRules (el) {\n        var ref;\n\n        return (ref = [])\n        .concat.apply(\n            ref, Array.from(el.ownerDocument.styleSheets).map(function (s) {\n                var rules = [];\n\n                try {\n                    rules = Array.from(s.cssRules || []);\n                } catch (e) {\n                    // Ignore results on security error\n                }\n\n                return rules\n            })\n        )\n        .filter(function (r) {\n            var matches = false;\n            try {\n                matches = el.matches(r.selectorText);\n            } catch (e) {\n                // Ignore matching erros\n            }\n\n            return matches\n        });\n}\n\nvar gridTemplatePropColumns = 'grid-template-columns';\nvar gridTemplatePropRows = 'grid-template-rows';\n\nvar Gutter = function Gutter(direction, options, parentOptions) {\n    this.direction = direction;\n    this.element = options.element;\n    this.track = options.track;\n\n    if (direction === 'column') {\n        this.gridTemplateProp = gridTemplatePropColumns;\n        this.gridGapProp = 'grid-column-gap';\n        this.cursor = getOption(\n            parentOptions,\n            'columnCursor',\n            getOption(parentOptions, 'cursor', 'col-resize')\n        );\n        this.snapOffset = getOption(\n            parentOptions,\n            'columnSnapOffset',\n            getOption(parentOptions, 'snapOffset', 30)\n        );\n        this.dragInterval = getOption(\n            parentOptions,\n            'columnDragInterval',\n            getOption(parentOptions, 'dragInterval', 1)\n        );\n        this.clientAxis = 'clientX';\n        this.optionStyle = getOption(parentOptions, 'gridTemplateColumns');\n    } else if (direction === 'row') {\n        this.gridTemplateProp = gridTemplatePropRows;\n        this.gridGapProp = 'grid-row-gap';\n        this.cursor = getOption(\n            parentOptions,\n            'rowCursor',\n            getOption(parentOptions, 'cursor', 'row-resize')\n        );\n        this.snapOffset = getOption(\n            parentOptions,\n            'rowSnapOffset',\n            getOption(parentOptions, 'snapOffset', 30)\n        );\n        this.dragInterval = getOption(\n            parentOptions,\n            'rowDragInterval',\n            getOption(parentOptions, 'dragInterval', 1)\n        );\n        this.clientAxis = 'clientY';\n        this.optionStyle = getOption(parentOptions, 'gridTemplateRows');\n    }\n\n    this.onDragStart = getOption(parentOptions, 'onDragStart', NOOP);\n    this.onDragEnd = getOption(parentOptions, 'onDragEnd', NOOP);\n    this.onDrag = getOption(parentOptions, 'onDrag', NOOP);\n    this.writeStyle = getOption(\n        parentOptions,\n        'writeStyle',\n        defaultWriteStyle\n    );\n\n    this.startDragging = this.startDragging.bind(this);\n    this.stopDragging = this.stopDragging.bind(this);\n    this.drag = this.drag.bind(this);\n\n    this.minSizeStart = options.minSizeStart;\n    this.minSizeEnd = options.minSizeEnd;\n\n    if (options.element) {\n        this.element.addEventListener('mousedown', this.startDragging);\n        this.element.addEventListener('touchstart', this.startDragging);\n    }\n};\n\nGutter.prototype.getDimensions = function getDimensions () {\n    var ref = this.grid.getBoundingClientRect();\n        var width = ref.width;\n        var height = ref.height;\n        var top = ref.top;\n        var bottom = ref.bottom;\n        var left = ref.left;\n        var right = ref.right;\n\n    if (this.direction === 'column') {\n        this.start = top;\n        this.end = bottom;\n        this.size = height;\n    } else if (this.direction === 'row') {\n        this.start = left;\n        this.end = right;\n        this.size = width;\n    }\n};\n\nGutter.prototype.getSizeAtTrack = function getSizeAtTrack$1 (track, end) {\n    return getSizeAtTrack(\n        track,\n        this.computedPixels,\n        this.computedGapPixels,\n        end\n    )\n};\n\nGutter.prototype.getSizeOfTrack = function getSizeOfTrack (track) {\n    return this.computedPixels[track].numeric\n};\n\nGutter.prototype.getRawTracks = function getRawTracks () {\n    var tracks = getStyles(\n        this.gridTemplateProp,\n        [this.grid],\n        getMatchedCSSRules(this.grid)\n    );\n    if (!tracks.length) {\n        if (this.optionStyle) { return this.optionStyle }\n\n        throw Error('Unable to determine grid template tracks from styles.')\n    }\n    return tracks[0]\n};\n\nGutter.prototype.getGap = function getGap () {\n    var gap = getStyles(\n        this.gridGapProp,\n        [this.grid],\n        getMatchedCSSRules(this.grid)\n    );\n    if (!gap.length) {\n        return null\n    }\n    return gap[0]\n};\n\nGutter.prototype.getRawComputedTracks = function getRawComputedTracks () {\n    return window.getComputedStyle(this.grid)[this.gridTemplateProp]\n};\n\nGutter.prototype.getRawComputedGap = function getRawComputedGap () {\n    return window.getComputedStyle(this.grid)[this.gridGapProp]\n};\n\nGutter.prototype.setTracks = function setTracks (raw) {\n    this.tracks = raw.split(' ');\n    this.trackValues = parse(raw);\n};\n\nGutter.prototype.setComputedTracks = function setComputedTracks (raw) {\n    this.computedTracks = raw.split(' ');\n    this.computedPixels = parse(raw);\n};\n\nGutter.prototype.setGap = function setGap (raw) {\n    this.gap = raw;\n};\n\nGutter.prototype.setComputedGap = function setComputedGap (raw) {\n    this.computedGap = raw;\n    this.computedGapPixels = getGapValue('px', this.computedGap) || 0;\n};\n\nGutter.prototype.getMousePosition = function getMousePosition (e) {\n    if ('touches' in e) { return e.touches[0][this.clientAxis] }\n    return e[this.clientAxis]\n};\n\nGutter.prototype.startDragging = function startDragging (e) {\n    if ('button' in e && e.button !== 0) {\n        return\n    }\n\n    // Don't actually drag the element. We emulate that in the drag function.\n    e.preventDefault();\n\n    if (this.element) {\n        this.grid = this.element.parentNode;\n    } else {\n        this.grid = e.target.parentNode;\n    }\n\n    this.getDimensions();\n    this.setTracks(this.getRawTracks());\n    this.setComputedTracks(this.getRawComputedTracks());\n    this.setGap(this.getGap());\n    this.setComputedGap(this.getRawComputedGap());\n\n    var trackPercentage = this.trackValues.filter(\n        function (track) { return track.type === '%'; }\n    );\n    var trackFr = this.trackValues.filter(function (track) { return track.type === 'fr'; });\n\n    this.totalFrs = trackFr.length;\n\n    if (this.totalFrs) {\n        var track = firstNonZero(trackFr);\n\n        if (track !== null) {\n            this.frToPixels =\n                this.computedPixels[track].numeric / trackFr[track].numeric;\n        }\n    }\n\n    if (trackPercentage.length) {\n        var track$1 = firstNonZero(trackPercentage);\n\n        if (track$1 !== null) {\n            this.percentageToPixels =\n                this.computedPixels[track$1].numeric /\n                trackPercentage[track$1].numeric;\n        }\n    }\n\n    // get start of gutter track\n    var gutterStart = this.getSizeAtTrack(this.track, false) + this.start;\n    this.dragStartOffset = this.getMousePosition(e) - gutterStart;\n\n    this.aTrack = this.track - 1;\n\n    if (this.track < this.tracks.length - 1) {\n        this.bTrack = this.track + 1;\n    } else {\n        throw Error(\n            (\"Invalid track index: \" + (this.track) + \". Track must be between two other tracks and only \" + (this.tracks.length) + \" tracks were found.\")\n        )\n    }\n\n    this.aTrackStart = this.getSizeAtTrack(this.aTrack, false) + this.start;\n    this.bTrackEnd = this.getSizeAtTrack(this.bTrack, true) + this.start;\n\n    // Set the dragging property of the pair object.\n    this.dragging = true;\n\n    // All the binding. `window` gets the stop events in case we drag out of the elements.\n    window.addEventListener('mouseup', this.stopDragging);\n    window.addEventListener('touchend', this.stopDragging);\n    window.addEventListener('touchcancel', this.stopDragging);\n    window.addEventListener('mousemove', this.drag);\n    window.addEventListener('touchmove', this.drag);\n\n    // Disable selection. Disable!\n    this.grid.addEventListener('selectstart', NOOP);\n    this.grid.addEventListener('dragstart', NOOP);\n\n    this.grid.style.userSelect = 'none';\n    this.grid.style.webkitUserSelect = 'none';\n    this.grid.style.MozUserSelect = 'none';\n    this.grid.style.pointerEvents = 'none';\n\n    // Set the cursor at multiple levels\n    this.grid.style.cursor = this.cursor;\n    window.document.body.style.cursor = this.cursor;\n\n    this.onDragStart(this.direction, this.track);\n};\n\nGutter.prototype.stopDragging = function stopDragging () {\n    this.dragging = false;\n\n    // Remove the stored event listeners. This is why we store them.\n    this.cleanup();\n\n    this.onDragEnd(this.direction, this.track);\n\n    if (this.needsDestroy) {\n        if (this.element) {\n            this.element.removeEventListener(\n                'mousedown',\n                this.startDragging\n            );\n            this.element.removeEventListener(\n                'touchstart',\n                this.startDragging\n            );\n        }\n        this.destroyCb();\n        this.needsDestroy = false;\n        this.destroyCb = null;\n    }\n};\n\nGutter.prototype.drag = function drag (e) {\n    var mousePosition = this.getMousePosition(e);\n\n    var gutterSize = this.getSizeOfTrack(this.track);\n    var minMousePosition =\n        this.aTrackStart +\n        this.minSizeStart +\n        this.dragStartOffset +\n        this.computedGapPixels;\n    var maxMousePosition =\n        this.bTrackEnd -\n        this.minSizeEnd -\n        this.computedGapPixels -\n        (gutterSize - this.dragStartOffset);\n    var minMousePositionOffset = minMousePosition + this.snapOffset;\n    var maxMousePositionOffset = maxMousePosition - this.snapOffset;\n\n    if (mousePosition < minMousePositionOffset) {\n        mousePosition = minMousePosition;\n    }\n\n    if (mousePosition > maxMousePositionOffset) {\n        mousePosition = maxMousePosition;\n    }\n\n    if (mousePosition < minMousePosition) {\n        mousePosition = minMousePosition;\n    } else if (mousePosition > maxMousePosition) {\n        mousePosition = maxMousePosition;\n    }\n\n    var aTrackSize =\n        mousePosition -\n        this.aTrackStart -\n        this.dragStartOffset -\n        this.computedGapPixels;\n    var bTrackSize =\n        this.bTrackEnd -\n        mousePosition +\n        this.dragStartOffset -\n        gutterSize -\n        this.computedGapPixels;\n\n    if (this.dragInterval > 1) {\n        var aTrackSizeIntervaled =\n            Math.round(aTrackSize / this.dragInterval) * this.dragInterval;\n        bTrackSize -= aTrackSizeIntervaled - aTrackSize;\n        aTrackSize = aTrackSizeIntervaled;\n    }\n\n    if (aTrackSize < this.minSizeStart) {\n        aTrackSize = this.minSizeStart;\n    }\n\n    if (bTrackSize < this.minSizeEnd) {\n        bTrackSize = this.minSizeEnd;\n    }\n\n    if (this.trackValues[this.aTrack].type === 'px') {\n        this.tracks[this.aTrack] = aTrackSize + \"px\";\n    } else if (this.trackValues[this.aTrack].type === 'fr') {\n        if (this.totalFrs === 1) {\n            this.tracks[this.aTrack] = '1fr';\n        } else {\n            var targetFr = aTrackSize / this.frToPixels;\n            this.tracks[this.aTrack] = targetFr + \"fr\";\n        }\n    } else if (this.trackValues[this.aTrack].type === '%') {\n        var targetPercentage = aTrackSize / this.percentageToPixels;\n        this.tracks[this.aTrack] = targetPercentage + \"%\";\n    }\n\n    if (this.trackValues[this.bTrack].type === 'px') {\n        this.tracks[this.bTrack] = bTrackSize + \"px\";\n    } else if (this.trackValues[this.bTrack].type === 'fr') {\n        if (this.totalFrs === 1) {\n            this.tracks[this.bTrack] = '1fr';\n        } else {\n            var targetFr$1 = bTrackSize / this.frToPixels;\n            this.tracks[this.bTrack] = targetFr$1 + \"fr\";\n        }\n    } else if (this.trackValues[this.bTrack].type === '%') {\n        var targetPercentage$1 = bTrackSize / this.percentageToPixels;\n        this.tracks[this.bTrack] = targetPercentage$1 + \"%\";\n    }\n\n    var style = this.tracks.join(' ');\n    this.writeStyle(this.grid, this.gridTemplateProp, style);\n    this.onDrag(this.direction, this.track, style);\n};\n\nGutter.prototype.cleanup = function cleanup () {\n    window.removeEventListener('mouseup', this.stopDragging);\n    window.removeEventListener('touchend', this.stopDragging);\n    window.removeEventListener('touchcancel', this.stopDragging);\n    window.removeEventListener('mousemove', this.drag);\n    window.removeEventListener('touchmove', this.drag);\n\n    if (this.grid) {\n        this.grid.removeEventListener('selectstart', NOOP);\n        this.grid.removeEventListener('dragstart', NOOP);\n\n        this.grid.style.userSelect = '';\n        this.grid.style.webkitUserSelect = '';\n        this.grid.style.MozUserSelect = '';\n        this.grid.style.pointerEvents = '';\n\n        this.grid.style.cursor = '';\n    }\n\n    window.document.body.style.cursor = '';\n};\n\nGutter.prototype.destroy = function destroy (immediate, cb) {\n        if ( immediate === void 0 ) immediate = true;\n\n    if (immediate || this.dragging === false) {\n        this.cleanup();\n        if (this.element) {\n            this.element.removeEventListener(\n                'mousedown',\n                this.startDragging\n            );\n            this.element.removeEventListener(\n                'touchstart',\n                this.startDragging\n            );\n        }\n\n        if (cb) {\n            cb();\n        }\n    } else {\n        this.needsDestroy = true;\n        if (cb) {\n            this.destroyCb = cb;\n        }\n    }\n};\n\nvar getTrackOption = function (options, track, defaultValue) {\n    if (track in options) {\n        return options[track]\n    }\n\n    return defaultValue\n};\n\nvar createGutter = function (direction, options) { return function (gutterOptions) {\n    if (gutterOptions.track < 1) {\n        throw Error(\n            (\"Invalid track index: \" + (gutterOptions.track) + \". Track must be between two other tracks.\")\n        )\n    }\n\n    var trackMinSizes =\n        direction === 'column'\n            ? options.columnMinSizes || {}\n            : options.rowMinSizes || {};\n    var trackMinSize = direction === 'column' ? 'columnMinSize' : 'rowMinSize';\n\n    return new Gutter(\n        direction,\n        Object.assign({}, {minSizeStart: getTrackOption(\n                trackMinSizes,\n                gutterOptions.track - 1,\n                getOption(\n                    options,\n                    trackMinSize,\n                    getOption(options, 'minSize', 0)\n                )\n            ),\n            minSizeEnd: getTrackOption(\n                trackMinSizes,\n                gutterOptions.track + 1,\n                getOption(\n                    options,\n                    trackMinSize,\n                    getOption(options, 'minSize', 0)\n                )\n            )},\n            gutterOptions),\n        options\n    )\n}; };\n\nvar Grid = function Grid(options) {\n    var this$1 = this;\n\n    this.columnGutters = {};\n    this.rowGutters = {};\n\n    this.options = Object.assign({}, {columnGutters: options.columnGutters || [],\n        rowGutters: options.rowGutters || [],\n        columnMinSizes: options.columnMinSizes || {},\n        rowMinSizes: options.rowMinSizes || {}},\n        options);\n\n    this.options.columnGutters.forEach(function (gutterOptions) {\n        this$1.columnGutters[gutterOptions.track] = createGutter(\n            'column',\n            this$1.options\n        )(gutterOptions);\n    });\n\n    this.options.rowGutters.forEach(function (gutterOptions) {\n        this$1.rowGutters[gutterOptions.track] = createGutter(\n            'row',\n            this$1.options\n        )(gutterOptions);\n    });\n};\n\nGrid.prototype.addColumnGutter = function addColumnGutter (element, track) {\n    if (this.columnGutters[track]) {\n        this.columnGutters[track].destroy();\n    }\n\n    this.columnGutters[track] = createGutter(\n        'column',\n        this.options\n    )({\n        element: element,\n        track: track,\n    });\n};\n\nGrid.prototype.addRowGutter = function addRowGutter (element, track) {\n    if (this.rowGutters[track]) {\n        this.rowGutters[track].destroy();\n    }\n\n    this.rowGutters[track] = createGutter(\n        'row',\n        this.options\n    )({\n        element: element,\n        track: track,\n    });\n};\n\nGrid.prototype.removeColumnGutter = function removeColumnGutter (track, immediate) {\n        var this$1 = this;\n        if ( immediate === void 0 ) immediate = true;\n\n    if (this.columnGutters[track]) {\n        this.columnGutters[track].destroy(immediate, function () {\n            delete this$1.columnGutters[track];\n        });\n    }\n};\n\nGrid.prototype.removeRowGutter = function removeRowGutter (track, immediate) {\n        var this$1 = this;\n        if ( immediate === void 0 ) immediate = true;\n\n    if (this.rowGutters[track]) {\n        this.rowGutters[track].destroy(immediate, function () {\n            delete this$1.rowGutters[track];\n        });\n    }\n};\n\nGrid.prototype.handleDragStart = function handleDragStart (e, direction, track) {\n    if (direction === 'column') {\n        if (this.columnGutters[track]) {\n            this.columnGutters[track].destroy();\n        }\n\n        this.columnGutters[track] = createGutter(\n            'column',\n            this.options\n        )({\n            track: track,\n        });\n        this.columnGutters[track].startDragging(e);\n    } else if (direction === 'row') {\n        if (this.rowGutters[track]) {\n            this.rowGutters[track].destroy();\n        }\n\n        this.rowGutters[track] = createGutter(\n            'row',\n            this.options\n        )({\n            track: track,\n        });\n        this.rowGutters[track].startDragging(e);\n    }\n};\n\nGrid.prototype.destroy = function destroy (immediate) {\n        var this$1 = this;\n        if ( immediate === void 0 ) immediate = true;\n\n    Object.keys(this.columnGutters).forEach(function (track) { return this$1.columnGutters[track].destroy(immediate, function () {\n            delete this$1.columnGutters[track];\n        }); }\n    );\n    Object.keys(this.rowGutters).forEach(function (track) { return this$1.rowGutters[track].destroy(immediate, function () {\n            delete this$1.rowGutters[track];\n        }); }\n    );\n};\n\nfunction index (options) { return new Grid(options); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n//# sourceURL=webpack://%5Bname%5DLib/./node_modules/split-grid/dist/split-grid.mjs?");

/***/ })

/******/ });