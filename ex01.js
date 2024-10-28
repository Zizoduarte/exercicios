

function isFibonacci(n) {
  if(n < 0){
   return false;
  }  

  let a = 0;
  let b = 1;

  // Essa instrução gera a sequência de Fibonacci até ultrapassar n
  while(a < n) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a === n;
}





// Entrada do usuário
const numero = parseInt(prompt("Informe um número par verificar se pertence a sequência de Fibonacci:"));

// Verifica se o número pertence a sequência de Fibonacci e exibe a mensagem
if(isFibonacci(numero)) {
  console.log(`O número ${numero} pertence a sequencia de Fibonacci`);
} else {
  console.log(`O número ${numero} não pertence a sequencia de Fibonacci`);
}