import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { WebGLRenderTarget } from 'three';

export function AfterimageEffect({ damping = 0.94 }) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    // Setup composer
    const renderTarget = new WebGLRenderTarget(size.width, size.height);
    const composer = new EffectComposer(gl, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    const afterimagePass = new AfterimagePass();
    afterimagePass.uniforms['damp'].value = damping;

    composer.addPass(renderPass);
    composer.addPass(afterimagePass);

    composerRef.current = composer;
    passRef.current = afterimagePass;

    const onResize = () => {
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [gl, scene, camera, size, damping]);

  useThree(({ clock }) => {
    if (composerRef.current) {
      composerRef.current.render(clock.getDelta());
    }
  });

  return null;
}
