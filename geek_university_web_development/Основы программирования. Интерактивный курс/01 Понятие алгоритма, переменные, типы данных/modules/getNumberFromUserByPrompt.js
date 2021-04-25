export default function getNumberFromUserByPrompt(msg) {
    let numberOfRublesToConvert = 0;

    while (numberOfRublesToConvert <= 0) {
        numberOfRublesToConvert = +prompt(msg);
        if (isNaN(numberOfRublesToConvert)) {
            numberOfRublesToConvert = 0;
        }
    }
    return numberOfRublesToConvert;
}