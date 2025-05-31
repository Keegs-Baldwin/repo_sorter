import fs from 'fs/promises';
import path from 'node:path';

const categories = {
    "":             ["md"],
    "src":          ["c","cpp","js","ts","py","java","go","rb","rs","swift","kt","m","cs"],
    "includes":     ["h","hpp","d.ts","hxx","inl"],
    "web/html":     ["html","htm","xhtml"],
    "web/css":      ["css","scss","sass","less"],
    "web/php":      ["php","phtml"],
    "web/xml":      ["svg","xml"],
    "assets/img":   ["png","jpg","jpeg","gif","bmp","tiff","ico"],
    "assets/video": ["mp4","mov","avi","webm","mkv","flv","swf"],
    "assets/audio": ["mp3","wav","ogg","flac","aac"],
    "assets/fonts": ["ttf","woff","woff2","otf"],
    "docs":         ["txt","pdf","docx","xlsx","pptx","rtf","epub","mobi"],
    "data":         ["csv"],
    "config":       ["yaml","yml","env","ini","toml","lock","cfg","properties"],
    "scripts":      ["sh","bash","ps1","bat","command"],
    "executables":  ["exe","dll","so","dylib","jar"],
    "packages":     ["zip","tar","gz","rar","7z","deb","rpm","msi","pkg"],
    "logs":         ["log"],
    "backups":      ["bak","old","tmp"],
    "misc":         []
  };

//   const exceptions = {
//     "README.md" : ""

//   }

const extToDir = {};
for (const [dir, exts] of Object.entries(categories)) {
    for (const ext of exts) {
        extToDir[ext] = dir;
    }
}


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

async function is_dir(cur_dir, file) {
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
    let dir = extToDir[getExtension(file)];
    if (dir == undefined) {
        return "other";
    }
    return dir;
}

export async function read_cur(root, cur_dir) {
    try {
        const files = await fs.readdir(cur_dir);

        for (const file of files) {
            if (file.startsWith('.'))
                continue;

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

async function remove_if_empty(cur_dir, file) {
    try {
        let path = cur_dir + "/" + file
        const directory = await fs.opendir(path)
        const entry = await directory.read()
        await directory.close()
        if (entry === null) {
            await fs.rmdir(path);
        } else {
            remove_empty(path)
        }
    } catch (err) {
        console.log(err);
    }
}


export async function remove_empty(root) {

    try {
        const files = await fs.readdir(root);
        for (const file of files) {
            if (file.startsWith('.'))
                continue;
            if (await is_dir(root, file)) {
                await remove_if_empty(root, file);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
