import { useState } from "react";
import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: " 3 yeni mesaj var",
  },
  "en-US": {
    title: "hello world",
    description: " you have 3 new message",
  },
};
function App() {
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
