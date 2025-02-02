import React from "react";
import "./Contacts.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contacts">
      <h2>{t("contacts_title")}</h2>
      <div className="contacts-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
