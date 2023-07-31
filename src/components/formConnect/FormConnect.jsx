import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { pageContext } from "../../contexts/PageContext/PageContext";
import "./style/FormConnect.css";
import Select from "react-select";

import "react-phone-number-input/style.css";
import { useTranslation } from "react-i18next";

const FormConnect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [checkBox, setCheckBox] = useState("off");

  const { line, language, handleSubmitForm } = useContext(pageContext);

  console.log("LINE", line);

  const { t } = useTranslation();

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleChangeCheckBox = () => {
    checkBox === "off" ? setCheckBox("on") : setCheckBox("off");
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const connectSubmit = {
      name: address,
      email: email,
      phone_number: contacts,
      question: text,
      line: 2,
    };

    handleSubmitForm(connectSubmit);

    setAddress("");
    setContacts("");
    setEmail("");
    setText("");
  };

  return (
    <div className="form_connect_main_wrapper">
      <div className="form_connect_wrapper">
        <div className="header_form_connect">
          <h3>JK Group</h3>
        </div>
        <form className="form_inputs" onSubmit={handleFormSubmit}>
          <div className="form_input_wrapper">
            <input
              value={address}
              type="text"
              onChange={e => setAddress(e.target.value)}
              placeholder={t("connect.name")}
              required
            />

            <PhoneInput
              international
              defaultCountry="KG"
              value={contacts}
              onChange={setContacts}
              required
            />

            <input
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder={t("connect.email")}
              required
            />
            <input
              value={text}
              type="text"
              onChange={e => setText(e.target.value)}
              placeholder={t("connect.question")}
              required
            />
            <select
              className="select"
              value={selectedOption}
              onChange={handleChange}
              required>
              <option value="">{t("connect.destinations")}</option>

              {line.map(line => (
                <>
                  <option key={line.id} value={line[`title_${language}`]}>
                    {line[`title_${language}`]}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="select_agreement">
            <input type="checkbox" onChange={handleChangeCheckBox} required />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quos
              quo. Illo aliquam distinctio maiores commodi atque amet quisquam
              quod rerum, iure nemo quis repudiandae natus iste eum harum
              reprehenderit quas nam quasi eos expedita blanditiis neque
              obcaecati! Consectetur, molestias.
            </p>
            <div className="select_agreement_button_wrapper">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormConnect;
