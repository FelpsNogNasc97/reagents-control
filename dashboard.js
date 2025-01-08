// Lógica para a interface de Técnico
document.getElementById("form-tecnico").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const reagente = document.getElementById("reagente").value;
    const quantidade = document.getElementById("quantidade").value;
    
    alert(`Reagente: ${reagente}\nQuantidade utilizada: ${quantidade} g/ml`);
    // Aqui você poderia salvar esses dados no banco de dados
});

// Lógica para a interface do Moderador
document.getElementById("form-moderador").addEventListener("submit", function(event) {
    event.preventDefault();

    const senha = document.getElementById("senha-moderador").value;

    // Checando a senha do moderador
    if (senha === "senhaModerador") {
        document.querySelector(".moderador-options").style.display = "block";
        alert("Bem-vindo, Moderador!");
    } else {
        alert("Senha incorreta!");
    }
});
