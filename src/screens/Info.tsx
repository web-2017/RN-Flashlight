import React from 'react'
import {Linking, ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import {i18n} from '../lang'
import {allAppsUrl} from "../api/keys";

export const Info = () => {
    
    const handleClick = () => {
        Linking.openURL(allAppsUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(allAppsUrl);
                } else {
                    return console.log("Don't know how to open URI: " + allAppsUrl);
                }
            })
    }
    return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.text} onPress={handleClick}>{i18n.t('linkToApps')} android</Text>
                   
                </View>
                <Text style={{
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 20,
                    margin: 'auto'
                }}>Mario Dev</Text>
            </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.dark.background,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: 'blue',
    }
})
