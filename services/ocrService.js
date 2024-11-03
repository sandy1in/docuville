import { createWorker } from 'tesseract.js';
import { cleanInput , dlChecker , validTillChecker , nameChecker , toTakeLastName } from '../utils/textCleaning.js';

async function extractText(imageBuffer) {
    try {
        
        let dlNo = "not found";
        let validTillDate = "not found";
        let nameOfOwner = "not found";

        const worker = await createWorker("eng");  
        const { data: { text } } = await worker.recognize(imageBuffer);
        const cleanedTextArray = cleanInput(text);

        for(let i=0 ; i<cleanedTextArray.length ; i++){

            if(dlChecker(cleanedTextArray[i], cleanedTextArray[i+1])){
                if(cleanedTextArray[i+2], cleanedTextArray[i+3]){
                    dlNo = cleanedTextArray[i + 2] + ' ' + cleanedTextArray[i + 3];
                }
            }

            if(validTillChecker(cleanedTextArray[i], cleanedTextArray[i+1])){
                validTillDate = cleanedTextArray[i+2];
            }

            if(nameChecker(cleanedTextArray[i])){
                const possibleName = cleanedTextArray.slice(i + 1, i + 4);
                if(!toTakeLastName(possibleName)){
                    nameOfOwner = possibleName.slice(0, 2).join(' ');
                } else {
                    nameOfOwner = possibleName.join(' ');
                }
            }

        }

        await worker.terminate();

        let outputJson = {
            name: nameOfOwner,
            drivingLicenseNo: dlNo,
            expirationDate: validTillDate
        }
        console.log(outputJson)

        return outputJson;

    } catch (error) {
        console.log(error)
    }
};

export { extractText };
