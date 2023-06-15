import styles from './index.less';
import VConsole from 'vconsole';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    const vConsole = new VConsole();
    console.log('Hello world');
    return () => {
      vConsole.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
