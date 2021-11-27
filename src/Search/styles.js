import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: '7%',
        backgroundColor: 'white'
    },
    backgroundSearch: {
        padding: '3%',
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5
    },
    lups: {
        width: '10%',
        height: '65%',
        marginRight: '4%'
    },
    textSearch: {
        width: '80%',
        fontFamily: 'Poppins-Light',
        // backgroundColor: 'red'
    },
    backgroundArticleCard: {
        marginTop: '8.5%',
        backgroundColor: 'white',
    },
    imageArticleCard: {
        width: '100%',
        height: 240,
        borderRadius: 15,
    },
    titleArticleCard: {
        padding: '5%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20
    },
    backgroundInfoArticleCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    infoArticleCard: {
        fontFamily: 'Poppins-Regular'
    }
})