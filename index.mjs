#!/usr/bin/env node
import { clean_dir } from "./clean_from_root.mjs";
import { check_dir } from "./check_dir.mjs";

const helpFlags = new Set(["-h", "--help", "help"]);

const args = process.argv.slice(2);
const pathArg = args.find((arg) => !arg.startsWith("-"));

if (!pathArg) {
    console.error("Error: No path provided.");
    process.exit(1);
}

if (args.some((arg) => helpFlags.has(arg))) {
    console.log(`
  Usage: repo-sorter [options]

  Options:
    -h, --help         Show help information
    --dry-run          Simulate file operations
  `);
    process.exit(0);
}

const dryRun = true;
if (args.includes("--dry-run")) {
    dryRun = true;
}
const curDir = pathArg;
const response = check_dir(curDir);

if (response.safe) {
    clean_dir(response.directory, dryRun);
} else {
    console.error("❌ Error:" + response.reason);
    process.exit(84);
}
// process.exit()
// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });
