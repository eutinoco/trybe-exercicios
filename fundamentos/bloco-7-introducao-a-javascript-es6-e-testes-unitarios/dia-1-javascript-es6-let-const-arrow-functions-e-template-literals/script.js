const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !';`
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

testingScope(true);

// Bonus

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordemCrescente = (arr) => {
    console.log(`Os números ${arr.sort((a, b)=> {
        return a-b
    })} se encontram ordenados de forma crescente!`)
}
ordemCrescente(oddsAndEvens)