import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeaherCard from '../../components/TeacherCard';
import { styles } from './style';

export default function TeacherList(){
    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis"
            />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeaherCard />
                <TeaherCard />
                <TeaherCard />
            </ScrollView>
        </View>
    );
}