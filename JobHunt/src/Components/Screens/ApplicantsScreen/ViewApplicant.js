import {View, Text, ScrollView} from "react-native";
import React, { useState, useEffect } from 'react';
import ResumePreview from "../ResumeBuildScreen/GenerateResume/ResumePreview";
import {auth, db} from "../../Database/dbConfig";
import {collection, getDocs, query, where} from "firebase/firestore";

const ViewApplicant = () => {
    const [resumeList, setResumeList] = useState([])
    useEffect(async () => {
        await loadResumeList()
    }, [])

    const loadResumeList = async () => {
        const list = await loadDataFromDB()
        setResumeList(list)
        setIsLoading(false);
    }
    const loadDataFromDB = async () => {
        const currentUser = auth.currentUser;
        const userEmail = currentUser ? currentUser.email : '';
        const resumeCollectionRef = collection(db, 'job-applicants');
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
        <ScrollView>
            <ResumePreview
                personalDetails={resume.personalDetails}
                experienceDetails={resume.experienceDetails}
                projectDetails={resume.projectDetails}
                educationDetails={resume.educationDetails}
                certificationDetails={resume.certificationDetails}
            />
        </ScrollView>
    );
};

export default ViewApplicant;
