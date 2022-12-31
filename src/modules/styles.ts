let css = `#display {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`;

css += `#display {
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  padding: 10px 6px;
  border-radius: 3px;
  background: rgba(0, 0, 0, .4);
  color: #FFF;
  text-align: center;
}`;

css += `#display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
}`;

export default css;
