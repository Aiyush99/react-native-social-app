import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,Image,TouchableOpacity} from 'react-native';

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({selected})=>{
   let backgroundColor;

   backgroundColor = selected ? "rgba(0,0,0,0.8) " : "rgba(0,0,0,0.3)";

   return(
       <View
       style={{
           width:5,
           height:5,
           marginHorizontal:3,
           backgroundColor
       }}
       />
   )
}


const Skip = ({...props})=>(
  <TouchableOpacity
  style={{marginHorizontal:12}}
  {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
</TouchableOpacity>
)

const Next = ({...props})=>(
  <TouchableOpacity
  style={{marginHorizontal:12}}
  {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
</TouchableOpacity>
)



const Done = ({...props})=>(
   <TouchableOpacity
       style={{marginHorizontal:12}}
       {...props}
       >
           <Text style={{fontSize:16}}>Done</Text>
   </TouchableOpacity>
)


const OnBoardingScreen = ({navigation})=>{
  return(
<Onboarding
SkipButtonComponent={Skip}
NextButtonComponent={Next}
DoneButtonComponent={Done}
DotComponent={Dots}
bottomBarHeight={50}

onSkip={()=>navigation.replace("Login")}
onDone={()=>navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Onboarding 1',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
   
  ]}
/>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


  
