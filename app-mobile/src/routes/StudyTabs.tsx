import React from 'react';
import TeacherList from '../pages/TeacherList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyTabs(){
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height:20
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize:13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#FAFAFE',
                activeBackgroundColor: '#EBEBF5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options= {{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? 'ios-easel' : 'ios-easel-outline' }
                            size={size} 
                            color={focused ? '#8257e5' : color} 
                        />
                    )
                    
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options= {{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? 'ios-heart' : 'ios-heart-outline'} 
                            size={size} 
                            color={focused ? 'red' : color} 
                        />
                    )
                }}
            />
        </Navigator>
    );
}