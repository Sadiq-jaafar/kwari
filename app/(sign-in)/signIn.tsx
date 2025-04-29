import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { useNavigation, useRouter } from 'expo-router';


type RootStackParamList = {
  Welcome: undefined;
  //
};

export default function SignIn() {
  const router = useRouter();

  // Redirect handlers
  const redirectToWelcome = () => router.replace('/welcome');
  const redirectToWelcomeAsGuest = () => router.replace({ pathname: '/welcome', params: { isGuest: 'true' } });
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002E6E" />
      
      <View style={styles.container}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Image 
            source={images.logoWite2} 
            resizeMode="contain"
            style={styles.logoImage}
          />
     
        </View>

        {/* Middle Content */}
        <View style={styles.middleContent}>
          <Text style={styles.tagline}>Shop and Resell Quality</Text>
          <Text style={styles.tagline}>Product with Kwari Online</Text>
        </View>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity 
          style={styles.primaryButton}
          onPress={redirectToWelcomeAsGuest}>
            <Text style={styles.primaryButtonText}>Create an account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={redirectToWelcome}>
            <Text style={styles.secondaryButtonText}>Continue as a Guest</Text>
          </TouchableOpacity>
          <View style={styles.versionCont}>

          <Text style={styles.versionText}>Version 0.01</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#002E6E',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoImage: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#D0D0D0',
    marginTop: 8,
  },
  middleContent: {
    alignItems: 'center',
    marginVertical: 40,
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    maxWidth: 300,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#002E6E',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  secondaryButton: {
    padding: 12,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  versionCont: {
    width: '100%',      
    alignItems: 'flex-end',
    paddingRight: 20,  
    marginTop: 40,
  },
  versionText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
});