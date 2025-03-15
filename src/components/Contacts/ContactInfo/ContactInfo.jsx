import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactInfo.scss";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-info">
      <h3>{t("contact.title")}</h3>
      <ul>
        <li>
          <strong>📧 {t("contact.email")}:</strong> 
          <a href="mailto:artemtepliakov02@gmail.com" target="_blank">artemtepliakov02@gmail.com</a>
        </li>
        <li>
          <strong>📞 {t("contact.phone")}:</strong>
          <a href="tel:+34614466890" target="_blank">+34 (614) 46-68-90</a>
        </li>
        <li>
          <strong>🔗 {t("contact.linkedin")}:</strong> 
          <a href="https://www.linkedin.com/in/artem-tepliakov-184459353/" target="_blank" rel="noopener noreferrer">{t("logo.name")}</a>
        </li>
        <li>
          <strong>✈️ {t("contact.telegram")}:</strong> 
          <a href="https://t.me/Teplyakov_Artem" target="_blank" rel="noopener noreferrer">@Teplyakov_Artem</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;