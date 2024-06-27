const setSize = (container, camera, scene, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  if(container.clientWidth < Math.ceil(768 * 0.8)) {
    scene.scale.set(5, 5, 5);
  }
  else scene.scale.set(8, 8, 8);

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, scene, renderer) {
    // set initial size
    setSize(container, camera, scene, renderer);

    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
      setSize(container, camera, scene, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
