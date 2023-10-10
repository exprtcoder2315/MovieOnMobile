import { Image, StyleSheet, Text, View } from "react-native"
import { Star } from "../assests/Images"


const PopularCard = ({ item, imageBaseUrl }) => {

    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 24, marginVertical: 7 }}>

            <Image
                source={{ uri: `${imageBaseUrl}${item?.item?.poster_path}` }}
                style={styles.cardStyle}
                resizeMode='cover'
            />
            <View style={{ marginHorizontal: 16 }}>

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
                        {item?.item?.vote_average + '/10' + " IMDb"}
                    </Text>
                    <Text style={{ ...styles.textRatting }}
                        numberOfLines={2}>
                        {item?.item?.vote_average + '/10' + " IMDb"}
                    </Text>
                </View>

                <Text style={{ ...styles.textRatting, color: "#000", marginTop: 10 }}
                    numberOfLines={2}>
                    <Text style={{ fontWeight: "700" }}>
                        Release Date :
                    </Text>
                    { ` ${item?.item?.release_date}`}
                </Text>
            </View>
        </View>
    )
}

export default PopularCard

const styles = StyleSheet.create({
    cardStyle: {
        height: 128,
        width: 85,
        borderRadius: 5
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        maxWidth: 143,
        lineHeight: 17.57,
    },
    textRatting: {
        fontSize: 12,
        fontWeight: '400',
        color: "#9C9C9C",
        marginLeft: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    }
})