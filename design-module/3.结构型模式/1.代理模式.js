class Browser {
  visit(url) {
    console.log('访问' + url)
  }
}

class BrowserProxy {
  constructor() {
    this.browser = new Browser()
  }

  visit(url) {
    console.log('代理操作')
    this.browser.visit(url)
  }
}

const bp = new BrowserProxy()
bp.visit('www.google.com')