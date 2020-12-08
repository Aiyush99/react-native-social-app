import React,{createContext,useEffect,useState} from "react";
import fire from "../config";
import Firebase from "../config";
export const AuthContext = createContext();
import * as Google from 'expo-google-app-auth';

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)

return(
    <AuthContext.Provider
     value={{
         user,
         setUser,

         login:async(email,password)=>{
             try{
                await fire.auth().signInWithEmailAndPassword(email,password)
             } 
             catch(e){
                  console.log(e)
             }


         },
         register:async(email,password)=>{
            try{
               await fire.auth().createUserWithEmailAndPassword(email,password);
            } 
            catch(e){
                 console.log(e)
            }


        },

        logout:async()=>{
            try{
               await fire.auth().signOut();
            } 
            catch(e){
                 console.log(e)
            }


        },

         signInWithGoogleAsync:async() =>{
            try {
              const result = await Google.logInAsync({
                 
                androidClientId: '27577011425-oqh5ng7k8leq5lgruk76qkci8km0kcrr.apps.googleusercontent.com',
                // iosClientId: '27577011425-11gdtcudrb8mo18u5lg2867plboobehp.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
              });
          
              if (result.type === 'success') {
                return result.accessToken;
              } else {
                return { cancelled: true };
              }
            } catch (e) {
              return { error: true };
            }
          }

     }}
    >
        {children}
    </AuthContext.Provider>
)
}