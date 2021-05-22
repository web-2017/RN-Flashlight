import React from 'react'
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import {i18n} from '../lang'
import {Link} from "@react-navigation/native";

export const Info = () => {
    return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View>
                        <Link to='https://play.google.com/store/apps/developer?id=Mario+Magomedov'>
                            asd
                        </Link>
                        {/*<Text style={styles.text}>*/}
                        {/*    {i18n.t('details.title')}*/}
                        
                        {/*</Text>*/}
                        <iframe id="inlineFrameExample" title="Inline Frame Example" width="500" height="400" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"> </iframe>
    
                    </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.dark.background,
        paddingHorizontal: 20
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: Colors.dark.text,
        paddingVertical: 10
    }
})
