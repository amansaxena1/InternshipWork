import React, { Component,useEffect,useState } from 'react';
import { View,FlatList, Text, StyleSheet, TextInput,ActivityIndicator,Pressable } from 'react-native';
import SingleItem from '../component/SingleItem';
import Icon from 'react-native-vector-icons/FontAwesome'


const Home = ({navigation}) => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    const srch = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q='+searchText);
            const json = await response.json();
            setData(json);
            } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }
    const EmptyListMessage = ({ item }) => {
        return (
          <Text style={styles.emptyListStyle}>
            No Movie Found
          </Text>
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput onChangeText={(value) => setSearchText(value)} style={styles.input} placeholder={'Enter movie name'} placeholderTextColor="#bfbfbf" ></TextInput>
                <Pressable onPress={srch}>
                    <Icon name="search" color={'#fff'} size={20} />
                </Pressable>
            </View>
            
            {isLoading ? <ActivityIndicator /> :(
                
                <View style={{ marginBottom: 75 }}>
                    <FlatList  
                        numColumns={100}
                        columnWrapperStyle={styles.tagView}
                        scrollEventThrottle={1900} 
                        data={data}
                        keyExtractor={(item, index) => 'key' + index}
                        ListEmptyComponent={EmptyListMessage}
                        renderItem={({ item }) => <SingleItem parentToChild={{ source : item.show.image.medium , name : item.show.name , lang : item.show.language , screen:'SearchDetails'}} navigation={ navigation}/>}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
    },
    input: {
        fontSize: 18,
        color: '#fff',
    },
    heading : {
        color:'#fff'
    },
    tagView: {
        flexWrap: "wrap"
      },
    searchBar:{
        margin: 20,
        display:'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: 'red'
    },
    emptyListStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    }
});

export default Home;