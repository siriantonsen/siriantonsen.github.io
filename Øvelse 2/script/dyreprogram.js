const fugl = document.querySelector("#fugl");

fugl.addEventListener("click", byttBilde);

function byttBilde() {
  const b =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/2560px-Nile_crocodile_head.jpg";
  const a =
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Somateria_mollissima_male_female.jpg";
  const c =
    "https://get.musti.media/shops/mno/resources/ftp/original/fe/3a8c19546d11fbed1af204ef37313f.jpg";
  if (fugl.src === a) {
    fugl.src = b;
  } else if (fugl.src === b) {
    fugl.src = c;
  } else {
    fugl.src = a;
  }
}

// svar til øvelse 2 i IBE102, påbegynt 15. august 2023
