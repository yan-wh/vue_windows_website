import { AnimationMixer } from "three";

function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action
   .setEffectiveTimeScale(1) // 动画速率，默认值是1
   .setEffectiveWeight(1.5) // 缩放动画权重，此处是鸟挥动翅膀，值越大，鸟的动作越明显，默认值是1
   .startAt(1) // 延迟播放
   .play();

  model.tick = (delta) => {
    mixer.update(delta);
  }

  return model;
}

export { setupModel };
