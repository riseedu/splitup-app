# SPLITUP Detailed Task Breakdown

_Last updated: 2025-10-29_

---

## 🧭 Purpose
This document provides a detailed task-level breakdown for the SplitUp MVP development.  
Each task aligns with the roadmap phases in the main `SPLITUP_PROJECT_OVERVIEW.md` document.

---

## 🏁 Phase 0 – Setup (Nov 2025)

### 🔹 Environment & Accounts
- [ ] Create and configure **Firebase** project (Auth, Firestore, Functions)
- [ ] Create **AWS S3** bucket + **CloudFront** distribution for premium content
- [ ] Create **Stripe** account for web payment processing
- [ ] Create **RevenueCat** project for Apple + Google subscription sync
- [ ] Create **Vercel** account for admin dashboard hosting
- [ ] Create **GitHub** repository (`splitup-app`)
- [ ] Initialize **Expo project** locally (`npx create-expo-app splitup`)
- [ ] Set up **.gitignore**, ESLint, Prettier, and README.md
- [ ] Test Expo environment using sample project build

### 🔹 Documentation
- [ ] Add finalized `SPLITUP_PROJECT_OVERVIEW.md` and this file to `/docs`
- [ ] Create a LICENSE file and CONTRIBUTING guide
- [ ] Add a simple `README.md` for repo introduction

---

## 📱 Phase 1 – MVP App Development (Dec 2025)

### 🔹 Core App Foundation
- [ ] Connect Expo project to Firebase SDK
- [ ] Implement Firebase Auth (email/password)
- [ ] Set up Firestore data models (users, videos, categories, favorites)
- [ ] Create Firebase Cloud Function for premium content validation
- [ ] Implement secure storage of AWS signed URLs for premium assets

### 🔹 UI / UX Setup
- [ ] Define typography and color scheme (based on brand guide)
- [ ] Implement responsive layout for phones and tablets
- [ ] Create reusable UI components (buttons, cards, modals, lists)
- [ ] Add light/dark mode toggle

### 🔹 Screens to Build
| Screen | Description | Key Features |
|---------|--------------|--------------|
| **Welcome / Splash** | Initial app launch screen | Logo animation, quick navigation |
| **Login / Signup** | Auth screen using Firebase | Validation, password reset |
| **Home (Main Menu)** | Lists content categories | Scrollable cards, featured content |
| **Video Library** | Displays video thumbnails and metadata | Free + Premium content toggle |
| **Video Player** | Plays hosted or YouTube video | Playback controls, progress tracking |
| **Digital Downloads** | Lists available worksheets/journals | Download via AWS signed URLs |
| **Community (v1)** | Simple thread/post structure | Firebase posts + comments |
| **Profile / Settings** | Manage subscription + profile | Link to App Store / Google Play billing |

### 🔹 Payments & Access
- [ ] Add **Stripe** checkout for web pre-launch users
- [ ] Add **RevenueCat** integration for Apple / Google in-app purchases
- [ ] Create logic to sync subscription status to Firestore

### 🔹 Notifications
- [ ] Integrate **Expo Notifications**
- [ ] Configure Firebase Cloud Messaging for push triggers
- [ ] Create example notification for “New content added”

### 🔹 Testing
- [ ] Set up local and simulator testing (iOS + Android)
- [ ] Create minimal Jest test suite for app logic
- [ ] Verify Firebase integration in both environments

---

## 💻 Phase 2 – Admin Dashboard (Jan 2026)

### 🔹 Core Setup
- [ ] Create Next.js app with Tailwind CSS
- [ ] Deploy to **Vercel**
- [ ] Connect dashboard to Firebase Admin SDK

### 🔹 Features
| Feature | Description |
|----------|--------------|
| **Auth (Admin-only)** | Restrict access by Firebase role |
| **Video Upload Form** | Uploads to S3 + writes metadata to Firestore |
| **PDF Upload Form** | Uploads worksheets / journals to S3 |
| **Content Manager** | Edit, delete, categorize videos & PDFs |
| **Event Manager** | Manage webinars / challenges list |
| **Analytics View** | Display metrics from Firebase + Stripe |

---

## 🧪 Phase 3 – QA / Test Builds (Feb 2026)
- [ ] Configure **Expo EAS** builds for TestFlight + Google Internal Testing
- [ ] Invite test users and collect feedback
- [ ] Conduct regression testing on all app features
- [ ] Fix visual bugs and content linking issues
- [ ] Verify push notifications work on real devices
- [ ] Test premium access with live billing sandbox

---

## 🚀 Phase 4 – Public Launch (Mar 2026)
- [ ] Submit app to **Apple App Store** (TestFlight → Production)
- [ ] Submit app to **Google Play Store**
- [ ] Verify Privacy Policy and Terms of Use compliance
- [ ] Finalize pricing tiers and subscription descriptions
- [ ] Enable production billing + monitor with RevenueCat
- [ ] Announce release via website and mailing list
- [ ] Monitor analytics for user retention + error tracking

---

## 🧾 Post-Launch Tasks (Ongoing)
- [ ] Add new categories and videos monthly
- [ ] Introduce gamification features (badges, progress tracking)
- [ ] Improve community features (likes, replies, filtering)
- [ ] Add AI Divorce Coach (phase 2.0 concept)
- [ ] Enhance analytics dashboards and reporting

---

## 📊 Tracking Summary
| Phase | Focus | Completion Target | Status |
|--------|--------|-------------------|--------|
| Setup | Accounts & environment | Nov 2025 | ☐ |
| MVP | Core mobile app | Dec 2025 | ☐ |
| Admin Dashboard | Internal CMS | Jan 2026 | ☐ |
| QA | Testing and bug fixes | Feb 2026 | ☐ |
| Launch | App Store + Play Store | Mar 2026 | ☐ |

---

## 📘 Notes
- Development will leverage **Cursor** for AI-assisted coding and refactoring.  
- Firebase and AWS should be configured under the same `splitup-app` namespace.  
- GitHub commits should follow structured naming for clear progress tracking.  
- ChatGPT and this `.md` document serve as the **source of truth** for project planning and updates.

