package com.waltercruz.keyguardmanager.capacitor;

import android.app.KeyguardManager;
import android.content.Context;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "KeyguardManagerPlugin")
public class KeyguardManagerPluginPlugin extends Plugin {

    private KeyguardManagerPlugin implementation = new KeyguardManagerPlugin();

    @PluginMethod
    public void isDeviceSecure(PluginCall call) {
        Context myContext = this.getActivity().getApplicationContext();
        KeyguardManager keyguardManager = (KeyguardManager)myContext.getSystemService(Context.KEYGUARD_SERVICE);
        System.out.println("checking if android device is secure");
        System.out.println(keyguardManager.isDeviceSecure());
        JSObject ret = new JSObject();
        ret.put("value", keyguardManager.isDeviceSecure());
        call.success(ret);
    }    
}
