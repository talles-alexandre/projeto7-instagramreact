import img_9gag from "../../../assets/img/9gag.svg";
import img_meowed from "../../../assets/img/meowed.svg";
import img_barked from "../../../assets/img/barked.svg";
import img_nathanwpylestrangeplanet from "../../../assets/img/nathanwpylestrangeplanet.svg";
import img_wawawicomics from "../../../assets/img/wawawicomics.svg";
import img_respondeai from "../../../assets/img/respondeai.svg";
import img_filomoderna from "../../../assets/img/filomoderna.svg";
import img_memeriagourmet from "../../../assets/img/9gag.svg";

export default function Stories() {
  const itens = [
    { nome: "9gag", img: img_9gag },
    { nome: "meowed", img: img_meowed },
    { nome: "barked", img: img_barked },
    { nome: "nathanwpylestrangeplanet", img: img_nathanwpylestrangeplanet },
    { nome: "wawawicomics", img: img_wawawicomics },
    { nome: "respondeai", img: img_respondeai },
    { nome: "filomoderna", img: img_filomoderna },
    { nome: "memeriagourmet", img: img_memeriagourmet },
  ];

  return (
    <div class="stories">
      {itens.map((item) => (
        <div class="story">
          <div class="imagem">
            <img src={item.img} />
          </div>
          <div class="usuario">{item.nome}</div>
        </div>
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
