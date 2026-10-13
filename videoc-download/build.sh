TERMUX_PKG_NAME=videoc-download
TERMUX_PKG_VERSION=1.3.7
TERMUX_PKG_SHA256=8a72f56fb2988d7f6a2c3675ea18e57c1cde997d31b4e0f7432138adc9525adc
TERMUX_PKG_AUTO_UPDATE=true
TERMUX_PKG_SRCURL=https://github.com/iksan757/package-cli/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz
TERMUX_PKG_DEPENDS="python python-yt-dlp yt-dlp-ejs aria2 ffmpeg"
TERMUX_PKG_HOMEPAGE=https://github.com/iksan757/package-cli
TERMUX_PKG_MAINTAINER="Iksan Rumasoreng <rumasoreng757@gmail.com>"
TERMUX_PKG_DESCRIPTION="Fast video downloader that extracts direct stream links with custom quality and high-speed DNS"
TERMUX_PKG_LICENSE="MIT"
TERMUX_PKG_BUILD_IN_SRC=true

termux_step_make_install() {
    # 1
    install -Dm755 hotvideo "$TERMUX_PREFIX/bin/videoc"
    # 2
    install -Dm644 help.json "${TERMUX_PREFIX}/share/videoc-download/help.json"
    # 3
    install -Dm644 videoc.json "${TERMUX_PREFIX}/share/videoc-download/videoc.json"

    # 4
    install -Dm644 LICENSE "${TERMUX_PREFIX}/share/doc/videoc-download/LICENSE"
}

