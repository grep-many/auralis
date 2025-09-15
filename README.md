# 🚀 Auralis - Meditation & Affirmation App

A modern, feature-rich meditation and affirmation mobile application built with **React Native** and **Expo**. Auralis helps users relax, focus, and improve mindfulness with guided meditations, nature sounds, and affirmations.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Stack](https://img.shields.io/badge/Stack-React%20Native%20%7C%20Expo-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 📋 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Prerequisites](#-prerequisites)
* [Installation & Setup](#-installation--setup)
* [Running the Application](#-running-the-application)
* [Contributing](#-contributing)
* [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🧘 Guided Meditations

* Multiple meditation sessions
* Nature and ambient sounds
* Adjustable meditation durations
* Sleep and relaxation-focused meditations

### 💭 Affirmations

* Daily positive affirmations
* Category-wise affirmation galleries
* Beautiful background imagery
* Smooth transitions and animations

### 🎨 Modern UI/UX

* Responsive design with **Tailwind CSS**
* Dark/Light theme support
* Gradient backgrounds and visually appealing components
* Interactive buttons and animations
* Real-time audio playback controls

### 🔊 Audio & Media

* Support for multiple audio tracks
* Play, pause, and stop functionality
* Background playback support
* Integration with device audio settings

---

## 🛠 Tech Stack

* **React Native** - Core framework
* **Expo** - Development and build tools
* **TypeScript** - Type-safe development
* **NativeWind** - Tailwind CSS in React Native
* **Expo AV** - Audio playback
* **React Navigation** - Navigation management
* **Expo Linear Gradient** - Gradient backgrounds
* **Prettier + ESLint** - Code quality & formatting

---

## 📁 Project Structure

```
auralis/
├── app/                          # Main app source
├── assets/                       # Images, audio, and fonts
├── components/                   # Reusable UI components
├── constants/                    # App-wide constants
├── context/                      # React contexts
├── scripts/                      # Utility scripts
├── android/                       # Android native project
├── ios/                           # iOS native project
├── babel.config.js                # Babel configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies & scripts
└── README.md                      # Project documentation
```

---

## 📋 Prerequisites

* **Node.js** (v18 or higher)
* **npm** or **yarn**
* **Expo CLI** (`npx expo`)
* Android Studio / Xcode for emulators (optional)

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/grep-many/auralis.git
cd auralis
```

### 2. Install dependencies

```bash
npx expo install
# or using npm
npm install
```

---

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start Expo development server**

```bash
npx expo start
```

2. **Run on device/emulator**

* Press `a` for Android
* Press `i` for iOS
* Scan QR code with **Expo Go** app

### Build for Production

```bash
npx expo build:android
npx expo build:ios
```

---
## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m 'Add awesome feature'`)
4. Push branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

* **Expo** - Simplifies React Native development
* **NativeWind** - Tailwind for React Native
* **React Navigation** - Navigation library
* **Tailwind CSS** - Utility-first styling
* Free meditation & affirmation image resources

---

**Happy Meditating! 🧘‍♂️✨**
