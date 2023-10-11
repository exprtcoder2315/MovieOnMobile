import { Text, View, TouchableOpacity } from "react-native"
import { LocalNotification, ScheduledNotification } from "../common/LocalNotification"


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
                <Text style={{color:'#000'}} onPress={()=>LocalNotification()}> Test Push Notification instant </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:50
                }}
            >
                <Text style={{color:'#000'}} onPress={()=>ScheduledNotification()}> Test Push Notification after 30 seconds</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Favorite