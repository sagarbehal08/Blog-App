import React , {useContext} from 'react';
import {Text,View,StyleSheet,FlatList, Button,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 

const IndexScreen=()=>{
    const {state,addBlogPost}=useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={()=>addBlogPost()}/>
            <FlatList
            data={state}
            keyExtractor={(blogPosts)=>blogPosts.title}
            renderItem={({item})=>{
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress={()=>console.log(item.id)}>
                    <Feather name="trash" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
            }}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18

    }
});

export default IndexScreen;