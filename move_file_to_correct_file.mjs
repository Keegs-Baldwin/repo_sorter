import fs from 'fs/promises';
import { waitForDebugger } from 'node:inspector';
// import { channel } from 'node:diagnostics_channel';
import path from 'node:path';
import { compileFunction } from 'node:vm';

const ext_to_dir = {
    ".c": "src",
    ".h": "includes",
    ".png": "assets",
    ".mp4": "assets"
  };

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

async function move_file(cur_pos, to_here) {
    try {
        // await fs.rename(cur_pos, to_here);
        await console.log("MOVED" + cur_pos + "to" + "here");
    } catch (err) {
        console.log(err);
    }
}

async function is_dir(root, cur_dir, file) {
    try {
        let stat = await fs.lstat(cur_dir + "/" + file);
        if (stat.isDirectory() && !file.startsWith('.')) {
            cur_dir = cur_dir + "/" + file;
            console.log(cur_dir);
            read_cur(root, cur_dir);
        }
    } catch (err) {
        console.log(err);
    }
}

export async function read_cur(root, cur_dir) {
    try {
        const files = await fs.readdir(cur_dir)

            files.forEach(file => {
                if (!file.startsWith('.')) {
                is_dir(root, cur_dir, file);
                }
                // console.log(getExtension(file));
            });
    } catch (err) {
        console.log (err);
    }
}

// async function move_files(cur, root) {
    
// }