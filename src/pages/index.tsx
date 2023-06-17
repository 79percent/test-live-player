import styles from './index.less';
import VConsole from 'vconsole';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import flvjs from 'flv.js';
import { useLocation } from 'umi';

let timer: string | number | NodeJS.Timeout | undefined;

export default function IndexPage() {
  const location = useLocation() as any;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const flvPlayer = useRef<flvjs.Player>();

  useEffect(() => {
    const vConsole = new VConsole();
    return () => {
      vConsole.destroy();
    };
  }, []);

  useEffect(() => {
    try {
      if (flvjs.isSupported() && location?.query?.url) {
        var videoElement = document.getElementById(
          'videoElement',
        ) as HTMLMediaElement;
        flvPlayer.current = flvjs.createPlayer({
          type: 'flv',
          url: location?.query?.url,
          isLive: true,
        });
        flvPlayer.current.attachMediaElement(videoElement);
        flvPlayer.current.load();
      }
    } catch (error) {}
  }, [location?.query?.url]);

  return (
    <div className={styles.videoBox}>
      <video
        id="videoElement"
        autoPlay={true}
        controls
        className={styles.video}
        onTouchEnd={() => {
          setShowIcon(true);
          timer = setTimeout(() => {
            setShowIcon(false);
          }, 1000);
        }}
      ></video>
      {showIcon &&
        (isPlaying ? (
          <div
            className={styles.pause}
            onClick={() => {
              setIsPlaying(false);
              flvPlayer.current?.pause();
              clearTimeout(timer);
            }}
          ></div>
        ) : (
          <div
            className={styles.play}
            onClick={() => {
              setIsPlaying(true);
              flvPlayer.current?.play();
              setShowIcon(false);
              clearTimeout(timer);
            }}
          ></div>
        ))}
    </div>
  );
}
