import { Image, StyleSheet, Text, View } from "react-native"
import { Star } from "../assests/Images"


const NowShowingCard = ({ item, imageBaseUrl }) => {

    return (
        <View style={{ }}>

            <Image
                source={{ uri: `${imageBaseUrl}${item?.item?.poster_path}` }}
                style={styles.cardStyle}
                resizeMode='cover'
            />

            <Text style={{ ...styles.text }}
                numberOfLines={2}>
                {item?.item?.original_title}
            </Text>
            <View style={styles.row}>

                <Image
                    source={Star}
                    resizeMode='contain'
                />
                <Text style={{ ...styles.textRatting }}
                    numberOfLines={2}>
                    {item?.item?.vote_average +'/10'+ " IMDb"}
                </Text>
            </View>
        </View>
    )
}

export default NowShowingCard

const styles = StyleSheet.create({
    cardStyle: {
        height: 212,
        width: 143,
        borderRadius: 5
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        maxWidth: 143,
        lineHeight: 17.57,
        marginTop: 11
    },
    textRatting:{
        fontSize: 12,
        fontWeight: '400',
        color:"#9C9C9C",
        marginLeft:5
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:8
    }
})