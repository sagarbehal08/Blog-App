import React , {useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen=({navigation})=>{
    const {state}=useContext(Context);
    const blogPost=state.find((blogPost)=>blogPost.id===navigation.getParam('id'))
    return <Text>
        {blogPost.title}--{blogPost.id}
    </Text>
}

const styles=StyleSheet.create({});


export default ShowScreen;