import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import SingleItem from '../component/SingleItem';

const Team = ({navigation}) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getMovies = async () => {
        try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const json = await response.json();
            setData(json);
        } catch (error) {
        console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <View style={ styles.box }>
                    <FlatList  
                            numColumns={100}
                            columnWrapperStyle={styles.tagView}
                            scrollEventThrottle={1900} 
                            data={data}
                            keyExtractor={(item, index) => 'key' + index}
                            renderItem={({ item }) => <SingleItem parentToChild={{ source: item.show.image.medium, name: item.show.name, lang: item.show.language,screen:'Details' }} navigation={ navigation}/>}
                    />
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363636',
    },
    text: {
        color: "#fff",
    },
    tagView: {
        display: 'flex',
        flexWrap: "wrap",
        alignItems: 'center'

    },
    box: {
        marginLeft: 2,
    }
});


export default Team;
