import { PDFDocument, rgb } from "react-native-pdf-lib";

export const generatePDF = async (resumeData) => {
  const {
    personalDetails,
    experienceDetails,
    projectDetails,
    educationDetails,
    certificationDetails,
  } = resumeData;

  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([600, 800]);

  let y = page.getHeight() - 50;

  const addText = (text) => {
    y -= 20;
    page.drawText(text, {
      x: 50,
      y,
      size: 12,
      color: rgb(0, 0, 0),
    });
  };

  addText("Resume Preview");
  addText(" ");

  addText("Personal Details:");
  addText(`Name: ${personalDetails.name}`);
  addText(`Email: ${personalDetails.email}`);
  addText(" ");

  addText("Experience:");
  experienceDetails.forEach((experience) => {
    addText(`Company: ${experience.company}`);
    addText(`Position: ${experience.position}`);
    addText(" ");
  });

  addText("Projects:");
  projectDetails.forEach((project) => {
    addText(`Project Name: ${project.projectName}`);
    addText(`Description: ${project.description}`);
    addText(" ");
  });

  addText("Education:");
  educationDetails.forEach((education) => {
    addText(`School: ${education.school}`);
    addText(`Degree: ${education.degree}`);
    addText(" ");
  });

  addText("Certifications:");
  certificationDetails.forEach((certification) => {
    addText(`Certification Name: ${certification.certificationName}`);
    addText(`Issued By: ${certification.issuedBy}`);
    addText(" ");
  });

  page.drawRectangle({
    x: 50,
    y: page.getHeight() - 50,
    width: 500,
    height: 2,
    color: rgb(0, 0, 0),
  });

  page.drawText("Generated by Your App", {
    x: 50,
    y: page.getHeight() - 80,
    size: 10,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  const pdfBase64 = pdfBytes.toString("base64");

  const pdfUri = `data:application/pdf;base64,${pdfBase64}`;

  try {
    await Share.open({ url: pdfUri });
  } catch (error) {
    console.error("Error sharing PDF:", error);
  }

  return pdfUri;
};
