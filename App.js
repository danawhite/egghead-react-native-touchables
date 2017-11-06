import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
} from 'react-native';

console.disableYellowBox = true;

export default class App extends React.Component {
    state = { taps: [] };

    onPress = () => {
        console.log('Clicked.');
    }

    onPressWithoutFeedback = () => {
        this.setState(state => ({
            taps: [...state.taps, state.taps.length +1 ]
        }))
    }


    render() {
        const { taps } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchableOpacity}
                                  onPress={this.onPress}>
                    <Text style={styles.buttonLabel}>TouchableOpacity</Text>
                </TouchableOpacity>
                <TouchableHighlight style={styles.buttonContainer}
                                    onPress={this.onPress}
                                    underlayColor="#eeed33">
                    <Text style={styles.buttonLabel}>TouchableHighlight</Text>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={this.onPressWithoutFeedback}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.tapsContainer}>
                    {taps && taps.map((tap, index) => {
                        return <Text key={index}>Tap #{tap}</Text>
                    })}
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: 'silver',
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    },
    touchableOpacity: {
        backgroundColor: 'indianred',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'silver',
        padding: 20,
        marginTop: 10,
    },
    buttonLabel: {
        textAlign: 'center',
        color: 'white'
    },
    tapsContainer: {
        flex: 1,
        flexDirection: 'column'
    }

});






