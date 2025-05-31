
import { argv } from 'node:process';
import { clean_dir } from './clean_from_root.mjs';
import { check_dir } from './check_dir.mjs';


if (argv.length > 3) {
    console.log("only one input is valid");
    process.exit();
}

if (argv[2] == "help" || argv[2] == "-h" || argv[2] == "--help") {
    console.log("how to use");
    process.exit();
}
const curDir = argv[2];
const response = check_dir(curDir);

if (response.safe) {
    clean_dir(response.directory);
} else {
    console.error("❌ Error:" + response.reason);
    process.exit(84);
}

// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });