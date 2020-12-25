import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#4f4f4f' }}>{'Html'}</Text>
            <Progress.Bar
                progress={(props.data.totalCompletedTopic / props.data.totalTopicNo)}
                width={300}
                color={'rgb(59,186,141)'}
                backgroundColor={'#f3f3f3'}
                borderColor={'#fff'}
                height={10}
                style={{ marginTop: 10 }}
            />
            <View style={styles.progressBarBottom}>
                <Text style={{ color: '#2d2d2d', fontWeight: '700' }}>{((props.data.totalCompletedTopic / props.data.totalTopicNo) * 100).toFixed(0)}% completed</Text>
                <Text style={{ color: '#2d2d2d', fontWeight: '700' }}>{props.data.totalCompletedTopic}/{props.data.totalTopicNo} classes</Text>
            </View>
            <View style={styles.progressDetail}>
                <Text style={{ color: '#2d2d2d' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
            </View>
        </View>

    )
}


ProgressBar.propTypes = {
    data: PropTypes.object.isRequired,
}

export default  React.memo(ProgressBar);



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
