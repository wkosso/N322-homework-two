import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';


export default function Portfolio() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.portTitleContainer}>
        <Text style={styles.portTitle}>About</Text>
      </View>

      <View style={styles.aboutimgcontainer}>
        <ImageBackground
          source={require('./../../assets/images/pexels-andre-furtado-43594-1264210.jpg')}
          resizeMode="cover"
          style={styles.aboutimage}
        />
      </View>

      <View style={styles.abouttextcontainer}>
        <View>
          <Text style={styles.aboutTitle}>ABOUT JADE</Text>
          <Text style={styles.abouttext}>
            Welcome! I'm Jade, a passionate food photographer capturing the beauty of every dish.
            With a keen eye for detail and a love for culinary art, I bring food to life through
            vibrant, mouthwatering images. Let's turn your flavors into unforgettable visuals!
          </Text>
        </View>

        <View>
          <Text style={styles.aboutTitle}>Education:</Text>
          <Text style={styles.abouttext}>
            I hold a degree in Visual Arts and Photography, where I developed my passion for
            creativity and visual storytelling. Through hands-on experience and continuous learning,
            I've honed my skills in lighting techniques, composition, and food styling. This
            educational background drives my approach to food photography, blending artistry with
            technical expertise.
          </Text>
        </View>

        <View>
          <Text style={styles.aboutTitle}>Awards</Text>
          <Text style={styles.abouttext}>
            I'm honored to have been recognized for my work in food photography, including Best Food
            Photographer at the 2023 Culinary Visual Arts Awards and a nomination for Excellence in
            Food Styling at the Creative Photography Summit. These acknowledgments reflect my
            commitment to capturing the essence of every dish with precision and creativity.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },

  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
   
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

  aboutimgcontainer: {
    width: '100%', 
    height: 300,
    marginBottom: 20,
  },

  aboutimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  abouttextcontainer: {
    width: '100%', 
    padding: 10,
  },

  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },

  abouttext: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
});
