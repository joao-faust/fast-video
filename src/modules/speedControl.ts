const speedControl = (isChecked: boolean): void => {
  if (isChecked) {
    const oldDisplay = <HTMLDivElement>document.querySelector('#display');
    if (!oldDisplay) {
      const video = <HTMLVideoElement>document.querySelector('video');
      video.playbackRate = 1;

      const display = document.createElement('div');
      display.id = 'display';

      const rangeInput = document.createElement('input');
      rangeInput.type = 'range';
      rangeInput.id = 'range';
      rangeInput.min = '0.1';
      rangeInput.max = '16';
      rangeInput.step = '0.1';
      rangeInput.value = '1';
      display.appendChild(rangeInput);

      const speedBox = document.createElement('div');
      speedBox.id = 'speed-box';
      speedBox.innerHTML = 1 + 'x';
      display.appendChild(speedBox);

      document.body.appendChild(display);
    }
    return;
  }
  const oldDisplay = <HTMLDivElement>document.querySelector('#display');
  oldDisplay.remove();
};

export default speedControl;
