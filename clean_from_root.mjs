import path from 'node:path';
import fs from 'fs/promises';
import { make_basic_dir } from './make_and_move_files.mjs';
import { read_cur, remove_empty } from './move_file_to_correct_file.mjs';

const folders = ["src", "test", ".tools", "includes", "docs", "assets"]

export function clean_dir(root) {

    // for (let folder of folders) {
    //     make_basic_dir(root + folder);
    // }
    // read_cur(root, root);
    remove_empty(root);
}