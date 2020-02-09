class Summoner {
  constructor() {
    this.name = null
    this.type = null
    this.innate = null
  }
}

Summoner.Builder = function() {
  const instance = new Summoner()
  Object.assign(this, {
    name(name) {
      instance.name = name
      return this
    },
    type(type) {
      instance.type = type
      return this
    },
    innate(innate) {
      instance.innate = innate
      return this
    },
    build() {
      return instance
    }
  })
}

const monkey = new Summoner.Builder().name('孙悟空').type('上单').innate('致命节奏').build()
console.log(monkey)