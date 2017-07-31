import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 15
    },
    inputText: {
        height: 40,
        width: '50%',
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1
    }
});
