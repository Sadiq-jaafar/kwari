import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const onboardingData = [
  {
    title: 'Welcome to Kwari Online!',
    description:
      'As a Vendor, You can connect with\nvarious range of customers worldwide\nfrom Kwari Online.',
    buttonLabel: 'Get Started',
  },
  {
    title: 'Discover Quality & Affordability',
    description:
      'Explore a wide range of clothing, accessories, and\ntextiles from the comfort of your home.',
    buttonLabel: 'Next',
  },
  {
    title: 'Easy, Fast, and Secure Shopping',
    description:
      'Enjoy seamless navigation, secure payments,\nand fast delivery with Kwari Online.',
    buttonLabel: 'Next',
  },
];

const OnboardingScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState<number>(0);
  const router = useRouter();

  const handleNext = () => {
    if (step < onboardingData.length - 1) {
      setStep(step + 1);
    } else {
      // Final step reached – you can navigate to login or home screen
      router.push("./register")
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Image Placeholder */}
      <View style={styles.imagePlaceholder}>
        <View style={styles.imageMock} />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{onboardingData[step].title}</Text>
        <Text style={styles.description}>{onboardingData[step].description}</Text>

        {/* Pagination */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={step === index ? styles.activeDot : styles.inactiveDot}
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>{onboardingData[step].buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMock: {
    width: 350,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
  },
  textContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#7D7D7D',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 22,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  activeDot: {
    width: 20,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#635BFF',
    marginHorizontal: 3,
  },
  inactiveDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 3,
  },
  button: {
    backgroundColor: '#0C0C1E',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
