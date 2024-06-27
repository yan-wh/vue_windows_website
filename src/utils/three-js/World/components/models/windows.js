import { OBJLoader } from 'three/examples/jsm/Addons.js';

import { Box3 } from 'three/src/math/Box3.js';
import { Vector3 } from 'three/src/math/Vector3.js';

async function loadWindows() {
  const loader = new OBJLoader();

  // 异步获取
  const windowsGroup = await loader.loadAsync('/obj/windows.obj') // obj模型读取到的数据是一个group对象
  console.log('windows!', windowsGroup);

//   const box = new Box3().setFromObject(windowsGroup);
//   const center = box.getCenter(new Vector3());

  let windowsWorldPosition = new Vector3();
  windowsGroup.getWorldPosition(windowsWorldPosition);

  const windows = windowsGroup;

  return {
    windows,
    windowsWorldPosition
  };
}

export { loadWindows };