import React from 'react';
import { View, Text, SafeAreaView, Stylesheet  } from "react-native";

const app =() => {
    return(
        <SafeAreaView>
            <View style = {style.container}>
                <Text style= {style.text}>Hola mundo</Text>
            <View/>
        </SafeAreaView>
    )

}

const Style = StyleSheet.create({

    container :{
        flex :1,
        backgrounfColor: rgba(245,240,250,1.0),
        alignItems: 'center',
        justifycontent: 'center',
        width: '100%',
        height:'100%',

    },
    text:{
        color: rgba(0,0,0,1.0),
        frontSize :18,
        Frontweigth:"bold",
        FrontFamily: "Helvetica"
    }

})


export default App;