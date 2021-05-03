import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {PageHeader} from '../../components/PageHeader';
import TeaherCard, { Teacher } from '../../components/TeacherCard';
import { styles } from './styles';

export default function Favorites(){    
    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('@proffy:favorites').then(response => {
            if(response){
                const favTeachers = JSON.parse(response);
                setFavorites(favTeachers);
            }
        })
    };

    useFocusEffect(() => {
        loadFavorites();
    });

    return(
        <View  style={styles.container}>
            <PageHeader 
                title="Meus proffys favoritos"
            />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {
                    favorites.map((teacher: Teacher) => {
                        return(
                            <TeaherCard 
                                key={teacher.id} 
                                teacher={teacher}
                                favorited
                            />
                        )
                    })
                }

            </ScrollView>
        </View>
    );
}