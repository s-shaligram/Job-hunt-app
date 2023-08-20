import {View, Text, ScrollView} from "react-native";
import React, { useState, useEffect } from 'react';
import ResumePreview from "../ResumeBuildScreen/GenerateResume/ResumePreview";

const ViewApplicant = () => {
    const [resumeList, setResumeList] = useState([])
    useEffect(() => {
        // loadResumeList()
    }, [])

    return (
        <ScrollView>
            {/*<ResumePreview*/}
            {/*    personalDetails={resume.personalDetails}*/}
            {/*    experienceDetails={resume.experienceDetails}*/}
            {/*    projectDetails={resume.projectDetails}*/}
            {/*    educationDetails={resume.educationDetails}*/}
            {/*    certificationDetails={resume.certificationDetails}*/}
            {/*/>*/}
        </ScrollView>
    );
};

export default ViewApplicant;
