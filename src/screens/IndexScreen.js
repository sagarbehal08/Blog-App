import React , {useContext} from 'react';
import {Text,View,StyleSheet,FlatList, Button,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 

const IndexScreen=({navigation})=>{
    const {state,addBlogPost, deleteBlogPost}=useContext(Context);

    return (
        <View>
            <FlatList
            data={state}
            keyExtractor={(blogPosts)=>blogPosts.title}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}> 
                    <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                    <Feather name="trash" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
            }}
            />
        </View>
    )
}

IndexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <Feather name="plus" size={30} color="black" />
        </TouchableOpacity>
    };
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