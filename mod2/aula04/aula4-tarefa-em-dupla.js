let produtos = [
  { nome: "Lápis", preco: 1.50, categoria: "Papelaria" },
  { nome: "Caderno", preco: 12.00, categoria: "Papelaria" },
  { nome: "Mouse", preco: 45.00, categoria: "Informática" },
  { nome: "Teclado", preco: 70.00, categoria: "Informática" },
  { nome: "Caneta", preco: 2.00, categoria: "Papelaria" },
  { nome: "Monitor", preco: 500.00, categoria: "Informática" },
  { nome: "Borracha", preco: 1.00, categoria: "Papelaria" },
  { nome: "Impressora", preco: 350.00, categoria: "Informática" },
  { nome: "Cadeira", preco: 150.00, categoria: "Móveis" },
  { nome: "Mesa", preco: 300.00, categoria: "Móveis" },
  { nome: "Estante", preco: 250.00, categoria: "Móveis" }
];

let apenasMoveis = "";
let totalPreco = 0;


for (let i = 0; i < produtos.length; i++){
    if (produtos[i].categoria == "Móveis"){
        apenasMoveis = `Nome: ${produtos[i].nome} | Preço ${produtos[i].preco}`;
        console.log(apenasMoveis); 
        totalPreco += produtos[i].preco;
    }
}

console.log(`Preço total: ${totalPreco}`);
