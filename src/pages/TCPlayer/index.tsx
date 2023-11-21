// @ts-ignore
import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.less';

export default () => {
  useEffect(() => {
    let player: TCPlayer;

    if (document.getElementById('player-container-id')) {
      player = TCPlayer('player-container-id', {
        licenseUrl:
          'https://license.vod2.myqcloud.com/license/v2/1308115463_1/v_cube.license',
      });
      player?.src(
        'http://www.cricket.cab/live/test.flv?txSecret=8b6c9979baf2ed8251edfb2116b5c1bf&txTime=6567246E',
      );
    }

    return () => {
      player?.dispose();
    };
  }, []);

  return (
    <div className={styles.page}>
      <video
        id="player-container-id"
        width="800"
        height="600"
        preload="auto"
      ></video>
    </div>
  );
};
