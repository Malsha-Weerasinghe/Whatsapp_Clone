import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoadingPage from '@/components/Pages/LoadingPage/LoadingPage'
import WelcomePage from '@/components/Pages/WelcomePage/WelcomePage';
import { StatusBar } from 'expo-status-bar';
import OTPPage from '@/components/Pages/LoginPage/OTPPage';
import LoginPage from '@/components/Pages/LoginPage/LoginPage';


export default function index() {
  return (
    <View style={styles.container}>
       {/* <LoadingPage/>  */}
      {/* <WelcomePage/> */}
      {/* <OTPPage/> */}
      <LoginPage/>
      {/* <StatusBar style="auto"/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
