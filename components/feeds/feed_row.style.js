import { StyleSheet } from 'react-native'

export const feedRowStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 10
    },
    contentView: {
        flex: 1,
        flexDirection: 'column'
    },
    contentHeaderView: {
        flex: 1,
        flexDirection: 'row'
    },
    contentHeaderViewUsername: {
        fontWeight: 'bold'
    },
    creationDate: {
        marginLeft: 5
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },
    icon: {
        marginRight: 15
    }


});