import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Для отображения успешного/неуспешного отправления

  useEffect(() => {
    // Подключаем jQuery для маски телефона
    const script = document.createElement("script");
    script.src = "/jquery.maskedinput.min.js"; // Подключаем из public
    script.onload = () => {
      if (window.jQuery) {
        window.jQuery(function ($) {
          $("#phone-input").mask("+7 (999) 999-99-99");
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading"); // Показываем, что отправка идет

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch("https://teplyakov.fun/api/contact.php", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    // Очищаем поля формы
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <h3>{t("contact_form.title")}</h3>
      {status === "success" && <p className="success-message">{t("contact_form.success")}</p>}
      {status === "error" && <p className="error-message">{t("contact_form.error")}</p>}
      {status === "loading" && <p className="loading-message">{t("contact_form.loading")}</p>}

      <form onSubmit={handleSubmit}>
        <input
          id="phone-input"
          type="tel"
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
        <button type="submit">{t("contact_form.submit")}</button>
      </form>
    </div>
  );
};

export default ContactForm;
