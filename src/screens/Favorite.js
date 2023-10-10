import { Text, View, TouchableOpacity } from "react-native"


const Favorite = () => {
    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text> Test Push Notification</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Favorite