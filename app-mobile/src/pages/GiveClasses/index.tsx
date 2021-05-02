import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { styles } from './styles';

import giveClassesBg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export default function GiveClasses(){
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBg} 
                style={styles.content}
            >

                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar na nossa plataforma web.
                </Text>

            </ImageBackground>

            <RectButton 
                style={styles.okButton}
                onPress={handleNavigateBack }
            >
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}