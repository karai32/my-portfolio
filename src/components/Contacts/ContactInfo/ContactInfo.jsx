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
          <a href="mailto:artemtepliakov02@gmail.com">artemtepliakov02@gmail.com</a>
        </li>
        <li>
          <strong>📞 {t("contact.phone")}:</strong> 
          <a href="tel:+79133747345">+7 913 374 73 45</a>
        </li>
        <li>
          <strong>🔗 {t("contact.vk")}:</strong> 
          <a href="https://vk.com/artemteplyakov" target="_blank" rel="noopener noreferrer">vk.com/artemteplyakov</a>
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