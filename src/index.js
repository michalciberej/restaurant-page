import "./style.css";
import Svg from  "./img/p.svg"
import burger from "./img/hamburger.jpg"
import { createrNavBar, createImgBody, createHomeLogo } from "./firstLoad";

const menuBtn = document.querySelector("#menuBtn");

createrNavBar()
createImgBody()
createHomeLogo()

//menuBtn.addEventListener("click". () => displayMenuPage())