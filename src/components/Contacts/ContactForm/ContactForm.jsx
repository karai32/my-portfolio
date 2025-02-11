import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { useTranslation } from "react-i18next";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch("https://teplyakov.fun/api/contact.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form">
      <h3>{t("contact_form.title")}</h3>

      {status === "success" && (
        <p className="success-message">{t("contact_form.success")}</p>
      )}
      {status === "error" && (
        <p className="error-message">{t("contact_form.error")}</p>
      )}
      {status === "loading" && (
        <p className="loading-message">{t("contact_form.loading")}</p>
      )}

      <form onSubmit={handleSubmit}>
        <MaskedInput
          mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
          placeholder={t("contact_form.phone_placeholder")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        
        <textarea
          placeholder={t("contact_form.message_placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" disabled={status === "loading"}>
          {t("contact_form.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
