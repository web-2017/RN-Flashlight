import {adMobBannerKeys} from "../config/adMobKeys";
import {AdMobBanner} from 'expo-ads-admob'
import {View} from "./Themed";
import React from "react";

export const AdMobBannerComponent = ({bannerError}: any) => {
    return (
        <View style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            width: '100%'
        }}>
            {/*'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner'
            | 'leaderboard' | 'smartBannerPortrait' | 'smartBannerLandscape';*/}
            <AdMobBanner
                bannerSize="largeBanner"
                adUnitID={adMobBannerKeys}
                onDidFailToReceiveAdWithError={bannerError} />
        </View>
    )
}
