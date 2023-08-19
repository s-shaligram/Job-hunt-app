import { generatePDF, addText } from "./pdfGeneration";
import {
  uploadPDFToFirebase,
  savePDFMetadataToFirestore,
} from "./firebaseUtils";

export const savePDFToFirebaseAndFirestore = async (resumeData) => {
  try {
    const pdfBytes = await generatePDF(resumeData);

    const pdfFileName = "resume";
    const pdfDownloadURL = await uploadPDFToFirebase(pdfBytes, pdfFileName);

    if (!pdfDownloadURL) {
      throw new Error("Failed to upload PDF to Firebase Storage");
    }

    const metadata = {
      personalDetails: resumeData.personalDetails,
      experienceDetails: resumeData.experienceDetails,
      projectDetails: resumeData.projectDetails,
      educationDetails: resumeData.educationDetails,
      certificationDetails: resumeData.certificationDetails,
      pdfDownloadURL,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };

    await savePDFMetadataToFirestore(metadata);

    return true;
  } catch (error) {
    console.error("Error saving PDF and metadata:", error);
    return false;
  }
};
