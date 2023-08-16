import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

const CustomDrawer = ({navigation}) => {
    return (
        <DrawerContentScrollView>
            <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}
                onPress={() => navigation.closeDrawer()}
            >
                <Ionicons name="close" size={24} color="black" style={{marginRight: 10}}/>
                <Text style={{fontSize: 18}}></Text>
                <DrawerItem label="My Profile" onPress={() => navigation.navigate('./')}/>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );

}

export default CustomDrawer;
