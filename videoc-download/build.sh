TERMUX_PKG_NAME=hotvideo-downloader
TERMUX_PKG_VERSION=1.3.2
TERMUX_PKG_SHA256=c9240e66d98c5b192e6b0ba822b3bc955dc6a00373653ff5861bc7b74d9bfb75
TERMUX_PKG_AUTO_UPDATE=true
TERMUX_PKG_SRCURL=https://github.com/iksan757/pkg-hotvideo-downloader/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz
TERMUX_PKG_DEPENDS="python python-yt-dlp yt-dlp-ejs aria2 ffmpeg"
TERMUX_PKG_HOMEPAGE=https://github.com/iksan757/pkg-hotvideo-downloader
TERMUX_PKG_MAINTAINER="Iksan Rumasoreng <rumasoreng757@gmail.com>"
TERMUX_PKG_DESCRIPTION="Fast video downloader that extracts direct stream links with custom quality and high-speed DNS"
TERMUX_PKG_LICENSE="MIT"
TERMUX_PKG_BUILD_IN_SRC=true

termux_step_make_install() {
    # 1
    install -Dm755 hotvideo "$TERMUX_PREFIX/bin/hotvideo"
    # 2
    install -Dm644 help.txt "${TERMUX_PREFIX}/share/hotvideo/help.txt"

    # 3
    install -Dm644 LICENSE "${TERMUX_PREFIX}/share/doc/hotvideo-downloader/LICENSE"
}

