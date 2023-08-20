import {Button, ScrollView, Text, View, Dimensions} from "react-native";
import styles from "./styles";
import {Card} from "react-native-elements";
import React, {useEffect, useState} from "react";
import {useStateContext} from "../../../context/StateContext";

export const PostingList = ({navigation}) => {
    const {getJobPostings} = useStateContext();
    const [postings, setPostings] = useState([])
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        let ignore = false;
        setPostings([]);
        getJobPostings().then(result => {
            if (!ignore) {
                setPostings(result);
            }
        });
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <>
            <View style={{marginTop: 5}}></View>
            <ScrollView>
                <View style={styles.container}>
                    {postings &&
                        postings.map((posting, index) => (
                            <Card containerStyle={{width: screenWidth * 0.95}} key={index}>
                                <Text style={{fontSize: 25, fontWeight: 'bold'}}>{posting?.jobTitle}</Text>
                                <Text style={{fontWeight: 'bold'}}>{posting?.companyName}</Text>
                                <Text style={{fontStyle: 'italic'}}>{posting?.location}</Text>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Job Type: {posting?.jobType}</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop: 10
                                }}>CTC: {posting?.salary?.toLocaleString()} USD</Text>
                                <View style={{marginTop: 10}}>
                                    <Button title={"Details"} onPress={() => {
                                        navigation.navigate('Job Details', {details: posting})
                                    }}/>
                                </View>
                            </Card>
                        ))}
                </View>
            </ScrollView>
        </>
    );
}