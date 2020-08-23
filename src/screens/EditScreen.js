import React , {useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
const EditScreen=({navigation})=>{
    return (
        <View>
            <Text>Edit Screen__{navigation.getParam('id')}</Text>
        </View>
    );
}

const styles=StyleSheet.create({});

export default EditScreen;