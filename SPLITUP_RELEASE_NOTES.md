# SPLITUP Release Notes

_Last updated: 2025-10-29_

---

## 🧭 Purpose
This document provides a chronological log of all **SplitUp app releases**, including internal test builds, feature updates, and bug fixes.  
It complements the main project documentation by capturing version-specific changes and outcomes.

---

## 🧩 Version Tracking Format
Each release entry includes:
- **Version ID** — Semantic version (e.g., `v1.0.0`, `v0.9.2-beta`)
- **Date** — When the build was deployed or uploaded
- **Environment** — Dev / Test / Production
- **Type** — Major / Minor / Patch
- **Summary** — Short overview of changes
- **Details** — Expanded breakdown of new features, fixes, and improvements

---

## 📘 Active Development Versions

| Version | Date | Environment | Type | Summary |
|----------|------|-------------|------|----------|
| `v0.1.0-setup` | Nov 2025 | Dev | Setup | Environment configuration and initial repo setup |
| `v0.2.0-alpha` | Dec 2025 | Dev | Alpha | Initial MVP build with Firebase auth and Firestore integration |
| `v0.3.0-beta` | Jan 2026 | Test | Beta | Feature-complete MVP under internal testing (TestFlight + Android) |
| `v1.0.0` | Mar 2026 | Prod | Major | Public release on App Store and Play Store |

---

## 🧱 v0.1.0-setup — Initial Setup (Nov 2025)
**Environment:** Development  
**Status:** ✅ Complete

### Summary
The first configuration phase for the SplitUp app project.  
All foundational systems and accounts were established, ensuring secure ownership and functional integration.

### Key Updates
- Firebase project created (Auth, Firestore, Functions)
- AWS S3 bucket and CloudFront distribution configured
- Stripe + RevenueCat accounts linked
- GitHub repository initialized (`splitup-app`)
- Expo environment tested successfully (base project build)

### Next Steps
- Begin Phase 1: MVP app development (core UI, auth, Firestore)

---

## 🚧 v0.2.0-alpha — MVP Alpha Build (Dec 2025)
**Environment:** Development  
**Status:** ⏳ In Progress

### Summary
This release will represent the first functional MVP version of SplitUp for internal testing. Focus is on authentication, data structure, and core screen navigation.

### Planned Features
- Firebase Auth (email/password)
- Firestore setup for content and users
- AWS S3 connection for premium content
- Stripe + RevenueCat early integration
- Basic UI (Home, Login, Video Library, Video Player)

### Known Goals
- Focus exclusively on smartphone layouts first
- Ensure tablet UI responsiveness baseline

---

## 🧪 v0.3.0-beta — Internal Test Build (Jan–Feb 2026)
**Environment:** TestFlight / Google Internal Testing  
**Status:** ☐ Pending

### Summary
This version includes all MVP features and begins end-to-end QA and user testing. Feedback from internal testers will guide launch readiness.

### Expected Features
- Fully functional app navigation and content display
- Integrated payment systems (Stripe + RevenueCat)
- Working notifications (Expo + Firebase Cloud Messaging)
- Functional Admin Dashboard (Next.js on Vercel)
- Optimized Firebase rules for data access

### Testing Objectives
- Validate subscription gating logic
- Verify build stability on both iOS and Android
- Collect analytics + crash reports

---

## 🚀 v1.0.0 — Public Launch (Mar 2026)
**Environment:** Production  
**Status:** ☐ Upcoming

### Summary
The first public release of the SplitUp app. Available for free users and premium subscribers through App Store and Play Store listings.

### Key Inclusions
- App Store and Play Store listings live
- Finalized privacy policy, terms, and support pages
- Marketing site linked (Wix)
- In-app billing fully enabled
- Initial push notification campaigns

### Post-Launch Priorities
- Monitor crash analytics and retention rates
- Schedule v1.1.0 performance and UX update
- Begin planning AI Divorce Coach (Phase 2.0)

---

## 📈 Future Planned Versions
| Version | Target | Description |
|----------|---------|-------------|
| `v1.1.0` | Apr 2026 | UI/UX refinements, improved analytics, content updates |
| `v1.2.0` | May 2026 | Expanded community features (threads, likes, replies) |
| `v2.0.0` | Jul 2026 | Launch of AI Divorce Coach feature and gamification layer |

---

## 🧾 Notes
- All builds are to be archived and versioned in GitHub under `/releases` or tagged in Expo EAS.  
- Test builds should include changelogs for internal documentation.  
- Each release update will be mirrored here and in the `SPLITUP_PROJECT_OVERVIEW.md` changelog section.

