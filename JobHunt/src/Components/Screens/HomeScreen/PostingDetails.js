import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {Card} from "react-native-elements";
import React from "react";

export const PostingDetails = ({ route, navigation }) => {
  const { details } = route.params;

    return (
        <ScrollView>
            <View>
                <Card containerStyle={{marginBottom: 15}}>
                    <View style={{marginBottom: 20}}><Button onPress={() => navigation.goBack()} title={"Apply"}></Button></View>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>{details?.jobTitle}</Text>
                    <Text style={{fontWeight: 'bold'}}>{details?.companyName}</Text>
                    <Text style={{fontStyle: 'italic'}}>{details?.location}</Text>
                    <Text style={{marginTop: 20, fontWeight: 'bold'}}>CTC: {details?.salary.toLocaleString()} USD</Text>
                    <Text style={{marginTop: 20, fontWeight: 'bold'}}>Job Type: {details?.jobType}</Text>
                    <Text style={{marginTop: 20}}>{details?.jobDescription}</Text>
                    <Text style={{marginTop: 20, fontWeight: 'bold'}}>Contact Details:</Text>
                    <Text>{details?.contactDetails}</Text>
                    <View style={{marginTop: 20}}><Button onPress={() => navigation.goBack()} title={"Apply"}></Button></View>
                </Card>
            </View>
        </ScrollView>
    );
}
