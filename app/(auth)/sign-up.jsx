import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput,Button } from 'react-native-paper';
import { useSignUp } from '@clerk/clerk-expo';
import {useRouter,Link} from "expo-router";

export default function SignUp() {
const{signUp, setActive, isLoaded} = useSignUp();
const router = useRouter();
  const [pendingVerification, setPendingVerification] = React.useState();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const [code, setCode] = React.useState();

const onSignUp = async () =>{
  if(!isLoaded){
    return;
  }

  try{
    await signUp.create({
      emailAddress,
      password,
    })
   
    await signUp.prepareEmailAddressVerification({
      strategy: "email_code",
    });

    setPendingVerification(true);
  }catch(err){
    console.error("Sign up err", err +" ", JSON.stringify(err, null,2));
  }
}

const onVerifyEmail = async () =>{
if(!isLoaded){
  return;
}


try{
  const competeSignUP = await signUp.attemptEmailAddressVerification({
    code,
  });

  if(competeSignUP.status === "complete"){

    await setActive({
      session: competeSignUP.createdSessionId,
    });
   
    router.push("/(tabs)");
 
   } else{
console.error(JSON.stringify(competeSignUP,null,2));
    }
  } catch(err) {
    console.error("Sign up err",  err +" ", JSON.stringify(err, null,2));
  }
};

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <>
         <TextInput 
         autoCapitalize="none"
         value={emailAddress}
         keyboardAppearance="email-address"
         placeholder="Email address"
         onChangeText={setEmailAddress}
         />


<TextInput 
         autoCapitalize="none"
         value={password}
        
         placeholder="Password"
         secureTextEntry={true}
         onChangeText={setPassword}
         />

         <Button mode="outlined" onPress={onSignUp}>
          <Text>Sign up</Text>
          </Button>
        </>

      )}
      
      {pendingVerification && (
        <>
        <TextInput 
         autoCapitalize="none"
         value={code}
        
         placeholder="Code..."
         keyboardType="numeric"
         onChangeText={setCode}
         />

         <Button mode="outlined" onPress={onVerifyEmail}>
          <Text>Verify Email</Text>
          </Button>
        </>
        

      )}
      
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    display: "flex",
    flex: 1,
  }
})