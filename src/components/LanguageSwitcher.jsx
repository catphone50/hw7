import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import style from "../styles/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <select
      className={style.LanguageSwitcher}
      defaultValue="ua"
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="ua">Українська</option>
      <option value="ru">Русский</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSwitcher;
