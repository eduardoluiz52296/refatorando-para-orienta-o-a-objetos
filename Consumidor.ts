export class Consumidor {
  nome: string;
  idade: number;
  email: string;

  constructor(nome: string, idade: number, email: string) {
    if (nome.trim() === "") {
      throw new Error("O nome não pode ser vazio.");
    }

    if (!Number.isInteger(idade) || idade < 0) {
      throw new Error("A idade deve ser um número inteiro não negativo.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("O e-mail informado é inválido.");
    }

    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  formatarExibicao(): string {
    return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
  }

  static calcularMediaIdade(consumidores: Consumidor[]): number {
    if (consumidores.length === 0) return 0;

    const soma = consumidores.reduce(
      (total, consumidor) => total + consumidor.idade,
      0
    );

    return soma / consumidores.length;
  }

  static obterExtremosIdade(consumidores: Consumidor[]): {
    maisVelho: Consumidor | undefined;
    maisNovo: Consumidor | undefined;
  } {
    if (consumidores.length === 0) {
      return { maisVelho: undefined, maisNovo: undefined };
    }

    let maisVelho = consumidores[0];
    let maisNovo = consumidores[0];

    for (const consumidor of consumidores) {
      if (consumidor.idade > maisVelho.idade) {
        maisVelho = consumidor;
      }

      if (consumidor.idade < maisNovo.idade) {
        maisNovo = consumidor;
      }
    }

    return { maisVelho, maisNovo };
  }
}
