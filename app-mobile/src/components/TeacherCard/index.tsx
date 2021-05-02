import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export default function TeaherCard( ){

    return(
        <View  style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/deyvisonuchoa.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Deyvison</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                teste
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                       {/* { <Image source={heartOutlineIcon}/>} */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}