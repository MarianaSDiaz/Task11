module.exports = class page {
    open (path) {
        return browser.url(`https://marianasdiaz.github.io/Task11/${path}`)
    }
}