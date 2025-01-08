import React, { Component } from "react";
import { Text, StyleSheet, View, Button, StatusBar, Platform, SafeAreaView, ActivityIndicator } from "react-native";
import { WebView } from 'react-native-webview';

const HomeScreen = (props) => {

  return (<View style={styles.container}>
          <WebView 
            source={{ uri: 'https://gigabook.com/' }} 
            startInLoadingState={true}
            renderLoading={() => <ActivityIndicator size="large" />}
             />
          </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight * 0.85) : 0,
    height: "100%"
  }
});

export default HomeScreen;
