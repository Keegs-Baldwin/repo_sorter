
import { make_basic_dir } from './make_and_move_files.mjs';
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
export async function clean_dir(root) {

    for (let folder of folders) {
        await make_basic_dir(root + "/" +folder);
    }
    await read_cur(root, root);
    await remove_empty(root);
}