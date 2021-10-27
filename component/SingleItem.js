import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions,TouchableOpacity } from 'react-native'

const SingleItem = ({ parentToChild,navigation }) => {
    var s = String(parentToChild.source);
    return (
        <TouchableOpacity onPress={() => navigation.navigate(parentToChild.screen,{name: parentToChild.name})} style={styles.container}>
            <Image
                source={{
                    uri: s,
                    cache: 'only-if-cached'
                }}
                style={styles.movieImage}
                />
            <Text style={styles.movieName}>{parentToChild.name}</Text>
            <Text style={ styles.otherdetail }>{parentToChild.lang}</Text>
        </TouchableOpacity>
    )
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        width: deviceWidth * 0.49,
        padding: deviceWidth * 0.03,
    },
    movieName: {
        color: '#fff',
    },
    otherdetail: {
        color: '#fff',
        fontSize: 10,
    },
    movieImage: {
        width: deviceWidth * 0.4,
        height: deviceHeight * 0.30, 
    }
});

export default SingleItem
