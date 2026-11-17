# Project structure

LedgerBook is intentionally a single-file browser application. Its repository is kept small so the application can be downloaded and opened without a build toolchain.

## Files at the root

| Path | Responsibility |
|---|---|
| **index.html** | Canonical HTML application and hosted-site entry point. |
| **Ledgerbook_Enhanced_v1.7.1.html** | Version-labelled copy distributed as the 1.7.1 download. |
| **LICENSE** | Apache License 2.0. |
| **README.md** | User-facing overview, startup instructions, and data-safety notes. |
| **.gitignore** | Excludes local financial journals, baselines, and export files. |
| **CONTRIBUTING.md** | Maintenance and manual regression guidance. |

## Tooling

| Path | Responsibility |
|---|---|
| **scripts/verify-release.mjs** | Checks that version metadata, the versioned filename, the two HTML copies, and the required CSP agree. |
| **.github/workflows/verify.yml** | Executes the release check in GitHub Actions. |

The verification script uses only Node.js built-ins. There is no dependency lockfile, package manager setup, transpilation, or generated build directory.

## Why there are two HTML files

The repository supports two useful delivery paths:

- **index.html** gives static hosting providers a conventional entry point.
- **Ledgerbook_Enhanced_v1.7.1.html** gives users a clearly versioned file to download and keep locally.

They intentionally share identical bytes. The automated verification script prevents the hosted app and downloadable copy from silently diverging.

## Release procedure

1. Make the application change in **index.html**.
2. Update its **application-version** metadata.
3. Copy the completed file byte-for-byte to **Ledgerbook_Enhanced_vX.Y.Z.html**.
4. Run **node scripts/verify-release.mjs**.
5. Perform the manual checks in **CONTRIBUTING.md**.
6. Update the README and release notes when the user-facing behaviour or instructions change.

Do not remove the versioned release copy without updating the download instructions and repository layout documentation.
