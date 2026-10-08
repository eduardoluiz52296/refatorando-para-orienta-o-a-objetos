import { Consumidor } from "./Consumidor";

const listaConsumidores: Consumidor[] = [];

listaConsumidores.push(new Consumidor("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(new Consumidor("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(new Consumidor("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(new Consumidor("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(new Consumidor("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach(consumidor => {
  console.log(consumidor.formatarExibicao());
});

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(
  `Média das Idades: ${Consumidor.calcularMediaIdade(listaConsumidores).toFixed(1)} anos`
);

const { maisVelho, maisNovo } =
  Consumidor.obterExtremosIdade(listaConsumidores);

if (maisVelho && maisNovo) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}
