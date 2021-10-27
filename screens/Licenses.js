import React, { Component } from 'react';
import { View, Text, StyleSheet,BackHandler,Button } from 'react-native';
const Licenses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.exit}>Are You Sure You want to exit</Text>
            <Button title = ' Yes' onPress={ BackHandler.exitApp() }></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    exit: {
        color: '#fff',
        fontSize: 24,
    },
});

export default Licenses;
