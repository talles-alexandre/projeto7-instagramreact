import img_bad_vibes_memes from "../../../assets/img/bad.vibes.memes.svg";
import img_chibirdart from "../../../assets/img/chibirdart.svg";
import img_razoesparaacreditar from "../../../assets/img/razoesparaacreditar.svg";
import img_adorable_animals from "../../../assets/img/adorable_animals.svg";
import img_smallcutecats from "../../../assets/img/smallcutecats.svg";

export default function Sugestoes() {
  const itens = [
    {
      nome: "bad.vibes.memes",
      img: img_bad_vibes_memes,
      razao: "Segue você",
    },
    {
      nome: "chibirdart",
      img: img_chibirdart,
      razao: "Segue você",
    },
    {
      nome: "razoesparaacreditar",
      img: img_razoesparaacreditar,
      razao: "Novo no Instagram",
    },
    {
      nome: "adorable_animals",
      img: img_adorable_animals,
      razao: "Segue você",
    },
    {
      nome: "smallcutecats",
      img: img_smallcutecats,
      razao: "Segue você",
    },
  ];

  return (
    <>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {itens.map((item) => (
          <div class="sugestao">
            <div class="usuario">
              <img src={item.img} />
              <div class="texto">
                <div class="nome">{item.nome}</div>
                <div class="razao">{item.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        ))}
      </div>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </>
  );
}
