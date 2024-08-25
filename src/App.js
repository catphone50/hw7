import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextComponent from "./components/TextComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <HeaderComponent />
        <LanguageSwitcher />
        <TextComponent />
      </LanguageProvider>
    </div>
  );
}

export default App;
