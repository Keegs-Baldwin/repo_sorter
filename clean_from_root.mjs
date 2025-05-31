
import { make_basic_dir } from './make_basic_dirs.mjs';
import { read_cur, remove_empty } from './move_file_to_correct_file.mjs';

const folders = [
    "src",
    "test",
    ".tools",
    "includes",
    "docs",
    "assets/img",
    "assets/video",
    "assets/audio",
    "assets/fonts",
    "web/html",
    "web/css",
    "web/php",
    "web/xml",
    "data",
    "config",
    "scripts",
    "executables",
    "packages",
    "logs",
    "backups",
    "misc"
    ];

export async function clean_dir(root, dryRun) {
    try {
        for (let folder of folders) {
            const curFolder = root + "/" + folder;
            await make_basic_dir(curFolder, folder, dryRun);
        }
            await read_cur(root, root, dryRun);
            if (dryRun) {
                console.log("[DRY RUN] Removed all unused directories created");
            }
            await remove_empty(root, dryRun);
        } catch (err) {
            console.error(err);
        }
    }