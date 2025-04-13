const request = (obj) => {
  return new Promise((resolve, reject) => {
    // xhr = XML HTTP REQUEST -> Esse tipo de nome é padrão
    const xhr = new XMLHttpRequest();
    // xhr.open = GET
    xhr.open(obj.method, obj.url, true);
    // xhr.send = POST
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
