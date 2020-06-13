import { Cards } from "./Card.js";

window.onload = () => {
    let animationCards = new Cards();
    document.onscroll = () => animationCards.CalcScroll();
}