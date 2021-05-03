import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import {PageHeader} from '../../components/PageHeader';
import TeaherCard, { Teacher } from '../../components/TeacherCard';
import { styles } from './style';

import { Feather } from '@expo/vector-icons';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';

export default function TeacherList(){
    const [isFiltersVisible,setIsFilterVisible] = useState(false);
    const [subject, setSubject] = useState(''); 
    const [week_day, setWeeDay] = useState('');
    const [time, setTime] = useState('');    
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function handleToggleFiltersVisible(){
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit(){
        loadFavorites();

        await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        }).then(response => {
            setIsFilterVisible(false);
            setTeachers(response.data);
        })
    }

    function loadFavorites(){
        AsyncStorage.getItem('@proffy:favorites').then(response => {
            if(response){
                const favTeachers: Teacher[] = JSON.parse(response);
                const favTeachersIds: number[] = favTeachers.map(t => t.id);
                setFavorites(favTeachersIds);
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff"/>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor="#c1bccc" 
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o dia"
                                    value={week_day}
                                    onChangeText={(text) => setWeeDay(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o Horário"
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {
                    teachers.map((teacher: Teacher) => {
                        return(
                            <TeaherCard 
                                key={teacher.id} 
                                teacher={teacher}
                                favorited={favorites.includes(teacher.id) ? true : false}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}