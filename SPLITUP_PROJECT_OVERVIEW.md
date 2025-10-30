# SPLITUP Project Overview

_Last updated: 2025-10-29_

---

## 🧭 Project Summary
**SplitUp** is a trauma-informed educational and support app designed to help individuals navigate divorce, separation, and custody-related challenges. The app provides curated legal and psychological content, practical tools, and supportive resources to reduce confusion and stress during the family court process.

**Primary Platforms:** iOS and Android smartphones (tablet-optimized).  
**Development Framework:** React Native + Expo.  
**Goal:** Build a clean, fast, and reliable mobile app MVP that can generate revenue while scaling toward App Store and Play Store release.

---

## 🏗️ Tech Stack
| Layer | Technology / Tool | Purpose |
|--------|------------------|----------|
| **Frontend (App)** | React Native + Expo | Cross-platform mobile development |
|  | Expo Router / React Navigation | App navigation |
|  | Expo Notifications | Push notifications |
| **Backend / Data** | Firebase Auth | Authentication |
|  | Firestore | User data, content metadata, community posts |
|  | Firebase Cloud Functions | Logic for access checks and signed URLs |
| **Storage** | AWS S3 + CloudFront | Premium video + PDF hosting |
|  | YouTube (Unlisted) | Free video content |
| **Payments** | RevenueCat | Apple + Google subscription handling |
|  | Stripe | Web subscriptions + pre-launch revenue |
| **Admin Dashboard** | Next.js + Tailwind | Internal content management |
|  | Vercel | Deployment and hosting |
| **Analytics** | Firebase Analytics | App usage tracking |
|  | Plausible (optional) | Simple web analytics |
| **AI-Assisted Development** | Cursor | AI pair programming, refactoring, context-aware debugging |
| **Version Control / CI** | GitHub | Code hosting and tracking |
| **Build System** | Expo EAS | iOS and Android builds / store submission |

---

## 👤 Developer Setup (Solo Project)
This project is developed and managed solely by **Tom Johnson**.  
All cloud accounts, credentials, and infrastructure remain under direct ownership and control.

### Key Accounts
| Service | Owner | Notes |
|----------|--------|--------|
| Firebase | Tom Johnson | Auth, Firestore, Cloud Functions |
| AWS (S3 + CloudFront) | Tom Johnson | Premium content hosting |
| Stripe | Tom Johnson | Web payments |
| RevenueCat | Tom Johnson | Subscription management |
| Vercel | Tom Johnson | Admin dashboard hosting |
| GitHub | Tom Johnson | Repositories, version control |

---

## 📅 Phase Roadmap
| Phase | Goal | Target | Status |
|--------|------|---------|--------|
| **0 – Setup** | Create accounts, repos, Firebase project, AWS S3, and Stripe connections. | Nov 2025 | ☐ |
| **1 – MVP App** | Build smartphone-first app with core screens, auth, paywall, and content playback. | Dec 2025 | ☐ |
| **2 – Admin Dashboard** | Build internal dashboard for uploading videos, PDFs, and managing metadata. | Jan 2026 | ☐ |
| **3 – QA / Test Builds** | TestFlight + Android internal testing, fix bugs, finalize UI/UX. | Feb 2026 | ☐ |
| **4 – Public Launch** | Submit to Apple App Store + Google Play, begin marketing rollout. | Mar 2026 | ☐ |

---

## ✅ Task Tracker (Ongoing)
| ID | Task | Status | Notes |
|----|-------|--------|--------|
| T-001 | Set up Firebase project (Auth, Firestore, Functions) | ☐ |  |
| T-002 | Configure AWS S3 bucket + CloudFront | ☐ | For premium video + PDF hosting |
| T-003 | Connect Expo app to Firebase | ☐ | Auth + Firestore integration |
| T-004 | Implement user login / signup screen | ☐ |  |
| T-005 | Create Firestore structure for content categories | ☐ |  |
| T-006 | Build video player screen | ☐ | Support YouTube (free) + AWS (premium) |
| T-007 | Add Stripe checkout flow for early access | ☐ |  |
| T-008 | Integrate RevenueCat for Apple + Google billing | ☐ |  |
| T-009 | Build admin dashboard (Next.js + Tailwind) | ☐ | Upload + content management |
| T-010 | Create TestFlight + Play Store builds via Expo EAS | ☐ |  |
| T-011 | Write privacy policy + terms | ☐ | For App Store submission |
| T-012 | Launch and monitor analytics | ☐ | Firebase Analytics setup |

---

## 📂 Folder Structure
```text
splitup-app/
├── app/                     # Expo / React Native app code
├── admin-dashboard/         # Next.js CMS for content management
├── cloud-functions/         # Firebase backend logic
├── assets/                  # Icons, logos, thumbnails
├── docs/                    # Documentation files (.md)
│   └── SPLITUP_PROJECT_OVERVIEW.md
└── README.md
```

---

## ⚙️ Development Standards
- **Branching:** `main` for production, `dev` for staging, feature branches for work.
- **Commits:** Follow Conventional Commit style (`feat:`, `fix:`, `chore:`).
- **Pull Requests:** Required before merging into `main`.
- **Issue Tracking:** Use GitHub Issues + milestones.
- **Code Quality:** Use ESLint + Prettier.
- **AI Assistance:** Use **Cursor** for:
  - Refactoring React components
  - Auto-generating repetitive UI patterns
  - Reviewing Firebase functions
  - Writing tests and docs inline

---

## 🗓️ Update & Review Cadence
| Type | Frequency | Platform |
|------|------------|-----------|
| Project Review | Weekly | Within ChatGPT + Markdown update |
| Build Checkpoint | Bi-weekly | TestFlight / Android internal |
| Admin / Content Review | Monthly | Dashboard audit |

---

## 📊 Metrics to Monitor
- User signups (Firebase)
- Subscription conversions (RevenueCat / Stripe)
- Content engagement (Firebase Analytics)
- Error rates + crash reports (Expo + Firebase)
- Retention rate (month-over-month)

---

## 🧾 Changelog
| Date | Change | Author |
|------|---------|--------|
| 2025-10-29 | Created finalized SplitUp Project Overview | Tom Johnson |
