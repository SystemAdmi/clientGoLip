const style = document.createElement('style');
style.textContent = `
  .darkbox {
    background-color: rgba(0,0,0,.7);
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    width: 200px;
    height: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: resizeAnimation 2s forwards;
  }

  @keyframes resizeAnimation {
    from {
      width: 200px;
      height: 100px;
    }
    to {
      width: 400px;
      height: 300px;
    }
  }
`;

document.head.appendChild(style);
