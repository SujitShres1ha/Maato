# Git Branching & Semantic Versioning Guide

This project uses **semantic versioning**, **modular branching**, and **per-file version tracking** to ensure clarity, maintainability, and scalability across the frontend and backend.

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

> 📌 **Always branch by feature**, not by individual file. For example, if you're building a new product listing page and its UI components, keep both in one branch.

---

### ✅ Branch Examples

| Branch Type | Branch Name                              | Purpose                           |
| ----------- | ---------------------------------------- | --------------------------------- |
| Feature     | `frontend/feature/product-listing/1.0.0` | Product listing page + components |
| Fix         | `frontend/fix/product-listing/1.0.1`     | Fix layout bug on product grid    |
| Refactor    | `backend/refactor/user-auth/1.1.0`       | Refactor login logic              |
| Breaking    | `backend/feature/orders/2.0.0`           | Breaking change to orders API     |

---

## 🏷️ Tagging Releases

After merging a versioned feature into `main`, tag the release:

```bash
git tag <feature-scope>/v<version>
git push origin --tags
```

**Example:**

```bash
git tag product-listing/v1.0.0
git push origin --tags
```

This allows easy rollback, CI/CD triggers, and release tracking.

---

## ✍️ Commit Conventions

Use **Conventional Commits** for consistency:

```
feat: add product grid component
fix: correct checkout bug
refactor: simplify auth flow
```

These messages help automate changelogs and improve traceability.

---

## 🧾 Individual File Version Tracking

To track version history at the file level (especially for shared or reusable components), add a version header:

```ts
// Version: 1.0.0
```

This should be included at the top of:

* UI components (`Button`, `Modal`, etc.)
* Shared utilities (`axios.ts`, `dateFormatter.ts`)
* Layout components (`Navbar`, `Sidebar`)
* Contexts or custom hooks used in multiple places

> Helps identify file-level changes independent of broader feature versions.

---

## ✅ Summary

* ✅ **Branch by feature scope**, grouping pages and their components together
* ✅ Use **semantic versioning** in both branches and file headers
* ✅ Use **Git tags** to mark completed versions for releases
* ✅ Use **Conventional Commits** for clear commit history
* ✅ Track **individual file versions** for shared logic/components

> This structured approach improves developer collaboration, simplifies maintenance, and enables confident scaling in a production-grade project.
