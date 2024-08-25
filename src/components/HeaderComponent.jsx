import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import style from "../styles/HeaderComponent.module.css";

const HeaderComponent = () => {
  const { language } = useContext(LanguageContext);

  let header = "";

  switch (language) {
    case "ua":
      header = "Привіт світ!";
      break;
    case "ru":
      header = "Привет мир!";
      break;
    case "en":
      header = "Hello world!";
      break;
    case "es":
      header = "Hola mundo!";
      break;
    case "fr":
      header = "Bonjour le monde!";
      break;
    default:
      header = "Привіт світ!";
  }

  return <p className={style.HeaderComponent}>{header}</p>;
};

export default HeaderComponent;
