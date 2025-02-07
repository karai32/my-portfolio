import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputMask from "react-input-mask"; // Добавляем маску для телефона
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading"); // Показываем индикатор загрузки

    try {
      const response = await fetch("https://teplyakov.fun/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, message }), // Отправляем данные в JSON
      });

      const result = await response.json();
      if (response.ok) {
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
        <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t("contact_form.phone_placeholder")}
          required
        >
          {(inputProps) => <input type="tel" {...inputProps} />}
        </InputMask>

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
