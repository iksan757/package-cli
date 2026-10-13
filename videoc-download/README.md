#  Videoc-Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Termux%20%7C%20Linux%20%7C%20Windows-blue)](https://github.com/iksan757/package-cli)
[![Language](https://img.shields.io/badge/Language-C++%20Native-brightgreen)](https://isocpp.org/)

Fast CLI video downloader that extracts direct stream links with custom quality and high-speed DNS for **Termux**, **Debian/Ubuntu**, **Arch Linux**, and **Windows (WSL)** environments.
--- 
## Features

-  **Multiple Resolutions:** Supports video stream extraction ranging from `240p` to `1080p` (Full HD).
-  **High-Speed DNS:** Integrated Cloudflare DNS (`1.1.1.1`) support for a stable downloading process.
-  **Dual Usage Modes:** Supports both direct command-line arguments and an interactive terminal menu (`-i`).
-  **Custom Storage:** Configure download save paths directly via arguments.

---

## Installation

📱 1. Termux
```
echo "deb [trusted=yes] https://raw.githubusercontent.com/iksan757/package-cli/main/ ./" > $PREFIX/etc/apt/sources.list.d/package-cli.list
apt-get update

```
🐧 2. Debian / Ubuntu / Kali Linux / Mint
```
curl -LO https://raw.githubusercontent.com/iksan757/package-cli/main/videoc-download/videoc-download_1.3.7_all.deb && sudo apt update && sudo apt install -y ./videoc-download_1.3.7_all.deb && rm videoc-download_1.3.7_all.deb

```
🏹 3. Arch Linux / Manjaro
```
sudo pacman -S --needed --noconfirm yt-dlp aria2 python ffmpeg curl git && git clone https://github.com/iksan757/package-cli.git && sudo cp package-cli/videoc-download/bin/* /usr/local/bin/ && sudo mkdir -p /usr/local/share/videoc-download && sudo cp -r package-cli/videoc-download/share/* /usr/local/share/videoc-download/ && sudo chmod +x /usr/local/bin/videoc && sudo chmod +x /usr/local/share/videoc-download/*


```
🪟 4. Windows (via WSL / Ubuntu / Git Bash)
```
sudo apt update && sudo apt install -y python3 yt-dlp ffmpeg aria2 git && git clone https://github.com/iksan757/package-cli.git && sudo cp package-cli/videoc-download/bin/* /usr/local/bin/ && sudo mkdir -p /usr/local/share/videoc-download && sudo cp -r package-cli/videoc-download/share/* /usr/local/share/videoc-download/ && sudo chmod +x /usr/local/bin/videoc && sudo chmod +x /usr/local/share/videoc-download/*

```
---

##  Usage

Once installation is complete, you can immediately run the `videoc` command:
```
Direct download (Default resolution 480p)
  videoc "[https://example.com/video](https://example.com/video)"

Custom resolution option (240p / 360p / 480p / 720p / 1080p)
  videoc "[https://example.com/video](https://example.com/video)" -r 720p

Use fast Cloudflare DNS connection (1.1.1.1)
   videoc "[https://example.com/video](https://example.com/video)" -r 1080p -d

Interactive mode (Terminal menu)
   videoc -i
```
---

## Full Command Options

| Flag / Option | Description | Example |
| --- | --- | --- |
| **URL** | Link to the video to be downloaded | `videoc "https://..."` |
| **-r, --resolution** | Select video quality (240p, 360p, 480p, 720p, 1080p) | `videoc -r 720p` |
| **-d, --dns** | Enable Cloudflare DNS (1.1.1.1) | `videoc -d` |
| **-i, --interactive** | Open the interactive menu | `videoc -i` |
| **-h, --help** | Show the help menu | `videoc -h` |

---

## Key Dependencies
This application requires the following tools (automatically installed via the installation methods above):

- [Python](https://www.python.org/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp-ejs](https://github.com/yt-dlp/ejs)
- [aria2](https://aria2.github.io)
- [ffmpeg](https://ffmpeg.org)
- [dnsutils](https://www.isc.org/bind/)

---

## For Support
*  Treat me to coffee ☕: [Treat](https://saweria.co/tuanmuda7)
*  Instagram: *@ikhsan_11rs*

---

## 📄 License
- Distributed under the MIT License.
  *See  ***LICENSE*** for more information.*

