
import React, { useState ,useEffect} from 'react';
import { View, Text, FlatList, } from 'react-native';
import styles from './styles';
import SelectionTile from '../SelectionTile/selectiontile';
import { auth,db } from '../../Database/dbConfig';
import { collection,getDocs,setDoc, doc, query, where, deleteDoc } from "firebase/firestore";





const resumes = [
    { id: 1, title: 'Resume 1', details: 'Details for Resume 1...' },
    { id: 2, title: 'Resume 2', details: 'Details for Resume 2...' },
    // Add more resumes here
  ];




 const ResumeList = ({ navigation }) => {
 useState [resumeList,setResumeList] = useState([])

 useEffect(() => {
    loadResumeList()
  }, [])
  
  const loadResumeList = async () =>{
  
  const list = await loadDataFromDB()
  console.log("List__________________->",list)
  setResumeList(list)
  }

const loadDataFromDB = async () => {
    console.log("loadDataFromDB");
    const currentUser = auth.currentUser;
    const userEmail = currentUser ? currentUser.email : '';
    const resumeCollectionRef = collection(db, 'Resumes');
    const q = query(resumeCollectionRef, where('postedBy', '==', userEmail));
   

    try {
      const querySnapshot = await getDocs(q);

      // Extract data from the querySnapshot
      const resList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        resList.push(data);
      });
      return resList;
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

    return (
      <View style={styles.container}>
        <FlatList
          data={resumeList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            // <TouchableOpacity
            //   style={styles.resumeItem}
            //   onPress={() => navigation.navigate('ResumeDetail', { resume: item })}
            // >
            //   <Text>{item.title}</Text>
            // </TouchableOpacity>
              <SelectionTile
              name={item.personalDetails.resumeName}
              routeTo={"ResumeDetail"}
              navigation={navigation}
              resume = {item}
            />
          )}
        />
      </View>
    );
  };

  export default ResumeList; 