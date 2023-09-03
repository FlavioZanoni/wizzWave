export class Game {
  private ctx: CanvasRenderingContext2D
  private tileset: HTMLImageElement | null = null

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.init()
  }

  init() {
    const img = new Image()
    img.src = "/tiles.png"
    img.onload = () => {
      this.tileset = img
      this.render()
    }
  }

  private map = {
    cols: 8,
    rows: 8,
    tsize: 64,
    tiles: [
      1, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
      1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
    ],
    getTile(col: number, row: number) {
      return this.tiles?.[row * this.cols + col]
    },
  }

  render() {
    if (!this.tileset) return

    for (var c = 0; c < this.map.cols; c++) {
      for (var r = 0; r < this.map.rows; r++) {
        var tile = this.map.getTile(c, r)
        if (tile !== 0) {
          // 0 => empty tile
          this.ctx.drawImage(
            this.tileset, // image
            (tile - 1) * this.map.tsize, // source x
            0, // source y
            this.map.tsize, // source width
            this.map.tsize, // source height
            c * this.map.tsize, // target x
            r * this.map.tsize, // target y
            this.map.tsize, // target width
            this.map.tsize // target height
          )
        }
      }
    }
  }
}
