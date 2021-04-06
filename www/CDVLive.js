var channel = require('cordova/channel');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function CDVLive () {
    this.is_debug = false;
    var self = this;

    channel.onCordovaReady.subscribe(function () {
        exec(function(isDebug) {
            self.is_debug = isDebug;
            channel.onCordovaInfoReady.fire();
        }, error, "CDVLive", "getIsDebug", []);
    });
}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
CDVLive.prototype.getIsDebug = function (successCallback) {
    exec(successCallback, null, 'CDVLive', 'getIsDebug', []);
};

module.exports = new CDVLive();
