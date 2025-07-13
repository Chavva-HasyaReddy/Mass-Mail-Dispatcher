
# 📧 Mass-Mail Dispatcher

Mass-Mail Dispatcher is a web-based tool built using HTML, CSS, and JavaScript that allows users to upload a list of email addresses, validate them, and send bulk emails using an interactive interface. It provides features for identifying valid and invalid email addresses and a form to write and send messages via SMTP.

---

## 🚀 Features

- 📤 Upload `.csv` file containing email addresses.
- ✅ Automatically validates email addresses.
- 📋 Displays separate lists of valid and invalid emails.
- 📝 Compose email with subject and message body.
- 📨 Send emails using [SMTP.js](https://smtpjs.com/).
- ⬆️ Smooth scroll-to-top button for easy navigation.
- 🎨 Responsive and visually appealing interface using **CSS animations** and **Font Awesome icons**.

---

## ⚙️ How It Works

1. **Upload Email List**: 
   - The user uploads a `.csv` file containing a list of email addresses.
   - JavaScript reads the file and extracts emails line by line.

2. **Email Validation**:
   - Each email address is checked using a regular expression.
   - Valid and invalid emails are displayed in two separate tables on the page.

3. **Compose Email**:
   - The user enters the sender email, subject, and body in the provided form.
   - When the form is submitted, an SMTP email is sent to the intended recipient.

4. **Send Email**:
   - Uses the `Email.send()` function from SMTP.js with user-provided credentials and content.
   - A confirmation alert is shown once the email is sent successfully.

5. **Scroll Navigation**:
   - The page includes a scroll-to-top button for easy navigation.
   - Automatic scrolling to valid/invalid email sections upon upload.

---

## 📂 Project Structure

```
Mass-Mail-Dispatcher/
│
├── index.html         # Main HTML page
├── style.css          # Styling for the page
├── script.js          # JavaScript logic for validation and mail sending
```

---

## 🔗 GitHub Repository

Project Source Code: [Mass Mail Dispatcher GitHub](https://github.com/Chavva-HasyaReddy/Mass-Mail-Dispatcher)

---

## 📽️ Demo Video

Watch the project demo video here:  
▶️ [Mass Mail Dispatcher Demo – Google Drive](https://drive.google.com/file/d/1z08L8QAN40YUvEzUJYPSDcAvurixWnmG/view?usp=sharing)

---

## 📄 Project Report

Read the full project report here:  
📘 [Mass Mail Dispatcher Report – Google Drive](https://drive.google.com/file/d/1rU7ERlE5Vd2WAPY4a71O-Ux-7YkCqvuQ/view?usp=sharing)

---

## 🛠️ How to Use

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Upload a `.csv` file with email addresses.
4. Enter the sender email, subject, and message.
5. Click **Send** to dispatch emails to all valid addresses.

---

## 📧 SMTP Configuration

Update your credentials in `script.js`:

```js
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "your-email@example.com",
  Password: "your-smtp-password",
  ...
});
```

> ⚠️ **Use environment variables or secure storage in production. Never expose SMTP credentials directly in code.**

---

## 📚 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- SMTP.js
- Font Awesome
- Animate.css

---

## 👨‍💻 Authors

- **Chavva Hasya Reddy**

---

## 📄 License

This project is licensed for educational and demonstration purposes. For any commercial use, please contact the author.
