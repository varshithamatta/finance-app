# 💰 MyFinanceApp

Cross-platform personal finance management application built with **React Native (Expo Router)**.  
The app helps users track expenses, manage budgets, sync data to the cloud, and get **AI-powered financial insights**.  
It also supports **multilingual users** and follows basic security best practices.

---

## ✨ Features
- 📊 Track income and expenses
- 🎯 Create and monitor budgets
- ☁️ Cloud sync with Firebase (auth + Firestore)
- 🤖 AI-driven financial insights (via OpenAI API)
- 🌐 Multilingual support with i18next
- 🔒 Secure storage (expo-secure-store)
- 📱 Cross-platform (iOS, Android, Web with Expo)

---

## 🛠️ Tech Stack
- **Frontend**: React Native + Expo Router  
- **Backend/Cloud**: Firebase (Auth, Firestore, Functions)  
- **AI Integration**: OpenAI API (via backend function)  
- **Internationalization**: i18next + expo-localization  
- **State/Storage**: AsyncStorage, SecureStore  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/my-finance-app.git
cd my-finance-app
```
### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npx expo start
```

- Press **a** for Android emulator
- Press **i** for iOS simulator (Mac only)
- Or scan the QR in **Expo Go** on your phone

## Project Structure
```bash
finance-app/
   app/
    _layout.js
    index.js
    add.js
   src/
   docs/
   package.json
   app.json
   README.md
```

