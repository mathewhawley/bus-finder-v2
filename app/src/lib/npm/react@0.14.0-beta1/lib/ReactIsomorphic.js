/* */ 
(function(process) {
  'use strict';
  var ReactChildren = require("./ReactChildren");
  var ReactComponent = require("./ReactComponent");
  var ReactClass = require("./ReactClass");
  var ReactDOM = require("./ReactDOM");
  var ReactElement = require("./ReactElement");
  var ReactElementValidator = require("./ReactElementValidator");
  var ReactPropTypes = require("./ReactPropTypes");
  var assign = require("./Object.assign");
  var onlyChild = require("./onlyChild");
  var createElement = ReactElement.createElement;
  var createFactory = ReactElement.createFactory;
  var cloneElement = ReactElement.cloneElement;
  if ('production' !== process.env.NODE_ENV) {
    createElement = ReactElementValidator.createElement;
    createFactory = ReactElementValidator.createFactory;
    cloneElement = ReactElementValidator.cloneElement;
  }
  var React = {
    Children: {
      map: ReactChildren.map,
      forEach: ReactChildren.forEach,
      count: ReactChildren.count,
      only: onlyChild
    },
    Component: ReactComponent,
    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement.isValidElement,
    PropTypes: ReactPropTypes,
    createClass: ReactClass.createClass,
    createFactory: createFactory,
    createMixin: function(mixin) {
      return mixin;
    },
    DOM: ReactDOM,
    __spread: assign
  };
  module.exports = React;
})(require("process"));
