import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';

const Tutor = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#2d2d2d', fontWeight: '700', fontSize: 16 }}>Tutor details</Text>
            <View style={styles.body}>
                <View style={styles.Header}>
                    <Image
                        source={{ uri: props.data.image}}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                    <View style={styles.details}>
                        <Text numberOfLines={1} style={{fontSize:16 , fontWeight:'700' , color:'#2d2d2d' , textTransform:'capitalize'}}>{props.data.name}</Text>
                        <Text style={{color:'#4f4f4f'}} numberOfLines={1}>{props.data.desgination}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Icon name='star' size={12} color='gold'/>
                        <Text style={{color:'#fff' , fontSize:13}}>{props.data.rating}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.chatbtn} activeOpacity={0.8}>
                        <Text style={{ fontSize: 14, color:'#fff' }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.assignmentBtn} activeOpacity={0.8}>
                        <Text style={{ fontSize: 14 ,color:'#fff' }}>Track assignment</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.reviewBtn} activeOpacity={0.8}>
                    <Text style={{ color: '#fff', fontSize:14 }}>Rate {'&'} Write review</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


Tutor.propTypes = {
    data: PropTypes.object.isRequired,
}
export default React.memo(Tutor);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
    },
    body: {
        marginTop: 15,
        padding: 14,
        backgroundColor:'rgb(230,250,255)'
    },
    Header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',    
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    details:{
        width:'60%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',    
    },
    rating:{
        width:'15%',
        padding:3,
        backgroundColor:'#000',
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    chatbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '42%',
        padding: 10,
        borderRadius: 2,
        backgroundColor:'#000'
    },
    assignmentBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 10,
        borderRadius: 2,
        backgroundColor:'#000'
    },
    reviewBtn: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding:12,
        backgroundColor:'rgb(0,168,237)',
        borderRadius:4,

    }

})
