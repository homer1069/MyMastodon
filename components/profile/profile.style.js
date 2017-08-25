import { StyleSheet } from 'react-native';

export const profilePageStyle = StyleSheet.create({
    profileHeader: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#939497'
    },
    avatar: {
        height: 100,
        width: 100,
        marginTop: 20,
        marginBottom: 20
    },
    username: {
        fontWeight: 'bold'
    },
    headerText: {
        color: 'white'
    },
    statusBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1
    }
});
