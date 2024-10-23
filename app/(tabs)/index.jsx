import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useClerk } from '@clerk/clerk-expo';
import { useNavigation } from 'expo-router';
import { Link } from 'expo-router';

export default function Index() {
  const { signOut } = useClerk();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.replace("index");
    } catch (error) {
      console.log("sign out error", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.signoutNav}>
        <Text style={styles.homeHeading}>Food Photography</Text>
        <View style={styles.signOutbtn}>
          <Button style={styles.btn} mode="outlined" onPress={handleSignOut}>
            <Text style={styles.whiteText}>Sign Out</Text>
          </Button>
        </View>
      </View>

      <View style={styles.homeimageContainer}>
        <Image
          style={styles.homeImage}
          source={require('./../../assets/images/pexels-valeriya-842571.jpg')}
        />
        <View style={styles.overlayContainer}>
          <View style={styles.homeTextContainer}>
            <Text style={styles.largeText}>The Art Of Food</Text>
            <Text style={styles.largeText}>Photography.</Text>
          </View>
          <Link style={styles.viewMoreButton} href="/portfolio">
            <Text style={styles.whiteText}>View More</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signoutNav: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.DEV_MEDIUM,
    justifyContent: 'center',
    position: 'relative',
  },
  homeHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    
  },
  signOutbtn: {
    position: 'absolute',
    right: '5%',
    top: '25%',
  },
  btn: {
    backgroundColor: Colors.DEV_PRIMARY,
    padding: 10,
    borderRadius: 50,
    color: 'white',
    width: '100%',
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
  },
  homeimageContainer: {
    flex: 1,
  },
  homeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  largeText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewMoreButton: {
    backgroundColor: Colors.DEV_LIGHT,
    padding: 10,
    borderRadius: 15,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
});
