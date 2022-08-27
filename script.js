let botao = document.querySelector('.btn').addEventListener("click", () => {
    document.querySelector('.title').innerHTML = "Hoje é teu aniversário <br> estás de parabuains!!!";

    document.querySelector('.img').setAttribute("src", 'https://c.tenor.com/ux0OuRACXVQAAAAM/vuaida.gif');
    document.querySelector('.img2').setAttribute("src", 'https://c.tenor.com/iEfTQjqMmkcAAAAM/yoshi-and-egg-yoshi.gif');

    document.querySelector('h2').textContent = "Por Ryan Costa"

    document.querySelector('audio').play();
});