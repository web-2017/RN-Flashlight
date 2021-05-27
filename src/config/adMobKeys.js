import keys from '../config/keys'
import {Platform} from "react-native";

export const adMobBannerKeys = Platform.select({
    ios: keys.ios.googleIosAdsBanner,
    android: keys.android.googleAndroidAdsBanner
});
