import styles from './index.less';
import VConsole from 'vconsole';
import * as React from 'react';
import { useState, useEffect } from 'react';
import flvjs from 'flv.js';

export default function IndexPage() {
  useEffect(() => {
    const vConsole = new VConsole();
    return () => {
      vConsole.destroy();
    };
  }, []);

  useEffect(() => {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById(
        'videoElement',
      ) as HTMLMediaElement;
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://42.192.22.24:8080/live/livestream/livestream.flv',
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }, []);

  return (
    <div className={styles.videoBox}>
      <video
        id="videoElement"
        autoPlay
        controls
        className={styles.video}
      ></video>
    </div>
  );
}
