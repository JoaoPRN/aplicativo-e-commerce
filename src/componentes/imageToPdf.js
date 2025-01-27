import RNImageToPdf from 'react-native-image-to-pdf';

const myAsyncPDFFunction = async () => {
  try {
    const options = {
      imagePaths: ['../assets/imagem.png'],
      name: 'PDFName',
    };
    const pdf = await RNImageToPdf.createPDFbyImages(options);

    console.log(pdf.filePath);
  } catch (e) {
    console.log(e);
  }
};

export default myAsyncPDFFunction;
