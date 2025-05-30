import path from 'node:path';
import fs from 'fs/promises';
// import fs from 'node:fs';



export async function make_basic_dir(dir) {
    try {
    //   await fs.mkdir(dir, { recursive: false });
        await console.log(`made ${dir}`);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        console.error(`Error creating directory "${dir}":`, err);
      }
    }
  }