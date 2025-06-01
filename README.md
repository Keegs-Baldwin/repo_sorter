# repo\_sorter

A powerful yet simple CLI tool that automatically organizes and cleans repositories by grouping files into intuitive folders based on their extension.

---

## 📦 Installation

**Install from npm:**

```bash
npm install -g repo_sorter
```

**Or, install from GitHub for development:**

```bash
git clone https://github.com/Keegs-Baldwin/repo_sorter.git
cd repo_sorter
sudo npm link
```

After installing, you can run the tool using:

```bash
repo-sorter
```

**Get it on npm:** [https://www.npmjs.com/package/repo\_sorter](https://www.npmjs.com/package/repo_sorter)

---

## 🚀 Usage

```bash
repo-sorter [path] [options]
```

* **`path`** – The root directory to scan and reorganize.
  If omitted, defaults to the current working directory.

### ✅ Options

* `-h`, `--help`, `help`
  Display usage instructions.

* `--dry-run`
  Show what actions *would* be taken without actually moving or deleting anything.

### 🔍 Examples

* **Organize the current directory**

  ```bash
  repo-sorter
  ```

* **Organize a specific directory**

  ```bash
  repo-sorter ~/projects/my-repo
  ```

* **Dry run (preview only)**

  ```bash
  repo-sorter ~/projects/my-repo --dry-run
  ```

---

## 🧼 How It Works

1. **Scan** the provided directory (recursively), skipping hidden files/folders.
2. **Categorize** each file based on its extension.
3. **Move** files into subfolders under the target root (creating folders if necessary).
4. **Remove** any now-empty directories.

### 📁 Category Mapping

| Destination Folder | Extensions                                               |
| ------------------ | -------------------------------------------------------- |
| *(root)*           | `md`                                                     |
| `src/`             | `c, cpp, js, ts, py, java, go, rb, rs, swift, kt, m, cs` |
| `includes/`        | `h, hpp, d.ts, hxx, inl`                                 |
| `web/html/`        | `html, htm, xhtml`                                       |
| `web/css/`         | `css, scss, sass, less`                                  |
| `web/php/`         | `php, phtml`                                             |
| `web/xml/`         | `svg, xml`                                               |
| `assets/img/`      | `png, jpg, jpeg, gif, bmp, tiff, ico`                    |
| `assets/video/`    | `mp4, mov, avi, webm, mkv, flv, swf`                     |
| `assets/audio/`    | `mp3, wav, ogg, flac, aac`                               |
| `assets/fonts/`    | `ttf, woff, woff2, otf`                                  |
| `docs/`            | `txt, pdf, docx, xlsx, pptx, rtf, epub, mobi`            |
| `data/`            | `csv`                                                    |
| `config/`          | `yaml, yml, env, ini, toml, lock, cfg, properties`       |
| `scripts/`         | `sh, bash, ps1, bat, command`                            |
| `executables/`     | `exe, dll, so, dylib, jar`                               |
| `packages/`        | `zip, tar, gz, rar, 7z, deb, rpm, msi, pkg`              |
| `logs/`            | `log`                                                    |
| `backups/`         | `bak, old, tmp`                                          |
| `misc/`            | *(any other extensions not matched above)*               |

* **Files with no extension** will stay in the root (unless matched by other rules).
* **Any extension not listed** will be placed in `misc/`.

---

## 🛠 Development

1. Edit code as needed.
2. Re-link for testing changes:

   ```bash
   sudo npm link
   ```
3. Run `repo-sorter [path] [--dry-run]` to verify behavior.

---
