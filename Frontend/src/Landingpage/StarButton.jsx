import "./StarButton.css";
import { openMainPopup } from "./PopUp";

export default function StarButton() {
  function openPopup() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => openMainPopup(), 400); 
  }

  return (
    <button className="star-btn" onClick={openPopup}>
      <i class="fa-solid fa-star"></i>
    </button>
  );
}
