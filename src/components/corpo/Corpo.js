import Esquerda from "./Esquerda/Esquerda";
import SideBar from "./Direita/SideBar";
export default function Corpo() {
  return (
    <div class="corpo">
      <Esquerda />
      <SideBar />
    </div>
  );
}
