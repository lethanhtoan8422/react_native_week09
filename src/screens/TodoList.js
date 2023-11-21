import { ScrollView, StyleSheet, Text, TextInput, View, CheckBox, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import {searchJob, setCheckBox} from "../rtk/features/todoListSlice"

const TodoList = ({route, navigation}) => {
    let dispatch = useDispatch()
    let todoList = useSelector((state) => state.todoListSlice.list)

    const [name, setName] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        setName(route.params.name)
    }, [route.params.name])

    let handlePressAddJob = () => {
        navigation.navigate("AddJob")
    }

    let handlePressUpdateJob = (job) => {
        navigation.navigate("AddJob", {job : job, isUpdate : true})
    }

  return (
    <View style={styles.containerTodoList}>
        <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back-circle-outline' size={30}/>
            </TouchableOpacity>
            <View style={styles.viewUser}>
                <Ionicons name='person-outline' size={30}/>
                <View style={styles.viewUserInfo}>
                    <Text style={{fontSize  :'20px', fontWeight : 'bold'}}>{`Hi ${name}`}</Text>
                    <Text style={{fontSize  :'15px', color : 'gray'}}>Have a great day a head</Text>
                </View>
            </View>
        </View>
        <View style={styles.viewSearch}>
            <Ionicons name='search' size={25} style={{width : '10%', marginLeft : '10px'}}/>
            <TextInput placeholder='Search' style={{height : '100%', width : '90%', outlineWidth : '0px'}}
            value={search}
            onChangeText={setSearch}
            />
        </View>
        <ScrollView style={styles.viewTodoList}>
            {
                todoList.filter(j => j.job.includes(search)).map(job => (
                    <View style={styles.jop}>
                        <View style={styles.viewCheckJob}>
                            <CheckBox
                            value={job.isChecked}
                            onValueChange={() => dispatch(setCheckBox(job))}
                            />
                            <Text style={{fontSize : '18px', fontWeight : 'bold', marginLeft : '10px'}}>{job.job}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handlePressUpdateJob(job)}>
                            <Ionicons name='create-outline' size={30}/>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </ScrollView>
        <TouchableOpacity style={styles.viewAddJob} onPress={handlePressAddJob}>
            <Ionicons name='add-circle' size={50} style={{color : '#2c99ab'}}/>
        </TouchableOpacity>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
    containerTodoList : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : '20px'
    },
    viewHeader : {
        width : '100%',
        height : '10%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    viewUser : {
        width : '70%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    viewSearch : {
        width : '100%',
        height : '60px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderWidth : '1px',
        borderColor : 'black',
        borderRadius : '10px',
        marginBottom  :'40px',
        marginTop : '20px'
    },
    viewTodoList : {
        width : '100%',
    },
    jop : {
        width : '100%',
        height : '50px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderWidth : '1px',
        borderColor : 'black',
        borderRadius : '15px',
        paddingHorizontal : '10px',
        marginBottom : '20px'
    },
    viewCheckJob : {
        width : '70%',
        height : '50px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    viewAddJob : {
        width : '100%',
        height : '50px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : '50px',
        marginBottom : '30px'
    }
})