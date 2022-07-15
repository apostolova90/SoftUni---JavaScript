function extractFile(input) {
    
    let extracted = input.split("\\"); // разделемя елементите в стринга и създаваме масив
    let fileName = extracted[extracted.length - 1].split("."); // отделяме последния елемент от масива и го сплитваме където има .
    let extension = fileName.pop(); // отделяме последната част
  
    console.log(`File name: ${fileName.join(".")}`);
    console.log(`File extension: ${extension}`);
  }
  extractFile("C:\\Internal\\training-internal\\Template.pptx");
  extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");