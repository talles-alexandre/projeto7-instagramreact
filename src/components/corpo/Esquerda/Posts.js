import img_meowed from "../../../assets/img/meowed.svg";
import img_barked from "../../../assets/img/barked.svg";
import img_respondeai from "../../../assets/img/respondeai.svg";
import img_dog from "../../../assets/img/dog.svg";
import img_gato_telefone from "../../../assets/img/gato-telefone.svg";
import img_adorable_animals from "../../../assets/img/adorable_animals.svg";

export default function Posts() {
  const itens = [
    {
      nome: "meowed",
      img: img_meowed,
      cont: img_gato_telefone,
      curtido: "respondeai",
      tcurtidas: 101.523,
    },
    {
      nome: "barked",
      img: img_barked,
      cont: img_dog,
      curtido: "repondeai",
      tcurtidas: 105.777,
    },
  ];

  return (
    <div class="posts">
      {itens.map((item) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={item.img} />
              {item.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={item.cont} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={img_respondeai} />
              <div class="texto">
                Curtido por <strong>{item.curtido}</strong> e{" "}
                <strong>outras {item.tcurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
