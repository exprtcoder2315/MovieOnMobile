import { ActivityIndicator, View } from "react-native"


const CustomLoder=()=>{
    return (
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <ActivityIndicator size="small" color="#0000ff"/>
       </View>
        
        )

}
export default CustomLoder