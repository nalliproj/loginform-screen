import { AppConstants as config } from "../../app.constants";
import { useState } from "react";
import "./Locale.css";

const Locale = ({onDataSubmit}) => {
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setLanguage(e.target.value);
    onDataSubmit(e.target.value);
  }

  return (
    <div className="lang-select">
      <select
        name="language"
        value={language}
        onChange={handleChange}
        className="form-control custom-select"
      >
        {config.LANGUAGES.map((e, key) => (
          <option key={key} value={e.code}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Locale;
