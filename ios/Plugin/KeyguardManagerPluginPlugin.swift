import Foundation
import Capacitor
import LocalAuthentication

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(KeyguardManagerPluginPlugin)
public class KeyguardManagerPluginPlugin: CAPPlugin {
    private let implementation = KeyguardManagerPlugin()

    @objc func isDeviceSecure(_ call: CAPPluginCall) {
        
        call.success([
            "value": devicePasscodeSet()
        ])
    }

    private func devicePasscodeSet() -> Bool {
        //checks to see if devices (not apps) passcode has been set
        return LAContext().canEvaluatePolicy(.deviceOwnerAuthentication, error: nil)
      }
}
