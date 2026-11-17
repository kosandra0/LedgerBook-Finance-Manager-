#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const indexPath = join(root, "index.html");
const failures = [];

function fail(message) {
  failures.push(message);
}

let indexBytes;
let html;

try {
  indexBytes = readFileSync(indexPath);
  html = indexBytes.toString("utf8");
} catch (error) {
  console.error("Unable to read index.html: " + error.message);
  process.exit(1);
}

const versionMatch = html.match(/<meta\s+name=["']application-version["']\s+content=["']([^"']+)["']/i);
const version = versionMatch?.[1];

if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
  fail("index.html must declare a semantic application-version (for example, 1.7.1).");
} else {
  const releaseName = "Ledgerbook_Enhanced_v" + version + ".html";
  const releasePath = join(root, releaseName);

  try {
    const releaseBytes = readFileSync(releasePath);
    if (!releaseBytes.equals(indexBytes)) {
      fail(releaseName + " is not byte-for-byte identical to index.html.");
    } else {
      console.log("OK  " + releaseName + " matches index.html.");
    }
  } catch {
    fail("Missing versioned release file: " + releaseName + ".");
  }
}

const cspTag = html.match(/<meta\b[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/i)?.[0] ?? "";
if (!cspTag.includes("default-src 'none'")) {
  fail("The Content Security Policy must retain default-src 'none'.");
}
if (!cspTag.includes("connect-src 'none'")) {
  fail("The Content Security Policy must retain connect-src 'none'.");
}

if (failures.length) {
  for (const message of failures) console.error("FAIL  " + message);
  process.exit(1);
}

console.log("Release verification passed for LedgerBook " + version + ".");
