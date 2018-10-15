import anime from 'animejs'

let _randomFloat = (limit) => limit * Math.random()

export class RandomRenderer {
  constructor (renderers) {
    var index = 0

    this.renderers = renderers
    this.rendererByWeight = new Map(
      renderers.map((renderer) =>
        [index += renderer.weight, renderer])
    )
    this.limit = index
  }

  next () {
    let randomIndex = this.limit * Math.random()
    let [, renderer] = Array.from(this.rendererByWeight.entries())
      .find(([index, ]) => randomIndex < index)
    return renderer
  }
}
