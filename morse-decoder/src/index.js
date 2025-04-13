const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbol, decodedSymbol, result = '', mark;
    let start = 0;
    let i;
    while (start !== String(expr).length) {
        symbol = expr.slice(start, start + 10);
        if (symbol === '**********') {
            symbol = ' ';
        } else {
            i = 0;
            decodedSymbol = '';
            while (i !== 10) {
                mark = symbol.slice(i, i+2);
                switch (mark) {
                    case '00': 
                        mark = '';
                        break;
                    case '10':
                        mark = '.';
                        break;
                    case '11':
                        mark = '-';
                        break;
                }
                    decodedSymbol += mark;
                i += 2;
            }
            symbol = MORSE_TABLE[String(decodedSymbol)];
        }
        result += symbol;
        start += 10;
    }
    return result;
}

module.exports = {
    decode
}