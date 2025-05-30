import fs from 'fs/promises';
import { waitForDebugger } from 'node:inspector';
import path from 'node:path';

const ext_to_dir = {
    "c": "src",
    "h": "includes",
    "png": "assets",
    "mp4": "assets",
    "" : "docs"
  };

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

async function move_file(cur_pos, to_here) {
    try {
        // await fs.rename(cur_pos, to_here);
        await console.log("MOVED" + cur_pos + "\tto\t" + to_here);
    } catch (err) {
        console.log(err);
    }
}

async function is_dir (cur_dir, file) {
    try {
        let stat = await fs.lstat(cur_dir + "/" + file);
        return stat.isDirectory();
    } catch (err) {
        console.log("is_dir" + err);
    }
}

async function read_dir(root, cur_dir, file) {
    cur_dir = cur_dir + "/" + file;
    read_cur(root, cur_dir);
}

function correct_dir(file) {
    let dir = ext_to_dir[getExtension(file)];
    if (dir == undefined) {
        return "other";
    }
    return dir;
}

export async function read_cur(root, cur_dir) {
    try {
        const files = await fs.readdir(cur_dir);

        for (const file of files) {
            if (file.startsWith('.')) continue;

            if (await is_dir(cur_dir, file)) {
                await read_dir(root, cur_dir, file);
            } else {
                let move_to = root + "/" + correct_dir(file) + "/" + file;
                await move_file(cur_dir + "/" + file, move_to);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
