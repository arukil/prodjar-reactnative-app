import React from 'react'
import { StyleSheet, Text, View  , ScrollView} from 'react-native'
import * as Progress from 'react-native-progress';

const ProgressBar = (props) => {
    return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#4f4f4f' }}>{'Html'}</Text>
                <Progress.Bar
                    progress={0.3}
                    width={300}
                    color={'rgb(59,186,141)'}
                    backgroundColor={'#f3f3f3'}
                    borderColor={'#fff'}
                    height={10}
                    style={{ marginTop: 10 }}
                />
                <View style={styles.progressBarBottom}>
                    <Text style={{ color: '#2d2d2d', fontWeight: '700' }}>0.3% completed</Text>
                    <Text style={{ color: '#2d2d2d', fontWeight: '700' }}>3/15 classes</Text>
                </View>
                <View style={styles.progressDetail}>
                    <Text style={{ color: '#2d2d2d' }}>
                        React Native is an open-source mobile application
                        framework created by Facebook, Inc. It is used to develop applications
                        for Android , iOS.
                    </Text>
                </View>
            </View>
           
    )
}

export default ProgressBar;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 10,
        padding: 12,
        borderColor: '#999',
        borderWidth: 0.4,
    },

    progressBarBottom: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressDetail: {
        marginTop: 10,
    },

})
