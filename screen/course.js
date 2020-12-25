import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';

const Course = (props) => {

    const [viewAll, setViewAll] = React.useState(false);
    const [list, setList] = React.useState([]);


    const renderItem = () => {
      let topic = props.topic;
        return list.map(( title, index) => {
            let IconName = topic === index ? 'youtube' : topic > index ? 'check' : 'lock-outline';
            return (
                <TouchableOpacity key={index} activeOpacity={0.7}
                    style={[styles.list, { backgroundColor: topic === index ? 'rgb(234,73,70)' : '#f3f3f3' }]}>
                    <Icon name={IconName} style={[styles.icon,
                    {
                        backgroundColor: topic === index ? '#ffffff' : '#999'
                        , color: topic === index ? '#rgb(234,73,70)' : '#ffffff'
                    }
                    ]} size={15} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: topic === index ? '#ffffff' : '#2d2d2d' }} >{title}</Text>
                </TouchableOpacity>
            )
        })
    }

    React.useEffect(() => {
        if (!viewAll) {
            let arr = [];
            for (let index = 0; index < 3; index++) {
                arr.push(props.data[index])
            }
            setList(arr);
        }
        else {
            let len = props.data.length;
            let arr = [];
            for (let index = 3; index < len; index++) {
                arr.push(props.data[index])
            }
            setList([...list, ...arr]);
        }

    }, [viewAll])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>Course overview</Text>
            </View>
            <View style={styles.body}>
                {renderItem()}
                <TouchableOpacity style={styles.viewAllBtn} activeOpacity={0.8}
                    onPress={() => setViewAll(!viewAll)}>
                    <Text style={{ color: '#2d2d2d', fontSize: 14 }}>{viewAll ? 'View less' : 'View all'}</Text>
                    <Text>{' '}</Text>
                    <Icon name={viewAll ? 'chevron-up' : 'chevron-down'} size={15} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reviewBtn} activeOpacity={0.8}>
                <Text style={{ color: '#fff', fontSize: 14 }}>Write a review about course</Text>
            </TouchableOpacity>
        </View>
    )
}



Course.propTypes = {
    data: PropTypes.array.isRequired,
    topic:PropTypes.number.isRequired
}


export default Course;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20,
    },
    body: {
        borderWidth: 0.6,
        borderColor: '#999'
    },
    header: {
        alignItems: 'flex-start',
        backgroundColor: 'rgb(58,62,70)',
        padding: 14
    },
    list: {
        padding: 11,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icon: {
        padding: 8,
        borderRadius: 30,
    },
    viewAllBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
        alignItems: 'center'
    },
    reviewBtn: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 12,
        backgroundColor: 'rgb(0,168,237)',
        borderRadius: 4,

    },


})
