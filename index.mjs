
import { argv } from 'node:process';
import { clean_dir } from './clean_from_root.mjs';

if (argv.length > 3) {
    console.log("only one input is valid");
    process.exit();
}

if (argv[2] == "help" || argv[2] == "-h" || argv[2] == "--help") {
    console.log("how to use");
}

clean_dir("/home/keegs/personal_projects/sorter/repo_sorter");
// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });