import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadGlasses() {
  const loader = new GLTFLoader();

  // 异步获取，下面的 parrotData.scene 不会马上获取到值
  // const [parrotData, flamingoData, storkData] = await Promise.all([
  //   loader.loadAsync('/glb/Parrot.glb'),
  //   loader.loadAsync('/glb/Flamingo.glb'),
  //   loader.loadAsync('/glb/Stork.glb')
  // ]);
  // console.log('Squaaawk!', parrotData);

  const glassesData = await loader.loadAsync('/glb/glasses.glb')
  console.log('glasses!', glassesData);

  const glasses = glassesData.scene.children[0];

  // const parrot = setupModel(parrotData);
  // console.log('parrot!', parrot);
  // parrot.position.set(0, 0, 2.5);

  // const flamingo = setupModel(flamingoData);
  // flamingo.position.set(7.5, 0, -10);

  // const stork = setupModel(storkData);
  // stork.position.set(0, -2.5, -10);

  return {
    // parrot,
    // flamingo,
    // stork,
    glasses
  };
}

export { loadGlasses };
