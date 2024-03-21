const botaoCodificar = document.getElementById('botao-codificar');
const botaoDecodificar = document.getElementById('botao-decodificar');
const botaoCopiar = document.getElementById('botao-copiar');

botaoCopiar.style.display = 'none';

botaoCodificar.onclick = () => {
    const entradaTexto = document.getElementById('entrada-texto').value;
    const saida = document.getElementById('saida');
    const saidaTexto = document.getElementById('saida-texto');
    const nenhumTexto = document.getElementById('nenhum-texto');
    const nenhumTexto2 = document.getElementById('nenhum-texto2');
    const textoDigitado = entradaTexto.split('');
    const textoCodificado = [];


    for (let i = 0; i < textoDigitado.length; i++) {
        if (textoDigitado[i] === 'a') {
            textoCodificado.push('ai');
        } else if (textoDigitado[i] === 'e') {
            textoCodificado.push('enter');
        } else if (textoDigitado[i] === 'i') {
            textoCodificado.push('imes');
        } else if (textoDigitado[i] === 'o') {
            textoCodificado.push('ober');
        } else if (textoDigitado[i] === 'u') {
            textoCodificado.push('ufat');
        } else {
            textoCodificado.push(textoDigitado[i]);
        }
    }

    nenhumTexto.style.display = 'none';
    nenhumTexto2.style.display = 'none';
    saida.style.justifyContent = 'start';

    saidaTexto.innerHTML = textoCodificado.join('');
    botaoCopiar.style.display = 'inline';
}

botaoDecodificar.onclick = () => {
    const entradaTexto = document.getElementById('entrada-texto').value;
    const saida = document.getElementById('saida');
    const saidaTexto = document.getElementById('saida-texto');
    const nenhumTexto = document.getElementById('nenhum-texto');
    const nenhumTexto2 = document.getElementById('nenhum-texto2');

    const textoDecodificado = entradaTexto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    nenhumTexto.style.display = 'none';
    nenhumTexto2.style.display = 'none';
    saida.style.justifyContent = 'start';

    saidaTexto.innerHTML = textoDecodificado;
    botaoCopiar.style.display = 'inline';

}

botaoCopiar.onclick = () => {
    const copiar = document.createRange();
    copiar.selectNode(document.getElementById('saida'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(copiar);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Texto copiado com sucesso.');
    } catch (err) {
        console.log('Não foi possível copiar.');
    }
}

