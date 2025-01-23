function comprar(){
    let input = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById("qtd").value);
    let inferior = document.getElementById("qtd-superior").textContent;
    let superior = document.getElementById("qtd-inferior").textContent;
   
   if(quantidade <= 0 ){    
alert("Erro verifique se a quantidade está correta!");
   }else{
    if(input.value === 'pista'){
        comprarPista(quantidade);
       }
       if(input.value === 'inferior'){
    comprarInferior(quantidade);
       }
       if(input.value === 'superior'){
    comprarSuperior(quantidade);
       }
   }
   
}
  function comprarPista(quantidade){
    let pista = parseInt(document.getElementById("qtd-pista").textContent);
    if (quantidade  > pista){
        alert("Quantidade indisponível!");
    }else{
        qtdPista = pista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra Realizada!");
    }
}
function comprarInferior(quantidade){
    let inferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (quantidade > inferior){
alert("Quantidade indisponível");
    }else{
        quantidadetdInferior = inferior - quantidade;
        document.getElementById("qtd-inferior").textContent  = quantidadetdInferior;
        alert("Compra Realizada!");

    }
}
function comprarSuperior(quantidade){
    let superior = parseInt(document.getElementById("qtd-superior").textContent);
    if(quantidade > superior){
alert("Quantidade indisponível")
    }else{
        quantidadetdSuperior = superior - quantidade;
        document.getElementById("qtd-superior").textContent = quantidadetdSuperior;
        alert("Compra Realizada!");
}
}