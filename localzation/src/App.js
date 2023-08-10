import { useState, useEffect } from "react";
import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
// Localization, bir React uygulamasında kullanılan metinlerin,
// farklı dillerde sunulması için kullanılan bir teknik
const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: " {count} yeni mesaj var",
  },
  "en-US": {
    title: "hello world",
    description: " you have {count} new message",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);
  console.log(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{ count: 3 }} />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
