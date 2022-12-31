export default (): void => {
  let posiX = 0;
  let posiY = 0;

  const dragMove = (e: MouseEvent): void => {
    const display = <HTMLDivElement>document.querySelector('#display');
    display.style.left = e.pageX - posiX + 'px';
    display.style.top = e.pageY - posiY + 'px';
  };

  const dragEnd = (): void => {
    removeEventListener('mousemove', dragMove);
    removeEventListener('mouseup', dragEnd);
  };

  function dragStart(this: HTMLDivElement, e: MouseEvent): void {
    if (e.target !== this) {
      return;
    }

    const display = <HTMLDivElement>document.querySelector('#display');
    posiX = e.pageX - display.offsetLeft;
    posiY = e.pageY - display.offsetTop;

    addEventListener('mousemove', dragMove);
    addEventListener('mouseup', dragEnd);
  }

  const display = <HTMLDivElement>document.querySelector('#display');
  display.addEventListener('mousedown', dragStart);
};
