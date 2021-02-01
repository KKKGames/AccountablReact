import React, {useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';



function SliderCustom(props){
    const [value, setValue] = useState([18,120]);
    return (
    <View style={[styles.slider, props.style]}>  
    <Text>{value[0]} and {value[1]}
    </Text>
        <View style= {{justifyContent:"center", alignItems:"center"}}>              
           <MultiSlider
           style={{alignItems:"center"}}
           values={[value[0], value[1]]}
           onValuesChange={(value) => setValue(value)}
           min={18}
           max={120}
           >

           </MultiSlider>
        </View>
     </View>
    );  
}


const styles = StyleSheet.create({
    slider: {
       // position: "absolute",
       // width: 354,
       // height: 48.9,
        //left: 30,
        //top: 586,
       // borderRadius: 12,
       // backgroundColor: "#1C5C84",
        justifyContent: "center",
    },
});
export default SliderCustom;
