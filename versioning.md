# Git Branching & Semantic Versioning Guide

This project uses **semantic versioning** and **structured branching** to maintain clarity, traceability, and scalable development practices.

---

## 📌 Semantic Versioning Format

We follow [SemVer](https://semver.org):

```
MAJOR.MINOR.PATCH
```

| Version | Use Case                                       |
| ------- | ---------------------------------------------- |
| `1.0.0` | Initial release of a feature                   |
| `1.1.0` | New backward-compatible feature                |
| `1.1.1` | Bugfix or tweak with no API change             |
| `2.0.0` | Breaking change (e.g., removed or changed API) |

---

## 🌱 Branching Strategy

### 🔧 Branch Name Format

```
<domain>/<type>/<feature-scope>/<version>
```

**Domains:** `frontend`, `backend`, `shared`, etc.
**Types:** `feature`, `fix`, `refactor`, `breaking`

### ✅ Examples

| Branch Type | Branch Name                        | Purpose                             |
| ----------- | ---------------------------------- | ----------------------------------- |
| Feature     | `frontend/feature/main-page/1.0.0` | Main landing page (initial version) |
| Fix         | `frontend/fix/main-page/1.0.1`     | Fix layout bug on main page         |
| Refactor    | `backend/refactor/user-auth/1.1.0` | Refactor login logic                |
| Breaking    | `backend/feature/orders/2.0.0`     | Breaking change to orders API       |

---

## 🏷️ Tagging Releases

Once a feature is merged to `main`:

```bash
git tag <feature-scope>/v<version>
git push origin --tags
```

**Example:**

```bash
git tag cart/v1.0.0
git push origin --tags
```

---

## ✍️ Commit Conventions

We recommend using **Conventional Commits**:

```
feat: add product grid component
fix: correct checkout bug
refactor: simplify auth flow
```

---

## 📁 Optional File Header in Code

In components or modules, include:

```ts
// Version: 1.0.0
```

To indicate the active version of that file.

---

## ✅ Summary

* Version every feature and branch semantically
* Tag releases and production merges
* Use consistent commit and branch naming for clarity
* Think in terms of **breaking**, **additive**, and **patch** changes

> This allows better CI/CD, changelogs, rollback support, and team communication.

should i do like frontend branch then again main page branch and then version number
