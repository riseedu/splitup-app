# SPLITUP Changelog Template

_Last updated: 2025-10-29_

---

## 🧭 Purpose
This changelog template is used to record incremental updates, patches, and feature adjustments between official releases.  
Each entry should be timestamped and added under the relevant version from the `SPLITUP_RELEASE_NOTES.md` file.

---

## 🧩 Format Guide
Each changelog entry should follow this structure:

### 🔖 Version: `vX.Y.Z` — [Type of Update]
**Date:** YYYY-MM-DD  
**Environment:** Dev / Test / Prod  
**Author:** Tom Johnson  

#### Summary
> Brief 1–2 sentence overview of what changed.

#### 🆕 Added
- List new features or additions here.

#### ♻️ Changed
- List modified behaviors, UI updates, or feature improvements.

#### 🐛 Fixed
- List bugs or errors that were resolved.

#### 🚀 Deployment Notes
- Specify if a build, commit, or branch merge was deployed (include build ID or commit hash if relevant).

---

## 🧱 Example Entry

### 🔖 Version: `v0.2.0-alpha` — MVP Build Progress Update
**Date:** 2025-12-10  
**Environment:** Dev  
**Author:** Tom Johnson  

#### Summary
> Core authentication and initial Firestore integration complete. Testing content retrieval logic and UI polish underway.

#### 🆕 Added
- Firebase Auth implemented (email/password)  
- Firestore data structure for videos and categories  
- Basic navigation with Expo Router  

#### ♻️ Changed
- Adjusted Firestore schema for video metadata  
- Improved login screen validation and error handling  

#### 🐛 Fixed
- Fixed navigation bug causing crash on “Back” press  
- Corrected AWS environment variable pathing  

#### 🚀 Deployment Notes
- Pushed to `dev` branch (`commit #a7b39f1`)  
- Test build deployed via Expo Go for iOS and Android

---

## 🧾 Usage Notes
- Always log changelog entries **after** pushing updates or test builds.  
- Use consistent commit tagging (`feat:`, `fix:`, `chore:`) for easy cross-reference.  
- Once the version is finalized, merge changelog notes into the corresponding section in `SPLITUP_RELEASE_NOTES.md`.  
- Keep all changelog entries stored in `/docs/changelog/` if you want versioned sub-logs later.

