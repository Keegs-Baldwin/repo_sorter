# repo\_sorter

A simple command-line tool to automatically organize and clean your repositories.

## 📆 Installation

To install globally for use anywhere:

```bash
git clone https://github.com/Keegs-Baldwin/repo_sorter.git
cd repo_sorter
sudo npm link
```

Now you can run the tool using:

```bash
repo-sorter
```

## 🚀 Usage

```bash
repo-sorter [path] [options]
```

* `path` – the root directory to clean and organize. If omitted, defaults to the current directory.

### ✅ Options

* `-h`, `--help`, `help` – Show usage instructions
* `--dry-run` – Preview actions without making changes

### 🔍 Examples

Organize the current directory:

```bash
repo-sorter
```

Organize a specific directory:

```bash
repo-sorter ~/projects/my-repo
```

Dry run mode (preview only):

```bash
repo-sorter ~/projects/my-repo --dry-run
```

## 🧼 What it does

* Moves files into categorized folders:

  * Images → `assets/img/`
  * Videos → `assets/video/`
  * Audio → `assets/audio/`
  * Fonts → `assets/fonts/`
  * C files → `src/`
  * Misc → `other/`
* Deletes empty directories after organizing

## 🛠 Development

If you change the code, re-link it with:

```bash
sudo npm link
```
