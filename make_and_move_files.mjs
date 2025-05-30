import path from 'node:path';
import fs from 'fs/promises';
// import fs from 'node:fs';


const file_to_dir = {
    src : [".c"],
    includes : [".h"],
    assets : [".png", ".mp4"]
}

export async function make_basic_dir(dir) {
    try {
      await fs.mkdir(dir, { recursive: false });
    } catch (err) {
      if (err.code !== 'EEXIST') {
        console.error(`Error creating directory "${dir}":`, err);
      }
    }
  }