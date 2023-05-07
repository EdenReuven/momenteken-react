import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

 
 export const upperCaseLabel = (word) => {
    let string = word.split("_");
    let label = "";
    for (let i = 0; i < string.length; i++) {
      label =
        label + " " + string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return label;
  };

  export const convertToPDF = (form) => {
    const positionInfo = form.getBoundingClientRect();
    const htmlWidth = positionInfo.width;
    const htmlHeight = positionInfo.height;
    const topLeftMargin = 60;
    const pdfWidth = htmlWidth + (topLeftMargin * 2);
    const pdfHeight = (pdfWidth * 1.5) + (topLeftMargin * 2);
    const canvasImageWidth = htmlWidth;
    const canvasImageHeight = htmlHeight;

    const totalPdfPages = Math.ceil(htmlHeight / pdfHeight);

    html2canvas(form).then((canvas) => {
      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
      
      pdf.addImage(
        imageData,
        "JPEG",
        topLeftMargin,
        topLeftMargin,
        canvasImageWidth,
        canvasImageHeight
      );

      for (let i = 1; i < totalPdfPages; i++) {
        pdf.addPage((pdfWidth, pdfHeight));
        pdf.addImage(
          imageData,
          "JPEG",
          topLeftMargin,
          -(pdfHeight * i) + (topLeftMargin * 4),
          canvasImageWidth,
          canvasImageHeight
        );
      }

      pdf.save("formPDF.pdf");
    });
  }