import React from "react";
import img_catanacomics from "../../../assets/img/catanacomics.svg";
export default function Usuario() {
  const [nomeuser, setNomeuser] = React.useState("Catana");
  const [img, setImg] = React.useState(
    "https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg"
  );
  return (
    <div class="usuario">
      <img
        src={img}
        onClick={() => {
          setImg(prompt("Digite o link da imagem"));
        }}
      />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {nomeuser}
          <ion-icon
            name="pencil"
            onClick={() => {
              setNomeuser(prompt("Digite o nome do usuario"));
            }}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
