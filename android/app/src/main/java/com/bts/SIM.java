package com.bts;
import android.annotation.TargetApi;
import android.content.Context;
import android.telephony.TelephonyManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import java.util.List;
import android.os.Build;
import android.telephony.CellIdentityCdma;
import android.telephony.CellIdentityGsm;
import android.telephony.CellIdentityLte;
import android.telephony.CellIdentityWcdma;
import android.telephony.CellInfo;
import android.telephony.CellInfoCdma;
import android.telephony.CellInfoGsm;
import android.telephony.CellInfoLte;
import android.telephony.CellInfoWcdma;
import android.telephony.CellLocation;
import android.telephony.CellSignalStrengthCdma;
import android.telephony.CellSignalStrengthGsm;
import android.telephony.CellSignalStrengthLte;
import android.telephony.CellSignalStrengthWcdma;
import android.telephony.CellSignalStrengthCdma;
import android.telephony.gsm.GsmCellLocation;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.NetworkCapabilities;

public class SIM extends ReactContextBaseJavaModule {
    private ReactApplicationContext mReactContext;
    private TelephonyManager telephonyManager;
    
    
   SIM(ReactApplicationContext context) {
       super(context);
       mReactContext = context;
       telephonyManager = (TelephonyManager) mReactContext.getSystemService(Context.TELEPHONY_SERVICE);
   }
   

   @ReactMethod
   public void getCID(Callback successCallback){
       //Cell id
       GsmCellLocation location = (GsmCellLocation) telephonyManager.getCellLocation();
       successCallback.invoke(location.getCid());
   }

   @ReactMethod
   public void getTAC(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null && cell instanceof CellInfoLte){
            CellIdentityLte cellIdentity = ((CellInfoLte) cell).getCellIdentity();
            successCallback.invoke(cellIdentity.getTac());
       }
   }


   @ReactMethod
   public void getEARFCN(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null && cell instanceof CellInfoLte && android.os.Build.VERSION.SDK_INT >= 24){
            CellIdentityLte cellIdentity = ((CellInfoLte) cell).getCellIdentity();
            successCallback.invoke(cellIdentity.getEarfcn());
       }
   }

   @ReactMethod
   public void getMCC(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null){
            CellIdentityLte cellIdentity = ((CellInfoLte) cell).getCellIdentity();
            successCallback.invoke(cellIdentity.getMcc());
       }
   }


   @ReactMethod
   public void getRSSI(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null && cell instanceof CellInfoLte){
            CellSignalStrengthLte cellSignalStrengthLte = ((CellInfoLte) cell).getCellSignalStrength();
            successCallback.invoke(cellSignalStrengthLte.getRssi());
       } else if (cell != null && cell instanceof CellInfoGsm){
            CellSignalStrengthGsm cellSignalStrengthGsm = ((CellInfoGsm) cell).getCellSignalStrength();
            successCallback.invoke(cellSignalStrengthGsm.getAsuLevel());
       } else if (cell != null && cell instanceof CellInfoCdma){
            CellSignalStrengthCdma cellSignalStrengthCdma = ((CellInfoCdma) cell).getCellSignalStrength();
            successCallback.invoke(cellSignalStrengthCdma.getCdmaDbm());
       }
   }


   @ReactMethod
   public void getRSRP(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null && cell instanceof CellInfoLte){
            CellSignalStrengthLte cellSignalStrengthLte = ((CellInfoLte) cell).getCellSignalStrength();
            successCallback.invoke(cellSignalStrengthLte.getRsrp());
       }
   }


   @ReactMethod
   public void getRSRQ(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null && cell instanceof CellInfoLte){
            CellSignalStrengthLte cellSignalStrengthLte = ((CellInfoLte) cell).getCellSignalStrength();
            successCallback.invoke(cellSignalStrengthLte.getRsrq());
       }
   }
   

   @ReactMethod
   public void getMNC(Callback successCallback){
       List<CellInfo> list = telephonyManager.getAllCellInfo();
       CellInfo cell = null;
       for (CellInfo s : list) {
           if (s.isRegistered()){
               cell = s;
           }
       }
       if (cell != null){
            CellIdentityLte cellIdentity = ((CellInfoLte) cell).getCellIdentity();
            successCallback.invoke(cellIdentity.getMnc());
       }
   }


   @ReactMethod
   public void getUPLINK(Callback successCallback){
       ConnectivityManager cm = (ConnectivityManager) mReactContext.getSystemService(Context.CONNECTIVITY_SERVICE);
       NetworkInfo netInfo = cm.getActiveNetworkInfo();
       NetworkCapabilities nc = cm.getNetworkCapabilities(cm.getActiveNetwork());
       int upSpeed = nc.getLinkUpstreamBandwidthKbps();
       successCallback.invoke(upSpeed);
   }

   @ReactMethod
   public void getDOWNLINK(Callback successCallback){
       ConnectivityManager cm = (ConnectivityManager) mReactContext.getSystemService(Context.CONNECTIVITY_SERVICE);
       NetworkInfo netInfo = cm.getActiveNetworkInfo();
       NetworkCapabilities nc = cm.getNetworkCapabilities(cm.getActiveNetwork());
       int downSpeed = nc.getLinkDownstreamBandwidthKbps();
       successCallback.invoke(downSpeed);
   }

   @ReactMethod
   public void getLAC(Callback successCallback){
       //‫‪Location‬‬ ‫‪Area‬‬ ‫‪Code‬‬
       GsmCellLocation location = (GsmCellLocation) telephonyManager.getCellLocation();
       successCallback.invoke(location.getLac());
   }

   @ReactMethod
   public void getPLMN(Callback successCallback){
       //MCCMNC - PLMN Number.
       successCallback.invoke(telephonyManager.getSimOperator());
   }

   @ReactMethod
   public void getNetworkType(Callback successCallback){
       switch (telephonyManager.getDataNetworkType()) {
            case TelephonyManager.NETWORK_TYPE_EDGE:
            case TelephonyManager.NETWORK_TYPE_GPRS:
            case TelephonyManager.NETWORK_TYPE_CDMA:
            case TelephonyManager.NETWORK_TYPE_IDEN:
            case TelephonyManager.NETWORK_TYPE_1xRTT:
                // 2G
                successCallback.invoke(2);
                break;
            case TelephonyManager.NETWORK_TYPE_UMTS:
            case TelephonyManager.NETWORK_TYPE_HSDPA:
            case TelephonyManager.NETWORK_TYPE_HSPA:
            case TelephonyManager.NETWORK_TYPE_HSPAP:
            case TelephonyManager.NETWORK_TYPE_EVDO_0:
            case TelephonyManager.NETWORK_TYPE_EVDO_A:
            case TelephonyManager.NETWORK_TYPE_EVDO_B:
                // 3G
                successCallback.invoke(3);
                break;
            case TelephonyManager.NETWORK_TYPE_LTE:
                // 4G
                successCallback.invoke(4);
                break;
            case TelephonyManager.NETWORK_TYPE_NR:
                // 5G
                successCallback.invoke(5);
                break;
            default:
                // unKnown
                successCallback.invoke(0);
        }
   }

   @Override
    public String getName() {
        return "SIM";
    }

    public int hexToDec(String hex) {
        return Integer.parseInt(hex, 16);
    }

    public String decToHex(int dec) {
        return String.format("%x", dec);
    }
}