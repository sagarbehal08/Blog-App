import React , {useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen=({navigation})=>{
    const {state}=useContext(Context);
    const blogPost=()=>state.filter((blogPost)=>blogPost.id===navigation.getParam('id'));
    return <BlogPostForm/>
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        margin:5,
        marginBottom:15
 
    },
     label:{
         fontSize:20,
         marginBottom:5,
         marginLeft:5
     }
});

export default EditScreen;