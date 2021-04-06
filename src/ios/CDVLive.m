#import <Cordova/CDV.h>
#import "CDVLive.h"

#define kRemainCountingDuration  10     //剩余多少秒开始倒计时

@interface CDVLive () <UITextFieldDelegate>
@property (readwrite, assign, nonatomic) BOOL disableScroll;
@end

@implementation CDVLive

- (void)getIsDebug:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    #ifdef DEBUG
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK  messageAsBool:(true)];
    #else
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK  messageAsBool:(false)];
    #endif

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
