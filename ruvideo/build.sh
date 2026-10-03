TERMUX_PKG_NAME=ruvideo
TERMUX_PKG_VERSION=19.2.0                                     TERMUX_PKG_SHA256=ae4c3adaed4c99db2884decd3a72fca848ff36107a66e514c1e87433318f2703
TERMUX_PKG_AUTO_UPDATE=true
TERMUX_PKG_SRCURL=https://github.com/iksan757/package-cli/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz
TERMUX_PKG_DEPENDS="ca-certificates openssl"
TERMUX_PKG_HOMEPAGE=https://github.com/iksan757/package-cli
TERMUX_PKG_MAINTAINER="Iksan Rumasoreng <rumasoreng757@gmail.com>"
TERMUX_PKG_DESCRIPTION="Fast and simple video downloader tool written in Rust forfetching media links directly from the CLI"TERMUX_PKG_LICENSE="MIT"                                      TERMUX_PKG_BUILD_IN_SRC=true

termux_step_install() {
    # 1                                                           install -Dm755 ruvideo "$TERMUX_PREFIX/bin/hotvideo"
    # 2
    install -Dm644 help.txt "${TERMUX_PREFIX}/share/ruvideo/help.txt"

    # 3
    install -Dm644 LICENSE "${TERMUX_PREFIX}/share/doc/ruvideo/LICENSE"
    # 4
    install -Dm644 README.md "${TERMUX_PREFIX}/share/doc/ruvideo/README.md"

}

