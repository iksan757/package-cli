# 🎬 Hot Video Downloader (v1.3.2)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Termux%20%7C%20Linux%20%7C%20Windows-blue)](https://github.com/iksan757/pkg-hotvideo-downloader)
[![Language](https://img.shields.io/badge/Language-C++%20Native-brightgreen)](https://isocpp.org/)

Fast CLI video downloader that extracts direct stream links with custom quality and high-speed DNS for **Termux**, **Debian/Ubuntu**, **Arch Linux**, and **Windows (WSL)** environments.
  

## 🚀 Features

- 📐 **Multiple Resolutions:** Supports video stream extraction ranging from `240p` to `1080p` (Full HD).
- ⚡ **High-Speed DNS:** Integrated Cloudflare DNS (`1.1.1.1`) support for a stable downloading process.
- 🎛️ **Dual Usage Modes:** Supports both direct command-line arguments and an interactive terminal menu (`-i`).
- 📁 **Custom Storage:** Configure download save paths directly via arguments.
- 📦 **Automatic Dependency Handling:** Runs seamlessly with `python`, `python-yt-dlp`, `aria2`, `ffmpeg`, and `yt-dlp-ejs`.

---
## 📥  Installation

📱 1. Termux
```
echo "deb [trusted=yes] [https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/](https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/) ./" > $PREFIX/etc/apt/sources.list.d/hotvideo.list && apt update && pkg install hotvideo-downloader

```
🐧 2. Debian / Ubuntu / Kali Linux / Mint
```
curl -LO [https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/hotvideo-downloader_1.0.0_all.deb](https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/hotvideo-downloader_1.0.0_all.deb) && sudo apt update && sudo apt install -y ./hotvideo-downloader_1.0.0_all.deb && rm hotvideo-downloader_1.0.0_all.deb

```
🏹 3. Arch Linux / Manjaro
```
sudo pacman -S --needed --noconfirm yt-dlp aria2 python ffmpeg curl && sudo curl -Lo /usr/local/bin/hotvideo [https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/bin/hotvideo](https://raw.githubusercontent.com/iksan757/pkg-hotvideo-downloader/main/bin/hotvideo) && sudo chmod +x /usr/local/bin/hotvideo

```
🪟 4. Windows (via WSL / Ubuntu / Git Bash)
```
sudo apt update && sudo apt install -y python python-yt-dlp yt-dlp-ejs  ffmpeg aria2 git && git clone https://github.com/iksan757/pkg-hotvideo-downloader.git && sudo cp pkg-hotvideo-downloader/bin/* /usr/local/bin/ && sudo chmod +x /usr/local/bin/hotvideo
```
---

## 📖 Usage

Once installation is complete, you can immediately run the `hotvideo` command:
```
Direct download (Default resolution 480p)
  hotvideo "[https://example.com/video](https://example.com/video)"

Custom resolution option (240p / 360p / 480p / 720p / 1080p)
  hotvideo "[https://example.com/video](https://example.com/video)" -r 720p

Use fast Cloudflare DNS connection (1.1.1.1)
   hotvideo "[https://example.com/video](https://example.com/video)" -r 1080p -d

Interactive mode (Terminal menu)
   hotvideo -i
```
---

## 🛠️Full Command Options

| Flag / Option | Description | Example |
| --- | --- | --- |
| **URL** | Link to the video to be downloaded | `hotvideo "https://..."` |
| **-r, --resolution** | Select video quality (240p, 360p, 480p, 720p, 1080p) | `hotvideo -r 720p` |
| **-d, --dns** | Enable Cloudflare DNS (1.1.1.1) | `hotvideo -d` |
| **-i, --interactive** | Open the interactive menu | `hotvideo -i` |
| **-h, --help** | Show the help menu | `hotvideo -h` |

---

## ⚙️Key Dependencies
This application requires the following tools (automatically installed via the installation methods above):

- [Python](https://www.python.org/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp-ejs](https://github.com/yt-dlp/ejs)
- [aria2](https://aria2.github.io)
- [ffmpeg](https://ffmpeg.org)

---

## For Support
*  Treat me to coffee ☕: [Treat](https://saweria.co/tuanmuda7)
*  Instagram: *@ikhsan_11rs*

---

## 📄 License
- Distributed under the MIT License.
  *See  ***LICENSE*** for more information.*
