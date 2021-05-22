import keys from '../config/keys'
import {Platform} from "react-native";

const {
    googleAndroidAdsBanner, googleIosAdsBanner
} = keys


export const adMobBannerKeys = Platform.select({
    ios: googleIosAdsBanner,
    android: googleAndroidAdsBanner
});
