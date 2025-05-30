import path from 'node:path';
import fs from 'fs/promises';
import { make_basic_dir } from './make_and_move_files.mjs';

async function read_cur(dir) {
    console.log(dir);
    try {
        const files = await fs.readdir(dir)
            files.forEach(file => {
                console.log(file);
            });
    } catch (err) {
        console.log ("couldn't read dir");
    }
}

export function clean_dir(dir) {

    read_cur(dir);
    make_basic_dir("/home/keegs/personal_projects/sorter/repo_sorter/src");
    console.log("here");
}