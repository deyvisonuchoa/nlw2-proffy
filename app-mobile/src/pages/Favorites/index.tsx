import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeaherCard from '../../components/TeacherCard';
import { styles } from './styles';

export default function Favorites(){
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
                <TeaherCard />
                <TeaherCard />
                <TeaherCard />
            </ScrollView>
        </View>
    );
}