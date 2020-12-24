import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Progress from './progress';
import Schedule from './schedule';
import Tutor from './tutor';
import Course from './course';

const CourseDetail = (props) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Progress  />
            <Schedule />
            <Tutor />
            <Course />
            <TouchableOpacity style={styles.help} activeOpacity={0.8}>
                <Icon name={'face-agent'} style={styles.Icon} size={35} color={'#ffffff'}/>
                <View style={styles.helpBody}>
                    <Text style={{fontSize:13}}>Help {'&'} support</Text>
                    <View style={styles.divider}></View>
                    <Text style={{fontSize:13}}>Reach us if you find issue in this course</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: 130 }}></View>

        </ScrollView>
    )
}

export default CourseDetail;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
    },
    help: {
       justifyContent:'space-evenly',
       alignItems:'center',
       flexDirection:'row',
       marginTop:30,
    },
    Icon:{
        padding:10,
        borderRadius:30,
        backgroundColor:'#000'
    },
    helpBody:{
        width:'70%',
        height:50,
        alignItems:'flex-start',
        justifyContent:'space-around'
    },
    divider: {
        width: '100%',
        borderWidth: 0.2,
        borderColor: '#999',
    },
})
