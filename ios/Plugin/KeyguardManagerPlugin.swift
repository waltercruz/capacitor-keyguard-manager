import Foundation

@objc public class KeyguardManagerPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
