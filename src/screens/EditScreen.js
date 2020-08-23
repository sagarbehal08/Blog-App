import React , {useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen=({navigation})=>{
    const {state}=useContext(Context);
    const blogPost=state.find((blogPosts)=>blogPosts.id===navigation.getParam('id'));
    // console.log(blogPost);
    return <BlogPostForm
    initialValues={{title:blogPost.title,content:blogPost.content}}
    onSubmit={(title,content)=>{
        console.log(title,content);
    }}
    />
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