function countLetterA(text) {
  let count = 0;

  // Pecorre a string verificando a ocorrência de 'a' ou 'A'
  for(let char of text) {
    if(char === 'a' || char === 'A') {
      count++;
    }
  } 
  
  // Exibe se a letra 'a' foi encontrada e quantas vezes
  if(count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log(`A letra 'a' não foi encontrada na string.`);
  }
}

// Entrada do usuário
const inputString = prompt("Informe uma string para verificar a presença da letra 'a':");
countLetterA(inputString);