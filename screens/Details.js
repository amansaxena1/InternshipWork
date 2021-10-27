import React,{useEffect,useState} from 'react'
import { ScrollView,View, Text,StyleSheet,Dimensions,Image,ActivityIndicator } from 'react-native'

const Details = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [summary, setSummary] = useState('');
    const [url, setUrl] = useState('');
    const movieName = route.params.name;

    const removeTags=(str)=> {
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    const getMovies = async () => {
        try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q='+movieName);
        const json = await response.json();
            setData(json);
            if (json.length != 0)
            {
                var s = json[0].show.summary;
                setSummary(removeTags(s));
                setUrl(String(json[0].show.image.medium));
            }
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
                <View style={styles.container}>
                <Image
                    source={{
                        uri: url,
                    }}
                    style={styles.movieImage}
                    />
                    <Text style={styles.movieName} >{data[0].show.name}</Text>
                <Text style={ styles.movielang }>{data[0].show.language}</Text>
                    <ScrollView style={ styles.sum}>
                    <Text style={styles.moviedetail}>{summary}</Text>
                </ScrollView>
            </View>
            )}
        </View>
    )
}

export default Details
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create(  
    {  
        container: {
            backgroundColor: '#525252',
            alignItems: 'flex-start',
            width: deviceWidth,
            height: deviceHeight,
            padding: deviceHeight * 0.01,
            alignSelf: 'center',
        },
        movieImage: {
            width: deviceWidth * 0.4,
            height: deviceHeight * 0.30,
            marginBottom: 15,
            marginLeft: 10,
            borderRadius: 5,
        },
        movieName: {
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 30,
            marginBottom: 5,
            marginLeft:10,
        },
        movielang: {
            color: 'red',
            fontSize: 12,
            marginBottom: 15,
            marginLeft:10,
        },
        moviedetail: {
            color: '#fff',
            fontSize: 15,
            marginBottom: 15,
            marginLeft:10,
        },
        sum: {
            marginBottom: 40,
        }
    });
