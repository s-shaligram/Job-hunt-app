import React, { useState } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import ResumePreview from "./ResumePreview";
import PersonalDetails from "./PersonalDetails";
import ExperienceDetails from "./ExperienceDetails";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import CertificationDetails from "./CertificationDetails";
import generatePDF from "./pdfGenerator";
import { useStateContext } from "../../../../context/StateContext";
import {
  uploadPDFToFirebase,
  savePDFMetadataToFirestore,
} from "./firebaseUtils";
const HomeScreen = () => {
  const { personalDetails, setPersonalDetails } = useStateContext();
  const [step, setStep] = useState(0);
  //const [personalDetails, setPersonalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [certificationDetails, setCertificationDetails] = useState([]);

  // const handleGeneratePDF = async () => {
  //   try {
  //     const pdfBytes = await generatePDF({
  //       personalDetails,
  //       experienceDetails,
  //       projectDetails,
  //       educationDetails,
  //       certificationDetails,
  //     });

  //     const pdfFileName = "resume"; // You can set a desired file name
  //     const pdfDownloadURL = await uploadPDFToFirebase(pdfBytes, pdfFileName);

  //     if (!pdfDownloadURL) {
  //       // Handle failure to upload PDF
  //       console.error("Failed to upload PDF to Firebase Storage");
  //       return;
  //     }

  //     const pdfMetadata = {
  //       personalDetails,
  //       experienceDetails,
  //       projectDetails,
  //       educationDetails,
  //       certificationDetails,
  //       pdfDownloadURL,
  //       createdAt: firestore.FieldValue.serverTimestamp(),
  //     };

  //     const success = await savePDFMetadataToFirestore(pdfMetadata);

  //     if (success) {
  //       // Handle successful PDF generation and metadata saving
  //     } else {
  //       // Handle failure to save metadata
  //       console.error("Failed to save PDF metadata to Firestore");
  //     }
  //   } catch (error) {
  //     // Handle any unexpected errors during the PDF generation process
  //     console.error("Error generating and saving PDF:", error);
  //   }
  // };
  const handleGeneratePDF = async () => {
    try {
      const pdfFilePath = await generatePDF({
        personalDetails,
        experienceDetails,
        projectDetails,
        educationDetails,
        certificationDetails,
      });

      const pdfBytes = await RNFetchBlob.fs.readFile(pdfFilePath, "base64");

      const pdfFileName = "resume.pdf"; // Set a desired file name
      const pdfDownloadURL = await uploadPDFToFirebase(pdfBytes, pdfFileName);

      if (!pdfDownloadURL) {
        console.error("Failed to upload PDF to Firebase Storage");
        return;
      }

      const pdfMetadata = {
        personalDetails,
        experienceDetails,
        projectDetails,
        educationDetails,
        certificationDetails,
        pdfDownloadURL,
        createdAt: firestore.FieldValue.serverTimestamp(),
      };

      const success = await savePDFMetadataToFirestore(pdfMetadata);

      if (success) {
        // Handle successful PDF generation and metadata saving
      } else {
        console.error("Failed to save PDF metadata to Firestore");
      }
    } catch (error) {
      console.error("Error generating and saving PDF:", error);
    }
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
