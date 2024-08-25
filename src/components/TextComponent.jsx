import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import style from "../styles/TextComponent.module.css";

const TextComponent = () => {
  const { language } = useContext(LanguageContext);

  let text = "";

  switch (language) {
    case "ua":
      text = "Українська мова була обрана";
      break;
    case "ru":
      text = "Русский язык был выбран";
      break;
    case "en":
      text = "English language was chosen";
      break;
    case "es":
      text = "El español fue el idioma elegido";
      break;
    case "fr":
      text = "Le français a été la langue choisie";
      break;
    default:
      text = "Українська мова була обрана";
  }

  return <p className={style.TextComponent}>{text}</p>;
};

export default TextComponent;
