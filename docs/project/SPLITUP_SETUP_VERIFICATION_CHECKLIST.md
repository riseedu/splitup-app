# SPLITUP Setup Verification Checklist

_Last updated: 2025-10-29_

Use this single page to confirm your repo + tooling are fully ready before starting development in Cursor/Expo. Check off each item.

---

## ✅ Repo & Docs Structure
- [x] GitHub repo **riseedu/splitup-app** created
- [x] Default branch: `main`
- [x] `/docs/README.md` present
- [x] `/docs/project/` contains:
  - [x] `SPLITUP_PROJECT_OVERVIEW.md`
  - [x] `SPLITUP_TASKS.md`
  - [x] `SPLITUP_TIMELINE.md`
  - [x] `SPLITUP_RELEASE_NOTES.md`
  - [x] `SPLITUP_CHANGELOG_TEMPLATE.md`
- [x] Changelog placeholders created (optional): `/docs/changelog/*`
- [x] Placeholders exist for assets + references (optional)

## ✅ Git Hygiene
- [x] `.gitignore` committed (React Native + Expo + macOS)
- [x] `.gitattributes` (optional): `*.md text`
- [x] Commit style: Conventional (`docs:`, `feat:`, `fix:`, `chore:`)

## ✅ Accounts & Ownership (Solo Dev)
- [ ] **GitHub** (repo owner: Tom Johnson)
- [ ] **Firebase** project created (Auth, Firestore, Functions)
- [ ] **AWS** S3 bucket + CloudFront for premium content
- [ ] **Stripe** account for web checkout
- [ ] **RevenueCat** project for in‑app subscriptions
- [ ] **Vercel** account (for admin dashboard hosting)

> Keep all cloud accounts under your sole ownership. Enable 2FA.

## ✅ Local Environment (Mac)
- [ ] Node.js ≥ 18 and npm (or Yarn) installed
- [ ] **Expo CLI** installed: `npm i -g expo`
- [ ] **Xcode** (iOS Simulator) installed & signed in
- [ ] **Android Studio** (Android emulator) installed
- [ ] **GitHub Desktop** or CLI configured
- [ ] **Cursor** installed and able to open the repo

### Quick install commands
```bash
# Node (if needed): https://nodejs.org
npm i -g expo eas-cli
expo --version && eas --version
```

## ✅ Secrets & Config Files (DO NOT COMMIT)
- [ ] `GoogleService-Info.plist` (iOS Firebase config) – local only
- [ ] `google-services.json` (Android Firebase config) – local only
- [ ] `.env` for app secrets (Stripe keys, API URLs) – local only
- [ ] AWS S3 access via IAM user + least-privilege policy
- [ ] Keep all secrets out of Git (covered by `.gitignore`)

---

## ▶️ Next Steps (Phase 0 → Phase 1 Kickoff)

### 1) Initialize the Expo app
```bash
cd /path/to/splitup-app
npx create-expo-app@latest app --template blank-typescript
cd app
npm i
git add . && git commit -m "feat: initialize Expo app (TypeScript)"
git push origin main
```

### 2) Add Firebase to the app
```bash
npm i firebase
# create app/lib/firebase.ts and wire up Auth & Firestore per overview
```

### 3) Connect AWS for premium content
- Create S3 bucket + CloudFront
- Plan signed-URL flow via Firebase Functions

### 4) Payments
- **Stripe** for early web checkout (pre‑launch revenue)
- **RevenueCat** for iOS/Android subscriptions

### 5) Admin Dashboard (Next.js on Vercel)
- Initialize a `admin-dashboard/` folder later per roadmap

---

## 🧪 Readiness Smoke Test
- [ ] `expo start` runs locally and opens iOS/Android simulators
- [ ] Firebase Auth: create/test user via email/password
- [ ] Firestore: read/write test doc
- [ ] Linting/formatting working (`eslint`, `prettier` optional)
- [ ] First TestFlight/Android internal build planned with EAS

---

## 📌 Notes
- Keep this file in `/docs/project/` or at `/docs/` for easy access.
- Update weekly alongside `SPLITUP_RELEASE_NOTES.md`.
