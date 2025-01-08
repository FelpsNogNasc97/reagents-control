document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;

    // Checando a senha (apenas exemplo, ideal seria verificar no backend)
    if (password === "senhaModerador") {
        window.location.href = "dashboard.html";
    } else {
        alert("Senha incorreta!");
    }
});
