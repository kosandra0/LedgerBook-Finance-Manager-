# LedgerBook

LedgerBook is a private, local-first personal finance ledger delivered as a single HTML file. It runs directly in a modern browser, requires no installation, and keeps its records in the browser's local IndexedDB storage.

**Current release:** 1.7.1 · **License:** Apache-2.0 · **Format:** single-file HTML application

## Start using LedgerBook

1. Download **Ledgerbook_Enhanced_v1.7.1.html** from this repository, or open **index.html** through the hosted site.
2. Open the file in a current version of Chrome or Edge.
3. Use the same browser profile and the same file location or website origin each time.

No package installation, server, account, or internet connection is required for normal use.

**Important storage detail:** records are stored in the browser's IndexedDB database, **LedgerbookDB**. Browser profiles and origins are isolated from one another. Opening the local file and opening the hosted website can therefore show different databases. Clearing browser/site data or changing browser profiles can also make existing records unavailable.

## What it includes

- Income, expenses, transfers, accounts, savings goals, budgets, and recurring entries.
- A spending calendar with daily totals and transaction drill-down.
- Dashboard, reports, analytics, categories, tags, payment methods, and custom columns.
- CSV import/export and full JSON backup/restore.
- Light and dark themes, responsive layouts, and adjustable density.
- Optional local change journal and baseline snapshots.

## Data safety and privacy

LedgerBook is designed to keep financial records in the browser rather than in this repository or on a hosted application server.

- The application uses browser-local IndexedDB for its records.
- Its Content Security Policy sets **default-src 'none'** and **connect-src 'none'**; normal ledger use does not require remote services.
- Full backups and exported files are readable files. Store them somewhere private and do not commit them to Git.
- In **System → Data & Backup**, the optional **Choose app folder & connect** feature can write a **Ledgerbook_Autosave_Log.jsonl** file and a **Ledgerbook_Baseline_<timestamp>.json** file beside the app. The journal contains readable financial record changes.

Make a full JSON backup before replacing the application file, and keep a second copy outside the browser. A backup is the portable recovery path; browser storage alone is not a backup.

## Repository layout

| Path | Purpose |
|---|---|
| **index.html** | Canonical hosted entry point (for example, GitHub Pages). |
| **Ledgerbook_Enhanced_v1.7.1.html** | Version-labelled download for release 1.7.1. It must remain byte-for-byte identical to index.html. |
| **scripts/verify-release.mjs** | Dependency-free check for version and release-file consistency. |
| **.github/workflows/verify.yml** | Runs the release consistency check on pushes and pull requests. |
| **docs/PROJECT_STRUCTURE.md** | Project layout and release-maintenance notes. |
| **CONTRIBUTING.md** | Safe change and manual verification checklist. |

The two HTML files are intentionally kept at the repository root: one is the stable hosted entry point, and the other is an obvious, version-specific download. Git stores their identical contents efficiently as the same underlying blob.

## Development and verification

There is no bundler or dependency installation step. The shipped application is the HTML file itself.

With Node.js 24 or newer, run:

    node scripts/verify-release.mjs

The check confirms that the HTML version metadata matches the versioned download, both files are byte-identical, and the restrictive Content Security Policy is present. It does not replace a browser-based regression test; see **CONTRIBUTING.md**.

## License

Apache License 2.0. See **LICENSE**.
