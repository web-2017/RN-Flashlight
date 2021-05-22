import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet, Alert, View, Text
} from 'react-native';
import {Camera, Constants} from "expo-camera";

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import {i18n} from '../lang'

// Реклама
import {AdMobBannerComponent} from "../components/AdMobBannerComponent";

const TabOneScreen = ()  => {
  
  const [isTorchOn, setIsTorchOn] = useState({flashMode: Constants.FlashMode.torch});
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      
      if (status !== 'granted') {
        return Alert.alert(
            `${i18n.t('errorAlertTitle')}`,
            `${i18n.t('errorAlertMessage')}`
        )
      }
    })();
  },[])


  const bannerError = () => {
    console.log('bannerError')
  }
  
  const _toggleTorchHandler = () => {
      setIsTorchOn(
      {
              flashMode: Constants.FlashMode.torch === isTorchOn.flashMode ?
                  Constants.FlashMode.off :
                  Constants.FlashMode.torch
            }
      )
  }
  
  return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView
            contentContainerStyle={{flex: 1}}
        >
          <Camera
              flashMode={isTorchOn.flashMode}
              onCameraReady={() => {
                  setIsTorchOn({flashMode: Constants.FlashMode.torch})
                }
              }
          />
          
          <View style={styles.iconsContainer}>
            <Text style={styles.title}>{i18n.t(Constants.FlashMode.torch === isTorchOn.flashMode ? `on` : `off`)}</Text>
            <Text onPress={_toggleTorchHandler}>
              {
                Constants.FlashMode.torch === isTorchOn.flashMode ?
    
                    <Ionicons name="flashlight-outline" size={200} color="black" />
                    :
                    <Ionicons name="flashlight" size={200} color="black" />
              }
            </Text>
          </View>
          {/*Реклама баннер*/}
          <AdMobBannerComponent bannerError={bannerError}/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.light.background
  },
  iconsContainer: {
    flex: 1, alignSelf: "center", justifyContent: 'center',
  },
    title: {
        textAlign: 'center', position: "relative", top: -20,
        fontSize: 16
    }
});

export default TabOneScreen
