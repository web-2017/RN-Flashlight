/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ColorSchemeName, StyleSheet} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import {i18n} from '../lang'
import { Ionicons } from '@expo/vector-icons';
import {Info} from "../screens/Info";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
            title: `${i18n.t('title')}`,
                headerShown: true,
                headerStyle: {
                    backgroundColor: Colors.dark.background,
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor: Colors.light.text,
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontSize: 20,
                },
                headerRight: () => (
                    <Ionicons
                        name="information-circle-outline" size={24} color="black"
                        style={{marginHorizontal: 20}}
                        onPress={() => {
                            navigation.navigate('Info')
                        }}
                    />
                )
        })}>

      <Stack.Screen name="Root" component={BottomTabNavigator}/>
      <Stack.Screen name='Info' component={Info}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: "row",
        width: 40,
        justifyContent: "space-between",
        marginLeft: 10
    }
})
