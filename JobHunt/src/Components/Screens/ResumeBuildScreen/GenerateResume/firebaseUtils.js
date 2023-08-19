// firebaseUtils.js
import { storage } from "@react-native-firebase/storage";
import { db } from "../../../Database/dbConfig"; // Import Firebase instance correctly

const uploadPDFToFirebase = async (pdfBytes, fileName) => {
  const reference = storage().ref(`resumes/${fileName}.pdf`);

  try {
    await reference.put(pdfBytes, { contentType: "application/pdf" });
    return reference.getDownloadURL();
  } catch (error) {
    console.error("Error uploading PDF:", error);
    return null;
  }
};

const savePDFMetadataToFirestore = async (pdfMetadata) => {
  try {
    await db.collection("pdfs").add(pdfMetadata); // Use the db instance
    return true;
  } catch (error) {
    console.error("Error saving PDF metadata:", error);
    return false;
  }
};

export { uploadPDFToFirebase, savePDFMetadataToFirestore };
