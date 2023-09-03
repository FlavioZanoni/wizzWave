import { Game } from "./classes/Game"

window.onload = function () {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement
  let ctx = canvas.getContext("2d")

  if (!ctx) return console.error("Could not get 2d context")

  let game = new Game(ctx)
  game.render()
}
