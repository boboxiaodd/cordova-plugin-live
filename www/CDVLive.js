cordova.define("cordova-plugin-live.CDVLive", function(require, exports, module) {
    'use strict';
    var exec = require('cordova/exec');

    function CDVLive() {

    }


/*
    即构初始化
    params = {
        appid: //即构appid,
        sign: //即构appSignature,
        env: //是否为开发环境,
    }
*/
    CDVLive.prototype.init = function(success,fail,params){
        exec(success, fail, 'CDVLive', 'init', [params]);
    }


    CDVLive.prototype.playSVGA = function(success,params){
    	exec(success,null,'CDVLive','playSVGA',[params]);
    }

    CDVLive.prototype.stopSVGA = function(){
    	exec(null,null,'CDVLive','stopSVGA',[]);
    }



/*
    打开本地预览，用于直播前调整美颜
*/
    CDVLive.prototype.startPreview = function(){
        exec(null, null, 'CDVLive', 'startPreview', []);
    }    

/*
    关闭本地预览，用于直播前调整美颜
*/
    CDVLive.prototype.stopPreview = function(success){
        exec(success, null, 'CDVLive', 'stopPreview', []);
    }


/*
跳转到APP设置页面，用于提示用户开启某些权限
*/    
    CDVLive.prototype.goSetting = function(){
        exec(null, null, 'CDVLive', 'goSetting', []);
    }

    CDVLive.prototype.goURL = function(success,params){
        exec(success, null, 'CDVLive', 'goURL', [params]);
    }
/*
播放系统的振动声音
*/    
    CDVLive.prototype.playBeep = function(){
        exec(null, null, 'CDVLive', 'playBeep', []);
    }


/*
加入房间
                params = {
                        "userID": //用户ID,
                        "roomID": //房间ID,
                        "userName": //用户名,
                        "is_actor": //是否为主播,
                        "liveRoomStreamID": //主播流ID,
                        "pkStreamID": //PK流ID
                        "connectStreamIDList":[], //连麦流ID列表
                    }
*/    
    CDVLive.prototype.joinRoom = function (success, fail, params) {
        exec(success, fail, 'CDVLive', 'joinRoom', [params]);
    };


/*
离开房间
*/
    CDVLive.prototype.exitRoom = function (success) {
        exec(success, null, 'CDVLive', 'exitRoom', []);
    };


/*
开始推连麦流
*/
    CDVLive.prototype.startConnect = function (success,params) {
        exec(success, null, 'CDVLive', 'startConnect', [params]);
    };

/*
是否静音麦克风
*/
  CDVLive.prototype.muteMicphone = function (params) {
        exec(null, null, 'CDVLive', 'muteMicphone', [params]);
    };

      
/*
结束推连麦流
*/
    CDVLive.prototype.stopConnect = function () {
        exec(null, null, 'CDVLive', 'stopConnect', []);
    };

/*
交换前后摄像头
*/
    CDVLive.prototype.switchCamera = function (success, fail, params) {
        exec(success, fail, 'CDVLive', 'switchCamera', [params]);
    };


/*
打开美颜调整界面
*/
    CDVLive.prototype.openBeauty = function () {
        exec(null, null, 'CDVLive', 'openBeauty', []);
    };
/*
关闭美颜界面
*/
    CDVLive.prototype.closeBeauty = function () {
        exec(null, null, 'CDVLive', 'closeBeauty', []);
    };



/*
开始PK界面
param = {
        pkStreamID: //PK流ID
    }
*/
    CDVLive.prototype.startPK = function (params) {
        exec(null, null, 'CDVLive', 'startPK', [params]);
    };

/*
结束PK
*/
    CDVLive.prototype.stopPK = function () {
        exec(null, null, 'CDVLive', 'stopPK', []);
    };


 /*
 显示直播间输入框
 params= {
        placeholder:'输入聊天内容'
    }
 */   
    CDVLive.prototype.showLiveInputbar = function (params) {
        exec(null, null, 'CDVLive', 'showLiveInputbar', [params]);
    };    


    if (!window.CDVLive) {
        window.CDVLive = new CDVLive();
    }

    module.exports = new CDVLive();

});
