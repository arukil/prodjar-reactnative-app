import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Schedule = (props) => {
    return (

        <View style={styles.container}>
            <Text style={{ color: '#2d2d2d', fontWeight: '700', fontSize: 16 }}>Your next class schedule</Text>
            <View style={styles.body}>
                <Text style={{ color: '#2d2d2d', fontWeight: '700', fontSize: 16 }}>Basics of components</Text>
                <View style={styles.divider}></View>
                <View style={styles.div1}>
                    <Text style={{ color: '#2d2d2d', fontWeight: '700', fontSize: 15 }}>Topic 4</Text>
                    <View style={styles.tdcontainer}>
                        <View style={styles.time}>
                            <Icon name='alarm-check' size={14} color={'#4f4f4f'} />
                            <Text style={{ color: '#4f4f4f' }}>10.00 Am</Text>
                        </View>
                        <View style={styles.Date}>
                            <Icon name='calendar-blank' size={14} color={'#4f4f4f'} />
                            <Text style={{ color: '#4f4f4f' }}>27 jun</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.div2}>
                    <TouchableOpacity style={styles.copyLinkBtn} activeOpacity={0.8}>
                        <Icon name='content-copy' style={{ padding: 4.8, borderRadius: 20, backgroundColor: 'rgb(125,203,244)' }} />
                        <Text style={{ fontSize: 14, marginLeft: 8, color: 'rgb(125,203,244)' }}>Copy class link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.joinBtn} activeOpacity={0.8}>
                        <Text style={{ fontSize: 14 }}>Join class</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.notifyBtn} activeOpacity={0.8}>
                    <Text  style={{color:'#e91e63' , textDecorationLine:'underline' }}>Notify changes in timings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Schedule;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
    },
    body: {
        marginTop: 15,
        padding: 12,
        borderColor: '#999',
        borderWidth: 0.4,
    },
    divider: {
        width: '100%',
        borderWidth: 0.2,
        borderColor: '#999',
        marginTop: 8
    },
    div1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    tdcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-around'
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%'
    },
    Date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '38%'
    },
    div2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    copyLinkBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '48%',
        padding: 5,
        borderColor: 'rgb(125,203,244)',
        borderWidth: 0.8,
        paddingHorizontal: 5,
        borderRadius: 20
    },
    joinBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '36%',
        padding: 8,
        backgroundColor: 'rgb(253,180,0)',
        borderRadius: 20
    },
    notifyBtn: {
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        marginTop:35
    }

})
