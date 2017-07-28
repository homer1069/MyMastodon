import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    tootEditButton: {
        backgroundColor: '#3399ff',
        borderColor: '#3399ff',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 0
        }
    }
});
