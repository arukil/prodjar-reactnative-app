import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Progress from './progress';
import Schedule from './schedule';
import Tutor from './tutor';
import Course from './course';

const CourseDetail = (props) => {

    React.useEffect(() => {
        props.GET_MY_COURSE_DETAILS(props.route.params.data.course);
        return ()=>{
            props.DELETE_MY_COURSE_DETAILS();
        }
    }, [])

    return (
        Object.keys(props.courseDetails).length > 0 ?
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Progress data={props.route.params.data} />
                <Schedule data={props.courseDetails.schedule}/>
                <Tutor data={props.courseDetails.tutor}/>
                <Course data={props.courseDetails.courseList}  topic={props.courseDetails.schedule.Topic}/>
                <TouchableOpacity style={styles.help} activeOpacity={0.8}>
                    <Icon name={'face-agent'} style={styles.Icon} size={35} color={'#ffffff'} />
                    <View style={styles.helpBody}>
                        <Text style={{ fontSize: 13 }}>Help {'&'} support</Text>
                        <View style={styles.divider}></View>
                        <Text style={{ fontSize: 13 }}>Reach us if you find issue in this course</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 130 }}></View>
            </ScrollView>
            :
            <ActivityIndicator
                size={'large'}
                color={'rgb(241,141,144)'}
                style={styles.container}
            />
    )
}



CourseDetail.propTypes = {
    courseDetails: PropTypes.object.isRequired,
    GET_MY_COURSE_DETAILS: PropTypes.func.isRequired,
    DELETE_MY_COURSE_DETAILS:PropTypes.func.isRequired,
}


const getCourseDetails = (course) => {
    return async (dispatch) => {
        await axios.get('https://prodjar-server.herokuapp.com/api/coursedetails', { params: { course } })
            .then(result => {
                dispatch({ type: 'GET_COURSE_DETAIL', payload: result.data.data });
            }).
            catch((err) => {
                console.log(err)
            })
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetails: state.courseDetailReducer.courseDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GET_MY_COURSE_DETAILS: (course) => {
            dispatch(getCourseDetails(course));
        },
        DELETE_MY_COURSE_DETAILS:()=>{
            dispatch({type:'DELETE_MY_COURSE_DETAILS' , payload:{} })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)








const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
    },
    help: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    Icon: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#000'
    },
    helpBody: {
        width: '70%',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    divider: {
        width: '100%',
        borderWidth: 0.2,
        borderColor: '#999',
    },
})
