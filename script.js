
let num = parseFloat(prompt("Escolha um lanche:" + "\n" + "1-Cachorro quente" + "\n" + "2-Bauru Simples" + "\n" + "3-Bauru com ovo" + "\n" + "4-Hamburguer" + "\n" + "5-CheeseBurguer" + "\n" + "6-Refrigerante"));
 
let quantidade = parseInt(prompt("Digite a quantidade desejada:"));
 
let preco;
 
switch (num) {

    case 1:

        preco = 1.70;

        break;

    case 2:

        preco = 2.30;

        break;

    case 3:

        preco = 2.60;

        break;

    case 4:

        preco = 2.40;

        break;

    case 5:

        preco = 2.50;

        break;

    case 6:

        preco = 1.00;

        break;

    default:

        alert("Volte e escolha um número de 1 a 6 do nosso cardápio");

}
 
if (preco !== undefined) {

    let total = quantidade * preco;

    alert("Total a pagar: R$" + total.toFixed(2));

}
