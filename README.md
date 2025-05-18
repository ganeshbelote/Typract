# ⌨️ Typrac - Typing Speed Test App

Typrac is a web-based typing speed test application built with **React**. It calculates your **Words Per Minute (WPM)**, **accuracy**, and tracks your typing progress in real time.

---

## 🚀 Features

- 📝 Real-time typing test
- 📊 WPM (Words Per Minute) calculation
- 🎯 Accuracy tracking
- ⏱️ Duration counter
- 🔄 Fully responsive UI
- 💻 Built with React + Tailwind CSS

---

## 📷 Preview

![Screenshot of Typrac](./screenshot.png)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ganeshbelote/Typract.git
cd Typract/client
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧠 How It Works

* The app displays a long static paragraph.

* You type in the hidden input field.

* It compares each typed character to the target character.

* WPM is calculated as:
  $`wordCount / duration * 60`$

* Accuracy is calculated as:
  $`correctChars / totalChars * 100`$

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository.
2. **Create a new branch** for your feature/bugfix:

   ```bash
   git checkout -b your-feature-name
   ```
3. **Commit** your changes:

   ```bash
   git commit -m "Add your message"
   ```
4. **Push** to your fork:

   ```bash
   git push origin your-feature-name
   ```
5. **Create a Pull Request** from GitHub.

---

## 📂 Folder Structure

```
client/
├── assets/
├── components/
│   ├── Display.jsx
│   ├── Result.jsx
├── App.jsx
├── main.jsx
├── index.css
```

---

## 📄 License

This project is open source under the [MIT License](./LICENSE).

---

## 🙋‍♂️ Author

* [Ganesh Belote](https://github.com/ganeshbelote)

```

---

Let me know if you want to include:

- A contributors section
- A backend setup
- Demo GIF
- Deployment instructions (e.g. Netlify, Vercel)
```
