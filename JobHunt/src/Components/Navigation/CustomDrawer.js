import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = ({navigation}) => {

return(
<DrawerContentScrollView>
<TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 10 }}
        onPress={() => navigation.closeDrawer()} // Close the drawer when header is clicked
      >
          <Ionicons name="menu-outline" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>Menu</Text>
        <DrawerItem label="Profile" onPress={() => navigation.navigate('./')} />

      </TouchableOpacity>
</DrawerContentScrollView>

);

}

export default CustomDrawer;
