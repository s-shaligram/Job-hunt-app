import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = ({navigation}) => {
const [userName,setUserName] = useState("Jhon Doe")
const [email,setEmail] =useState("jhoneDoe@example.com")
const [profileType, setProfileType] = useState("Recruiter");
return(
<DrawerContentScrollView>
<TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 10 }}
        onPress={() => navigation.closeDrawer()} // Close the drawer when header is clicked
      >
          <Ionicons name="menu-outline" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>
<View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 2,marginLeft:10 }}>
  <Image
    source={require("../../../assets/default_profile_avatar.png")}
    style={{
      width: 120,
      height: 120,
      borderRadius: 60,
    }}
  />
  <TouchableOpacity
    onPress={() => { alert("clicked")}}
    style={{
      position: 'absolute',
      bottom: 0,
      left:80,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 5,
    }}
  >
    <Ionicons name="pencil-outline" size={24} color="black" />
  </TouchableOpacity>
</View>
</DrawerContentScrollView>

);

}

export default CustomDrawer;
