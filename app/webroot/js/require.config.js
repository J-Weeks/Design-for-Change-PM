var jam = {
  "packages": [
    {
      "name": "backbone",
      "location": "/vendor/js/plugins/backbone",
      "main": "backbone.js"
    },
    {
      "name": "backbone.layoutmanager",
      "location": "/vendor/js/plugins/backbone.layoutmanager",
      "main": "backbone.layoutmanager.js"
    },
    {
      "name": "jquery",
      "location": "/vendor/js/plugins/jquery",
      "main": "dist/jquery.js"
    },
    {
      "name": "lodash",
      "location": "/vendor/js/plugins/lodash",
      "main": "./lodash.js"
    },
    {
      "name": "underscore",
      "location": "/vendor/js/plugins/underscore",
      "main": "underscore.js"
    }
],
"version": "0.2.12",
  "shim": {
    "backbone": {
      "deps": [
        "jquery",
        "lodash"
      ],
      "exports": "Backbone"
    },
    "backbone.layoutmanager": {
      "deps": [
        "jquery",
        "backbone",
        "lodash"
      ],
      "exports": "Backbone.LayoutManager"
    },
    "lodash": {
      "exports": "_"
    }
  }
};

if (typeof require !== "undefined" && require.config) {
  require.config({packages: jam.packages, shim: jam.shim});
}
else {
  var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
  module.exports = jam;
}