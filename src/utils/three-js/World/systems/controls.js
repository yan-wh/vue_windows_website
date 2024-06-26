import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true; // 阻尼效果
  // controls.dampingFactor = 0.05;

  // controls.enableZoom = true; // 缩放
  // controls.minDistance = 1;
  // controls.maxDistance = 1000;

  // controls.rotateSpeed = 0.5; // 旋转速度
  // controls.zoomSpeed = 1.2; // 缩放速度

  // controls.enablePan = true; // 默认为 true，启用平移
  // controls.panSpeed = 0.5; // 设置平移速度

  // 如果需要键盘支持平移，可以设置 keys
  // controls.keys = ["A", "S", "D", "W"]; // 分别对应左下右上方向键

  // controls.maxPolarAngle = Math.PI / 2; // 最大俯仰角度
  // controls.minPolarAngle = 0; // 最小俯仰角度

  // controls.autoRotate = false; // 自动旋转
  // controls.autoRotateSpeed = 2; // 自动旋转速度

  // controls.enableKeys = false; // 按键控制
  // controls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

  // forward controls.update to our custom .tick method
  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
