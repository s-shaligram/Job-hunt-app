
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';


const resumes = [
    { id: 1, title: 'Resume 1', details: 'Details for Resume 1...' },
    { id: 2, title: 'Resume 2', details: 'Details for Resume 2...' },
    // Add more resumes here
  ];


  const ResumeList = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={resumes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resumeItem}
              onPress={() => navigation.navigate('ResumeDetail', { resume: item })}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  export default ResumeList; 