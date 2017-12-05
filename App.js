import React from 'react';

import {
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

import MapView from 'react-native-maps';

console.disableYellowBox = true;

const NYC = {
    latitude: 40.72596999999915,
    longitude: -73.99426968220215,
    latitudeDelta: 0.005,
    longitudeDelta: 0.001,
};

export default class TouchablesApp extends React.Component {
    state = { hasVisited: false };

    onTouchableHighlightPress = () => {
        console.log('Pressed');
    };

    onTouchableWithoutFeedbackPress = () => {
        this.setState( (state, props) => ({ hasVisited: !state.hasVisited }));
    };

    render() {
        const { hasVisited } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar style={styles.header}
                           barStyle="light-content"/>
                <MapView style={styles.map}
                         region={NYC}/>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image style={styles.image}
                               source={require('./assets/hamburger.png')}/>
                    </TouchableOpacity>
                    <TouchableHighlight style={styles.touchableHighlight}
                                        onPress={this.onTouchableHighlightPress}
                                        underlayColor="#fafafa"
                    >
                        <Image style={styles.compass}
                               source={require('./assets/compass.png')}/>
                    </TouchableHighlight>
                </View>
                <TouchableWithoutFeedback onPress={this.onTouchableWithoutFeedbackPress}>
                    {hasVisited
                        ? <Image style={styles.toggledImage}
                                 source={require('./assets/visited.png')}/>
                        : <Image style={styles.toggledImage}
                                 source={require('./assets/unvisited.png')}/>
                    }
                </TouchableWithoutFeedback>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    header: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
        backgroundColor: 'transparent',
        padding: 10
    },
    image: {
        height: 42,
        width: 42,
    },
    compass: {
        height: 20,
        width: 20,
    },
    touchableHighlight: {
        padding: 5,
        backgroundColor: '#f5f5dc',
        borderRadius: 5,
        borderColor: 'rgba(10, 10, 10, 0.35)',
        borderWidth: 1
    },
    toggledImage: {
        height: 24,
        width: 24,
    }
});





