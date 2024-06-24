import { World } from './World/World.js';
let globalWorld = null;

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);
  globalWorld = world;

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

function toNextView() {
  globalWorld.toNextView();
}

export { main, toNextView };
