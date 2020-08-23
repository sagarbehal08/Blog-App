import React , {useState,useContext} from 'react';
import {Text,View,StyleSheet,TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm=({navigation})=>{
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('')
    return (<View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
        <Button 
        title="Add Blog Post"
        />
    </View> 
    );
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


export default BlogPostForm;