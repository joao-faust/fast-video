import './assets/css/styles.css';
import css from './modules/styles';

import speedControl from './modules/speedControl';
import dragSpeedControl from './modules/dragSpeedControl';
import handleSpeed from './modules/handleSpeed';

const main = (tabId: number, isChecked: boolean): void => {
  chrome.scripting.executeScript({
    target: { tabId },
    func: speedControl,
    args: [isChecked],
  });

  if (isChecked) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: dragSpeedControl,
    });
    chrome.scripting.executeScript({
      target: { tabId },
      func: handleSpeed,
    });
    chrome.scripting.insertCSS({
      target: { tabId },
      css,
    });
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    func: (): void => {
      const video = <HTMLVideoElement>document.querySelector('video');
      video.playbackRate = 1;
    },
  });
};

const switchBtn = <HTMLButtonElement>document.querySelector('#switch-btn');
switchBtn.addEventListener('click', async (e: Event): Promise<void> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const { id: tabId } = tab;

  if (!tabId) {
    return;
  }

  const isChecked = (<HTMLInputElement>e.target).checked;
  chrome.scripting.executeScript(
    {
      target: { tabId },
      func: (): boolean => {
        type Videos = NodeListOf<HTMLVideoElement>;
        const video = <Videos>document.querySelectorAll('video');
        return video.length === 1;
      },
    },
    (res) => {
      if (res[0].result) main(tabId, isChecked);
    },
  );
});
