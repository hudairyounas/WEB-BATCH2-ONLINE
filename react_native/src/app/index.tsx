import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '@/components/Header'

const Main = () => {
  return (
    <View>
      <Text style={{color:"red", fontSize:40, fontWeight:"bold", textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center", flex: 1,backgroundColor:"black"}}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
       {Platform.OS === "android" ? "Android" : "Web"}  */}
       <Header />

      </Text>
     
    </View>
  )
}

export default Main