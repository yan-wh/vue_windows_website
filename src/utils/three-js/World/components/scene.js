import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('whitesmoke');
  scene.scale.set(10, 10, 10);

  return scene;
}

export { createScene };
