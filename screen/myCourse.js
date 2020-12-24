import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animation from 'react-native-animatable';

export default function MyCourse(props) {

    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
        setData([
            {
                id: '1',
                course:'Html',
                topic: 'CSS Setup and selector',
                courseImage: 'https://s3.ap-south-1.amazonaws.com/prodjar.io/html.png',
                currentTopicNo: '3',
                TotalTopicNo: '15',
                tutorName: 'alagappan',
                tutorImage: '',
                color: 'rgb(255,234,234)'

            },
            {
                id: '2',
                topic: 'Yoga-Basics',
                course:'Yoga',
                courseImage: 'https://s3.ap-south-1.amazonaws.com/prodjar.io/yoga.png',
                currentTopicNo: '2',
                TotalTopicNo: '18',
                tutorName: 'gobinath',
                tutorImage: '',
                color: '#dff4fe'

            },
            {
                id: '3',
                topic: 'React Native installation',
                course:'React Native',
                courseImage: 'https://s3.ap-south-1.amazonaws.com/prodjar.io/html.png',
                currentTopicNo: '0',
                TotalTopicNo: '15',
                tutorName: 'suryanarayanan',
                tutorImage: '',
                color: '#ffeed5'

            },

        ])

    }, []);


    const renderItem = ({ item }) => {
        return (
            <Animation.View style={[styles.list, { backgroundColor: item.color }]} animation={'fadeInUp'}>
                <View style={styles.listTop}>
                    <Image
                        source={{
                            uri: item.courseImage,
                        }}
                        resizeMode={'contain'}
                        style={styles.courseImage}
                    />
                    <View style={styles.listTopRight}>
                        <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: '700', color: '#4f4f4f' }}>{item.topic} </Text>
                        <View style={styles.divider}></View>
                        <View style={styles.tutor}>
                            <Image
                                source={{
                                    uri: item.courseImage,
                                }}
                                resizeMode={'contain'}
                                style={styles.tutorImage}
                            />
                            <Text style={styles.tutorName}>{item.tutorName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.listBottom}>
                    <View style={styles.listBottomLeft}>
                        <Text style={{ fontSize: 15, fontWeight: '700' }}>{item.currentTopicNo}/{item.TotalTopicNo}</Text>
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
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={4}
                initialNumToRender={3}
            />
        </SafeAreaView>
    )
}



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
        width: '45%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    listBottomRight: {
        width: ' 42%',
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

})
