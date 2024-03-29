import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize:32,
        lineHeight: 37,
        maxWidth: 200
    },
    description: {
        marginTop:24,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        lineHeight: 26,
        fontSize: 16 ,
        maxWidth: 240
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})