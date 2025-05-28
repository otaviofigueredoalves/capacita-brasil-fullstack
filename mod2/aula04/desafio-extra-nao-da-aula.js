let produtos = [
  { nome: "Celular", preco: 1200.00, categoria: "Eletrônicos", emPromocao: true },
  { nome: "Sofá", preco: 900.00, categoria: "Móveis", emPromocao: false },
  { nome: "Tenis", preco: 300.00, categoria: "Vestuário", emPromocao: true },
];
let produto = "";
let precoDesconto = 0;

for (let i = 0; i < produtos.length; i++){
    if(produtos[i].emPromocao == true){
        precoDesconto = (produtos[i].preco) - (produtos[i].preco * 0.1);       
        produto = `Nome: ${produtos[i].nome} | Preço com 10% de desconto: ${precoDesconto} | Categoria: ${produtos[i].categoria}`;
        console.log(produto);
    }
}