# Contributing to LedgerBook

LedgerBook is deliberately shipped as a single, self-contained HTML file. Keep that deployment model simple unless a change has a clear, documented reason to replace it.

## Before changing the application

- Read the privacy and backup notes in **README.md**.
- Do not add remote scripts, stylesheets, fonts, image hosts, analytics, or network APIs to the app.
- Keep financial records, exported CSV/JSON files, autosave journals, and baseline snapshots out of Git.
- Use synthetic data for screenshots, demonstrations, and manual testing.

## Keep the release files in sync

The hosted entry point and the version-labelled download must contain exactly the same application:

- **index.html** is the canonical source for the hosted site.
- **Ledgerbook_Enhanced_vX.Y.Z.html** is the matching version-labelled distribution copy.
- Update the application-version metadata in the HTML and name the versioned copy with that exact version.
- Copy the final HTML bytes to both paths. Do not hand-edit one copy independently.

Run the dependency-free release check before opening a pull request:

    node scripts/verify-release.mjs

## Manual regression checklist

Use a disposable browser profile or synthetic test records. Confirm that:

1. The app opens from a local file and from the hosted entry point.
2. Navigation, search, forms, tables, and responsive layouts still work.
3. Creating, editing, and deleting a synthetic record behaves as expected.
4. Records persist after a browser restart in the same profile and origin.
5. JSON backup and restore work, and CSV import/export remain usable.
6. Theme and density settings continue to work.
7. The browser console has no new errors.
8. The app still works offline and the restrictive Content Security Policy has not been weakened.

## Pull requests

Keep changes focused, describe any user-visible behaviour changes, state which manual checks were performed, and call out any storage or backup implications. Never attach real financial records or readable backup files.
