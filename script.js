//      TROCAR O TEMA PARA LIGHT
//
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    const body = document.querySelector("body");
    body.classList.toggle("light");
})

//      LÓGICA DA TRADUCAO
//

var cd_TextoM = {
    'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
    'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
    'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
    's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
    'y': "-.--", 'z': "--..",
    'ã': ".--.-", 'á': ".--.-", 'à': ".--.-", 'â': ".--.-",
    'ç': "-.-..", 'é': "..-..", 'ê': "-..-.", 'ó': "---.", 'ô': "---.",
    '0': "-----", '1': ".----", '2': "..---", '3': "...--", '4': "....-",
    '5': ".....", '6': "-....", '7': "--...", '8': "---..", '9': "----.",
    ' ': "/", '.': ".-.-.-", ',': "--..--", '?': "..--..", '!': "-.-.--",
    '/': "-..-.", '(': "-.--.", ')': "-.--.-", '&': ".-...", ':': "---...",
    ';': "-.-.-.", '=': "-...-", '+': ".-.-.", '_': "..--.-", '-': "-....-",
    '$': "...-..-", '@': ".--.-.", '¿': "..-.-", '¡': "--...-", "'": ".----.", '"': ".-..-."
};

var cdMorseT = {
    ".-": 'a', "-...": 'b', "-.-.": 'c', "-..": 'd', ".": 'e', "..-.": 'f',
    "--.": 'g', "....": 'h', "..": 'i', ".---": 'j', "-.-": 'k', ".-..": 'l',
    "--": 'm', "-.": 'n', "---": 'o', ".--.": 'p', "--.-": 'q', ".-.": 'r',
    "...": 's', "-": 't', "..-": 'u', "...-": 'v', ".--": 'w', "-..-": 'x',
    "-.--": 'y', "--..": 'z',
    ".--.-": 'ã', ".----": '1', "..---": '2', "...--": '3', "....-": '4',
    ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9',
    "/": ' ', ".-.-.-": '.', "--..--": ',', "..--..": '?', "-.-.--": '!',
    "-..-.": '/', "-.--.": '(', "-.--.-": ')', ".-...": '&', "---...": ':',
    "-.-.-.": ';', "-...-": '=', ".-.-.": '+', "..--.-": '_', "-....-": '-',
    "...-..-": '$', ".--.-.": '@', "..-.-": '¿', "--...-": '¡', ".----.": "'",
    ".-..-.": '"', ' ': ' '
};

// Função para traduzir texto para código Morse
function textoParaMorse(texto) {
    return texto.toLowerCase().split('').map(char => cd_TextoM[char] || '').join(' ');
}

// Função para traduzir código Morse para texto
function morseParaTexto(morse) {
    return morse.split(' ').map(code => cdMorseT[code] || '').join('');
}

// Obtenha os elementos HTML
const inputTexto = document.getElementById('texto');
const inputCodigo = document.getElementById('codigo');
const btnMorseParaTexto = document.querySelector('.btn-morsetotext');
const btnTextoParaMorse = document.querySelector('.btn-texttomorse');

// Adicione event listeners aos botões
btnTextoParaMorse.addEventListener('click', () => {
    const texto = inputTexto.value;
    const morse = textoParaMorse(texto);
    inputCodigo.value = morse;
});

btnMorseParaTexto.addEventListener('click', () => {
    const morse = inputCodigo.value;
    const texto = morseParaTexto(morse);
    inputTexto.value = texto;
});