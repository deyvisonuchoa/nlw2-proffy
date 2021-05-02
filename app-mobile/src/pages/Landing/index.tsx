import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcom from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { RectButton } from 'react-native-gesture-handler';

export default function Landing(){
    const navigation = useNavigation();

    function handleNavigateToGiveClassesPage(){
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPage(){
        navigation.navigate('StudyTabs');
    }

    return (
        <View style={styles.container}>
            <Image 
                source={landingImg}
                style={styles.banner}
            />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPage}
                >
                    <Image source={studyIcom}/>

                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClasses}/>

                    <Text style={styles.buttonText}>
                        Dar aulas
                    </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                {`total de 5 conexões ja realizadas  `}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}