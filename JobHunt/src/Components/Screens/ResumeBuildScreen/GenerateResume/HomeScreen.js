import React, { useState } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import ResumePreview from "./ResumePreview";
import PersonalDetails from "./PersonalDetails";
import ExperienceDetails from "./ExperienceDetails";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import CertificationDetails from "./CertificationDetails";
import { generatePDF } from "./pdfGenerator";

const HomeScreen = () => {
  const [step, setStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
  });
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [certificationDetails, setCertificationDetails] = useState([]);

  const handleGeneratePDF = async () => {
    await generatePDF({
      personalDetails,
      experienceDetails,
      projectDetails,
      educationDetails,
      certificationDetails,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalDetails
            onNext={handleNext}
            onBack={handleBack}
            updatePersonalDetails={setPersonalDetails}
          />
        );
      case 1:
        return (
          <ExperienceDetails
            onNext={handleNext}
            onBack={handleBack}
            updateExperienceDetails={setExperienceDetails}
          />
        );
      case 2:
        return (
          <ProjectDetails
            onNext={handleNext}
            onBack={handleBack}
            updateProjectDetails={setProjectDetails}
          />
        );
      case 3:
        return (
          <EducationDetails
            onNext={handleNext}
            onBack={handleBack}
            updateEducationDetails={setEducationDetails}
          />
        );
      case 4:
        return (
          <CertificationDetails
            onNext={handleNext}
            onBack={handleBack}
            updateCertificationDetails={setCertificationDetails}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderStep()}
      {step === 5 && (
        <>
          <ResumePreview
            personalDetails={personalDetails}
            experienceDetails={experienceDetails}
            projectDetails={projectDetails}
            educationDetails={educationDetails}
            certificationDetails={certificationDetails}
          />
          <Button title="Generate PDF" onPress={handleGeneratePDF} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
