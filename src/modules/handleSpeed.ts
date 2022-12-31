export default (): void => {
  const changeSpeed = (e: Event): void => {
    const value = (<HTMLInputElement>e.target).value;

    const speedBox = <HTMLDivElement>document.querySelector('#speed-box');
    speedBox.innerHTML = value + 'x';

    const rangeInput = <HTMLInputElement>document.querySelector('#range');
    rangeInput.value = value;

    const video = <HTMLVideoElement>document.querySelector('video');
    video.playbackRate = parseFloat(value);
  };

  const rangeInput = <HTMLInputElement>document.querySelector('#range');
  rangeInput.addEventListener('input', changeSpeed);
};
