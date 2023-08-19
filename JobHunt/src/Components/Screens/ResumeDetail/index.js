
import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import ResumePreview from '../ResumeBuildScreen/GenerateResume/ResumePreview'


const ResumeDetail = ({ route }) => {
    const { resume} = route.params;
  
    return (
        <ResumePreview
        personalDetails={resume.personalDetails}
        experienceDetails={resume.experienceDetails}
        projectDetails={resume.projectDetails}
        educationDetails={resume.educationDetails}
        certificationDetails={resume.certificationDetails}
      />
    );
  };
  
  export default ResumeDetail;