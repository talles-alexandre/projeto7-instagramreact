import img_catanacomics from "../../../assets/img/catanacomics.svg";
export default function Usuario() {
  return (
    <div class="usuario">
      <img src={img_catanacomics} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          Catana
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
