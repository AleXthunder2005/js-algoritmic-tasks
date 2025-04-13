module.exports = function toReadable (number) {
    const numberNames = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ];
    const basis = 10;  
    const tDigit = {units: 0, numbersOfSecondTen: 1, tens: 2}; 

    let unitsDigit, tensDigit, hundredsDigit;
    let readableNumber = '';

    if (number === 0) return 'zero';

    unitsDigit = number % basis;
    number = Math.trunc(number / basis);
    tensDigit = number % basis;
    number = Math.trunc(number / basis);
    hundredsDigit = number % basis;

    if (hundredsDigit > 0) readableNumber = `${numberNames[tDigit.units][hundredsDigit]} hundred `;
    if (tensDigit > 0) {
        if (tensDigit === 1) {
            readableNumber += `${numberNames[tDigit.numbersOfSecondTen][unitsDigit]}`;
        } else {
            readableNumber += `${numberNames[tDigit.tens][tensDigit]} `;
        }
    } 
    if (unitsDigit > 0 && tensDigit !== 1) readableNumber += `${numberNames[tDigit.units][unitsDigit]}`;

    return readableNumber.trim();
}
