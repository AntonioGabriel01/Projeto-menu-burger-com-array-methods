const menuOptions = [
  { name: "X-salada", price: 30, vegan: true, src: "./img/xsalada.jpeg" },
  { name: "X-Bacon", price: 34, vegan: false, src: "./img/xbacon.png" },
  { name: "X-Bacon Egg", price: 39, vegan: false, src: "./img/bacon-egg.png" },
  { name: "Mostruoso", price: 50, vegan: false, src: "./img/monstruoso.png" },
  { name: "Big Vegano", price: 55, vegan: true, src: "./img/xvegan.png" },
  {
    name: "X-Vegan",
    price: 30,
    vegan: true,
    src: "./img/monstruoso-vegan.png",
  },
];

const Botaofilter = document.querySelector(".filter");

const BotaoSoma = document.querySelector(".Soma");
const BotaoMap = document.querySelector(".map");
const BotaoForeach = document.querySelector(".Foreach");
const Lista = document.querySelector(".Lista");
const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/* Mostrar cardapio Foreach */
BotaoForeach.addEventListener("click", function () {
  Lista.innerHTML = "";
  menuOptions.forEach((item) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = item.src;

    const p = document.createElement("P");
    p.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = formatador.format(item.price);
    price.classList.add("Price");

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(price);
    Lista.appendChild(li);
  });
});
/* Mostrar cardapio Foreach */

/* Desconto com map */
BotaoMap.addEventListener("click", function () {
  const Desconto = menuOptions.map((item) => {
    return {
      name: item.name,
      price: item.price - item.price * 0.1,
      vegan: item.vegan,
      src: item.src,
    };
  });

  Lista.innerHTML = "";
  Desconto.forEach((item) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = item.src;

    const p = document.createElement("P");
    p.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = formatador.format(item.price);
    price.classList.add("Price");

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(price);
    Lista.appendChild(li);
  });
});
/* Desconto com map */

/*soma de todos os produtos*/
BotaoSoma.addEventListener("click", function () {
  const soma = menuOptions.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  Lista.innerHTML = "";
  const li = document.createElement("li");

  const p = document.createElement("P");
  p.textContent =
    "A soma de todos os itens do menu é igual a " + formatador.format(soma);

  Lista.appendChild(li);
  li.appendChild(p);
});
/*soma de todos os produtos*/

/* filtro */
Botaofilter.addEventListener("click", function () {
  Lista.innerHTML = "";
  const filtro = menuOptions.filter((value, index) => {
    if (value.vegan === true) {
      const li = document.createElement("li");

      const img = document.createElement("img");
      img.src = value.src;

      const p = document.createElement("P");
      p.textContent = value.name;

      const price = document.createElement("p");
      price.textContent = formatador.format(value.price);
      price.classList.add("Price");

      li.appendChild(img);
      li.appendChild(p);
      li.appendChild(price);
      Lista.appendChild(li);
    }
  });
});
/* filtro */
