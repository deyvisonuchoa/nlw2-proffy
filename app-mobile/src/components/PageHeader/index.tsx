import React, { ReactNode } from 'react';
import { Text, View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { styles } from './styles';

import backImage from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';
import { useNavigation, useNavigationState } from '@react-navigation/core';

interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    headerRight,
    children,
  }) => {
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate('Landing');
    }

    return(
        <View  style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backImage} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={logoImage} resizeMode="contain"/>
            </View>
            
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>

                {headerRight}
            </View>

            {children}
        </View>
    );
}