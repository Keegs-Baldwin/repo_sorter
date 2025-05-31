import fs from "fs/promises";

export async function make_basic_dir(dir, file, dryRun) {
    try {
        if (dryRun) {
            console.log(`[DRY RUN] Created directory: ${file}`);
        } else {
            await fs.mkdir(dir, { recursive: true });
        }
    } catch (err) {
        if (err.code !== "EEXIST") {
            console.error(`Error creating directory "${dir}":`, err);
        }
        throw err;
    }
}
