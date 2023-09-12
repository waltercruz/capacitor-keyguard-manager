package com.waltercruz.keyguardmanager.capacitor;

import android.util.Log;

public class KeyguardManagerPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
