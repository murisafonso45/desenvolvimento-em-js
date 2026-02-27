let listaDeCompras = [];
let rodando = true;

while (rodando) {
    let opcao = prompt(
        "Lista de compras \n" +
        "1 Adicionar item\n" +
        "2 Remover item\n" +
        "3 Listar itens\n" +
        "4 Sair\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
        case "1":
            let novoItem = prompt("Digite o nome do item:");
            if (novoItem) {
                listaDeCompras.push(novoItem); 
                alert(novoItem + " adicionado!");
            }
            break;

        case "2":
            let itemRemover = prompt("Digite o nome do item a remover:");
            let index = listaDeCompras.indexOf(itemRemover);
            if (index !== -1) {
                listaDeCompras.splice(index, 1); 
                alert(itemRemover + " removido!");
            } else {
                alert("Item não encontrado.");
            }
            break;

        case "3":
            if (listaDeCompras.length === 0) {
                alert("A lista está vazia.");
            } else {
                let listaFormatada = "Sua lista:\n";
                
                for (let i = 0; i < listaDeCompras.length; i++) {
                    listaFormatada += (i + 1) + ". " + listaDeCompras[i] + "\n";
                }
                alert(listaFormatada);
            }
            break;

        case "4":
            rodando = false; 
            alert("Programa encerrado.");
            break;

        default:
            alert("Opção inválida.");
    }
}
