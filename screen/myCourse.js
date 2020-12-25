import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animation from 'react-native-animatable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

function MyCourse(props) {

    React.useEffect(() => {
        props.GET_MYCOURSES();
    }, [])

    const renderItem = ({ item }) => {
        const { _id, currentTopicName, course, courseLogo, totalCompletedTopic, totalTopicNo, tutorName, tutorImage, color } = item;
        return (
            <Animation.View style={[styles.list, { backgroundColor: color }]} animation={'fadeInUp'}>
                <View style={styles.listTop}>
                    <Image
                        source={{
                            uri: courseLogo,
                        }}
                        resizeMode={'contain'}
                        style={styles.courseImage}
                    />
                    <View style={styles.listTopRight}>
                        <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: '700', color: '#4f4f4f' }}>{currentTopicName} </Text>
                        <View style={styles.divider}></View>
                        <View style={styles.tutor}>
                            <Image
                                source={{
                                    uri: tutorImage,
                                }}
                                resizeMode={'contain'}
                                style={styles.tutorImage}
                            />
                            <Text style={styles.tutorName}>{tutorName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.listBottom}>
                    <View style={styles.listBottomLeft}>
                        <Text style={{ fontSize: 15, fontWeight: '700' }}>{totalCompletedTopic}/{totalTopicNo}</Text>
                        <Text style={{ color: '#4f4f4f' }}>classes completed</Text>
                    </View>
                    <TouchableOpacity style={styles.listBottomRight} activeOpacity={0.8}
                        onPress={() => props.navigation.navigate('CourseDetail', {
                            data: item
                        })}
                    >
                        <Text style={{ fontSize: 16, color: 'rgb(241,141,144)' }}>View course</Text>
                        <Icon name={'arrow-right'} size={20} color={'rgb(241,141,144)'} />
                    </TouchableOpacity>
                </View>
            </Animation.View>
        )
    }


    return (
        props.myCourses.length > 0 ?
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={props.myCourses}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    maxToRenderPerBatch={3}
                    initialNumToRender={3}
                />
            </SafeAreaView>
            :
            <ActivityIndicator
                size={'large'}
                color={'rgb(241,141,144)'}
                style={styles.container}
            />
    )
}



MyCourse.propTypes = {
    myCourses: PropTypes.arrayOf(PropTypes.object),
    GET_MYCOURSES: PropTypes.func.isRequired,
}


const getCourse = () => {
    return async (dispatch) => {
        await axios.get('https://prodjar-server.herokuapp.com/api/mycourse')
            .then(result => {
                dispatch({ type: 'GET_COURSE_LIST', payload: result.data.data });
            }).
            catch((err) => {
                console.log(err)
            })
    }
}

const mapStateToProps = (state) => {
    return {
        myCourses: state.myCourseReducer.MyCourse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GET_MYCOURSES: () => {
            dispatch(getCourse());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyCourse)





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
    },
    list: {
        width: '100%',
        height: 180,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
        marginTop: 15,
        borderRadius: 5
    },
    listTop: {
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    courseImage: {
        width: 60,
        height: 60
    },
    listTopRight: {
        width: '70%',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    divider: {
        width: '100%',
        borderWidth: 0.2,
        borderColor: '#999'
    },
    tutor: {
        flexDirection: 'row',
        padding: 5
    },
    tutorImage: {
        width: 20,
        height: 20,
        borderRadius: 20
    },
    tutorName: {
        marginLeft: 10,
        fontSize: 14,
    },
    listBottom: {
        height: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    listBottomLeft: {
        width: 130,
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    listBottomRight: {
        width: 120,
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

})
