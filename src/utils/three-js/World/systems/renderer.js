import { WebGLRenderer } from 'three';

function createRenderer(container) {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  console.log('宽高', container.clientWidth, container.clientHeight)
  renderer.setSize(container.clientWidth, container.clientHeight);

  return renderer;
}

export { createRenderer };
