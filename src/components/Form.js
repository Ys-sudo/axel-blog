import React from "react";
import { navigate } from "gatsby-link";

const formData = require("form-data");

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    let fileinput = document.getElementById("fileinput");
    let file = fileinput.files[0];

    let submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    setTimeout(function () {
      submitBtn.disabled = false;
    }, 2000);

    if (file !== undefined && file.size < 1048576) {
      e.preventDefault();
      const form = e.target;

      let formdata;
      formdata = encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      });

      fetch("/", {
        method: "POST",
        body: formdata,
      })
        .then(() => {
          navigate("/kontakt/dziekujemy/");
        })
        .catch((error) => alert(error));
    } else if (file.size > 1048576) {
      alert(
        "Plik jest zbyt duży. Maksymalna wielkość to 1MB, spróbuj ponownie z mniejszym plikiem"
      );
      e.preventDefault();
    } else if (file === undefined) {
      e.preventDefault();
      const form = e.target;

      let formdata;
      formdata = encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      });

      fetch("/", {
        method: "POST",
        body: formdata,
      })
        .then(() => {
          navigate("/kontakt/dziekujemy/");
        })
        .catch((error) => alert(error));
    }
  };

  render() {
    return (
      <div id="kontakt" className="flex justify-center">
        <form
          name="kontakt"
          id="kontaktform"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/kontakt/dziekujemy/"
          onSubmit={this.handleSubmit}
          className="bg-blue-300 shadow-lg rounded-lg p-2 md:p-10 w-full max-w-2xl"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="Formularz" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          {/* Name Field */}
          <div className="mb-2">
            <label className="block font-semibold mb-1" htmlFor="name">
              Imię i Nazwisko<sup>*</sup>:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="imię i nazwisko"
              onChange={this.handleChange}
              id="imię-i-nazwiskonew"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-2">
            <label className="block font-semibold mb-1" htmlFor="email">
              Adres E-mail<sup>*</sup>:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              name="adres email"
              onChange={this.handleChange}
              id="adres-emailnew"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1" htmlFor="numertelnew">
              Numer telefonu<sup>*</sup>:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="tel"
              name="numer telefonu"
              onChange={this.handleChange}
              id="numertelnew"
              required
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Załącz plik:</label>
            <input
              className="w-full border p-2 rounded-md cursor-pointer"
              type="file"
              name="plik"
              onChange={this.handleAttachment}
              id="fileinput"
            />
            <p className="text-xs text-white bg-gray-800 p-1 text-center mt-2">
              Maksymalna wielkość pliku to <b>1MB</b>.
            </p>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1" htmlFor="wiadomośćnew">
              Wiadomość<sup>*</sup>:
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              name="wiadomość"
              onChange={this.handleChange}
              id="wiadomośćnew"
              required
              rows="5"
            ></textarea>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              required
              onChange={this.handleChange}
              type="checkbox"
              id="privacynew"
              name="privacy"
              value="true"
              className="mr-2"
            />
            <label className="text-sm" htmlFor="privacynew">
              Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą
              <a
                className="text-white underline ml-1"
                href="https://axel-travel.pl/privacyrodo/"
              >
                polityką prywatności
              </a>
              <sup>*</sup>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              className="px-5 py-2 bg-blue-600 text-white rounded-md border border-white hover:bg-blue-700 transition"
              onClick={showFileSize}
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function showFileSize() {
  let fileinput = document.getElementById("fileinput");

  let file = fileinput.files[0];

  if (file !== undefined) {
    console.log(file.size);
  }
}

export default ContactForm;
