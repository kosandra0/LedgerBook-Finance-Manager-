# LedgerBook-Finance-Manager-

Ledgerbook Enhanced is a personal finance ledger in a single HTML file. It runs in the browser and stores its data locally.

**Current version:** 1.7.1 (`Ledgerbook_Enhanced_v1.7.1.html`)

## Features

- Transactions, income, expenditure, savings goals, accounts, budgets and recurring entries
- Spending calendar with daily totals and transaction drill-down
- Dashboard, reports, analytics, categories, tags, payment methods and custom columns
- CSV import and export, full JSON backup and restore
- Light and dark themes, responsive layout for phones, tablets and desktops

## How to use

1. Download `Ledgerbook_Enhanced_v1.7.1.html`.
2. Open it in a current version of Chrome or Edge. No installation or internet connection is needed.
3. Data is saved in the browser's IndexedDB database `LedgerbookDB`. It is tied to the browser profile and file location, so use the same browser and location each time.

The page content security policy blocks network connections (`connect-src 'none'`).

## Optional change journal

In **System > Data & Backup**, choose "Choose app folder & connect" and select the folder that contains the HTML file. Ledgerbook then writes `Ledgerbook_Autosave_Log.jsonl` and a `Ledgerbook_Baseline_<timestamp>.json` file there. The journal contains readable financial record changes, so keep that folder private.

## Backups and data safety

- Make regular full JSON backups from **Data & Backup** and keep a copy outside the browser.
- Download a backup before replacing the HTML file with a new version.
- The app does not delete the database or clear records at startup.

## Privacy

The app runs entirely in your browser and makes no network connections. The GitHub Pages site serves the same file.

Your financial data is not stored in this repository. The HTML file contains only the application code.

## License

Apache License 2.0. See [LICENSE](LICENSE).
