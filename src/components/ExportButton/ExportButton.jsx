import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

export const ExportButton = ({ elementId }) => {
  const exportToPdf = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    try {
      const canvas = await htmlToImage.toCanvas(element);
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save("ER_Diagram.pdf");
    } catch (error) {
      console.log("Error in PDF Generating", error);
    }
  };

  const exportToImage = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    htmlToImage
      .toPng(element)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "ER_Diagram.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="flex space-x-4 mt-5 z-10">
      <button
        onClick={exportToPdf}
        className="bg-[#7c294f] hover:bg-[#6a2343] text-white text-sm font-medium px-4 py-2 rounded-md"
      >
        Export as PDF
      </button>
      <button
        onClick={exportToImage}
        className="bg-[#7c294f] hover:bg-[#6a2343] text-white text-sm font-medium px-4 py-2 rounded-md"
      >
        Export as Image
      </button>
    </div>
  );
};
