import * as React from "react";
import { useState } from "react";
import { navigate } from "gatsby";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
    file: null,
    "form-name": "kontakt",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1048576) {
      alert("Plik jest zbyt duży. Maksymalna wielkość to 1MB.");
      return;
    }
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "file" && data[key]) {
        formData.append(key, data[key], data[key].name);
      } else {
        formData.append(key, data[key]);
      }
    });
    return formData;
  };

  const sendToDiscord = async (formData) => {
    const webhookURL =
      "https://discord.com/api/webhooks/1357510497162887379/ael9N4AWZC7BXkbCzdfroMmk_A0bKtwU7I_QFARsjtIb_-CEB5_yykB62OZGHdd0kDvD";

    const payload = {
      content: `📩 **New Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`,
      username: "Form Bot",
      // avatar_url: "https://your-avatar-url.com/avatar.png", // Optional
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to Discord.");
      }
    } catch (error) {
      console.error("Discord Webhook Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    setTimeout(() => (submitBtn.disabled = false), 2000);

    fetch("/", {
      method: "POST",
      body: encode(formData),
    })
      .then(() => {
        // tymczasowo nie działa przycisk do skopiowania url webhooka testowane i dziala git. - workaround hack na discord przez response z endpointa
        sendToDiscord(formData); // Sends data to Discord
        navigate("/kontakt/dziekujemy/");
      })
      .catch((error) => alert("Błąd przesyłania: " + error.message));
  };

  return (
    <div id="kontakt" className="flex justify-center">
      <form
        name="kontakt"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="bg-blue-300 shadow-lg rounded-lg p-4 md:p-10 w-full max-w-2xl"
      >
        <input type="hidden" name="form-name" value="kontakt" />

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="name">
            Imię i Nazwisko<sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="email">
            Adres E-mail<sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="phone">
            Numer telefonu<sup>*</sup>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Załącz plik:</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md cursor-pointer"
          />
          <p className="text-xs text-gray-800 mt-2">
            Maksymalna wielkość pliku to <b>1MB</b>.
          </p>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="message">
            Wiadomość<sup>*</sup>
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="5"
          ></textarea>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="privacy"
            required
            checked={formData.privacy}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">
            Wyrażam zgodę na przetwarzanie moich danych zgodnie z{" "}
            <a href="/privacy-policy" className="text-white underline">
              polityką prywatności
            </a>
            <sup>*</sup>.
          </label>
        </div>

        <button
          type="submit"
          className={`w-full px-6 py-3 rounded-lg shadow ${
            formData.privacy
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
