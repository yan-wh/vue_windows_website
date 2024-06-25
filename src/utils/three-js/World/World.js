

import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let controls;
let renderer;
let scene;
let loop;
let threeDModels;
let curIdx = 0;

class World {
  constructor(container) {
    camera = createCamera(container);
    renderer = createRenderer(container);
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);

  }

  async init() {
    threeDModels = await loadBirds();

    // move the target to the center of the front bird
    // controls.target.copy(threeDModels.parrot.position);
    // loop.updatables.push(threeDModels.parrot, threeDModels.flamingo, threeDModels.stork);

    // scene.add(threeDModels.parrot, threeDModels.flamingo, threeDModels.stork);

    // 眼镜模型
    controls.target.copy(threeDModels.glasses.position);

    scene.add(threeDModels.glasses);
  }

  toNextView() {
    controls.target.copy(threeDModels[Object.keys(threeDModels)[curIdx]].position);

    // const tween = new Tween(camera.position)
    //   .to(targetPosition, 2000) // 2000 毫秒内动画过渡到目标位置
    //   .onUpdate(function() {
    //       controls.target.set(targetTarget.x, targetTarget.y, targetTarget.z); // 更新控制器的目标点
    //       controls.update(); // 更新控制器状态
    //   })
    //   .onComplete(function() {
    //       console.log('Camera has arrived at the target position.');
    //   })
    //   .start();

    if (curIdx === Object.keys(threeDModels).length - 1) {
      curIdx = 0;
    } else {
      curIdx += 1;
    }
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
