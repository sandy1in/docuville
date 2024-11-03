import { 
    dlVariants , 
    noVariants , 
    validTillVariants , 
    nameVariants,
    dropVariations
} from "./variationData.js";

function cleanInput(rawText){
    if (typeof rawText !== 'string') {
        throw new TypeError('Expected a string as input');
    }

    let cleanedTextArray = rawText
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\bMHO/g, "MH0")
      .split(" ")
      .map(word => word.trim())
      .filter(word => word !== '-' && word) // Filter out '-' and empty words
      .filter(Boolean);

    return cleanedTextArray;
}

function dlChecker(dlVar, noVar){
    if(dlVariants.includes(dlVar) && noVariants.includes(noVar))
        return true;
    return false;
}

function validTillChecker(word, nextWord) {
    let validTillWord = word + " " + nextWord;
    for(let validTillVariantsWord of validTillVariants){
        if(validTillWord.toLowerCase() === validTillVariantsWord.toLowerCase())
            return true
    }
    return false;
}

function nameChecker(wordName) {
    for(let nameVariantsWord of nameVariants){
        if(wordName.toLowerCase() === nameVariantsWord.toLowerCase())
            return true;
    }
    return false;
}

function toTakeLastName(fullNameArray){
    let lastWord = fullNameArray[2];
    if (lastWord && dropVariations.includes(lastWord.toLowerCase()))
        return false; // Exclude last word if in drop list
    return true;
}

export { cleanInput , dlChecker , validTillChecker , nameChecker , toTakeLastName }
