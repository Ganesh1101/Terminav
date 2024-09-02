import React from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const stationData = [
  {
    id: '1',
    stationName: 'Nellore Station',
    address: '123 Main St, City A',
    platforms: 5,
    imageUrl: require('../images/nlr.png'), 
    lat:14.4618,
    lng:79.9895// Replace with a real image path
  },
  {
    id: '2',
    stationName: 'Secunderabad Station',
    address: '456 Elm St, City C',
    platforms: 7,
    imageUrl: require('../images/sec.jpeg'),
    lat:17.4337,
    lng:78.5016// Replace with a real image path
  },
  {
    id: '3',
    stationName: 'Mumbai Station',
    address: '123 Main St, City A',
    platforms: 5,
    imageUrl: require('../images/train1.png'), 
    lat:18.9696,
    lng:72.8193// Replace with a real image path
  },
  {
    id: '4',
    stationName: 'Dhaka Station',
    address: '456 Elm St, City C',
    platforms: 7,
    imageUrl: require('../images/train2.png'),
    lat:23.8159,
    lng:90.4105// Replace with a real image path
  },
  {
    id: '5',
    stationName: 'Mumbai LTT Station',
    address: '456 Elm St, City C',
    platforms: 7,
    imageUrl: require('../images/TermiNAV[2].png'),
    lat:19.0697,
    lng: 72.8920// Replace with a real image path
  },
  // Add more station data as needed
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        console.log('map');
        navigation.navigate('Map360View', { lat:item.lat, lng:item.lng });
      }}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.stationName}>{item.stationName}</Text>
        <Text style={styles.address}>Address: {item.address}</Text>
        <Text style={styles.platforms}>Platforms: {item.platforms}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }} style={styles.socialIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Stations..."
          placeholderTextColor="#999"
        />
      </View>
      <FlatList
        data={stationData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A42BF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  socialIcon:{
    width: 24,
    height: 24,
   padding: 10,
   paddingRight:20
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
  },
  details: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7A42BF', // Purple color for text
  },
  address: {
    fontSize: 14,
    color: '#800080', // Purple color for text
    marginTop: 5,
  },
  platforms: {
    fontSize: 14,
    color: '#800080', // Purple color for text
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HomeScreen;
