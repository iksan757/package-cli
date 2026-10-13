# RU-LOCKING
-  **ru-locking** is a high-performance, recursive text search tool built with Rust, designed as an alternative to tools like `grep` and `ripgrep`. It features folder name search support, hidden file filtering, piping (`stdin`) integration, and a live search interface (**Interactive Live TUI Mode**).
---
# Key Features

- **Super Fast & Parallel**: Uses `rayon` for multithreaded file scanning.
- **Folder Name Search (`-D`)**: Precisely search for directory names (including hidden folders).
- **Smart Filtering**: Supports `.gitignore` integration and hidden file searching (`--hidden`).
- **Interactive TUI Mode (`-I`)**: A live-search interface based on a Terminal User Interface (`ratatui`).
- **Piping (`stdin`) Ready**: Fully supports integration with terminal command pipelines.
- **Colored Text Output**: Pattern recognition with color highlighting and line context options (`-A`, `-B`, `-C`).
```
Usage: locking [OPTION]... PATTERNS [FILE/DIR]...
Search for PATTERNS in each FILE or directory recursively.
Example: locking -i 'hello world' src/ -e rs,md
PATTERNS can contain multiple patterns separated by newlines.

Pattern selection and interpretation:
  -i, --ignore-case         ignore case distinctions in patterns and data
  -w, --word-regexp         match only whole words
  -x, --line-regexp         match only whole lines
  -v, --invert-match        select non-matching lines

Directory & File Filtering (Advanced):
  -D, --dir, --directories  search for directory names instead of file content
      --hidden              search hidden files and directories (.env, .config)
      --no-ignore           do not respect .gitignore / .ignore files
  -e, --extension=EXT       filter files by extension (e.g., -e rs,toml,js)
  -r, -R, --recursive       search all files under each directory recursively

Miscellaneous:
  -I, --interactive         open interactive live search (TUI mode)
  -s, --no-messages         suppress error messages
  -V, --version             display version information and exit
      --help                display this help text and exit

Output control:
  -m, --max-count=NUM       stop after NUM selected lines
  -n, --line-number         print line number with output lines
  -H, --with-filename       print file name with output lines
  -h, --no-filename         suppress the file name prefix on output
  -o, --only-matching       show only nonempty parts of lines that match
  -q, --quiet, --silent     suppress all normal output
  -l, --files-with-matches  print only names of FILEs with selected lines
  -L, --files-without-match print only names of FILEs with no selected lines
  -c, --count               print only a count of selected lines per FILE

Context control:
  -B, --before-context=NUM  print NUM lines of leading context
  -A, --after-context=NUM   print NUM lines of trailing context
  -C, --context=NUM         print NUM lines of output context
      --color[=WHEN]        use markers to highlight matching strings (always/never/auto)
```
---
# Example 

- search text in all files including hidden folders 
```
locking --hidden --no-ignore -n -i "" .
```
- search for folder/directory hidden 
```
locking --hidden --no-ignore -D -i "" .
```
- display the path/location of files (without line breaks)
```
locking --hidden --no-ignore -l -i "" .
```
---

# For Support
*  Treat me to coffee ☕: [Treat](https://saweria.co/tuanmuda7)
*  Instagram: *@ikhsan_11rs*

