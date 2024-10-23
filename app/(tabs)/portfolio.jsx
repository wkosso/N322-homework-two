import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

export default function Portfolio() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.portTitleContainer}>
        <Text style={styles.portTitle}>Portfolio</Text>
      </View>

      <View style={styles.portimgContainer}>
        <ImageBackground
          source={require('./../../assets/images/pexels-robinstickel-70497.jpg')}
          resizeMode="cover"
          style={styles.portImage}
        >
          <Text style={styles.portimgText}>EDITORIAL</Text>

          <Link style={styles.viewButton} href="#">
            <Text style={styles.viewButtonText}>View</Text>
          </Link>
        </ImageBackground>
      </View>

      <View style={styles.portimgContainer}>
        <ImageBackground
          source={require('./../../assets/images/pexels-ozgomz-1667427.jpg')}
          resizeMode="cover"
          style={styles.portImage}
        >
          <Text style={styles.portimgText}>FOOD & SERVE</Text>

          <Link style={styles.viewButton} href="#">
            <Text style={styles.viewButtonText}>View</Text>
          </Link>
        </ImageBackground>
      </View>

      <View style={styles.portimgContainer}>
        <ImageBackground
          source={require('./../../assets/images/pexels-solodsha-8605817.jpg')}
          resizeMode="cover"
          style={styles.portImage}
        >
          <Text style={styles.portimgText}>BAKED GOODS</Text>

          <Link style={styles.viewButton} href="#">
            <Text style={styles.viewButtonText}>View</Text>
          </Link>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center', 
  },

  portTitleContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.DEV_MEDIUM,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  portTitle: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
  },

  portimgContainer: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  portImage: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  portimgText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

  viewButton: {
    backgroundColor: Colors.DEV_LIGHT,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewButtonText: {
    fontSize: 18,
    color: 'white',
  },
});
