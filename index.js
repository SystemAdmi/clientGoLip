const style = document.createElement('style');
style.textContent = `
/* Добавьте стили для класса loader */
.loader {
  border: 5px solid rgba(255, 255, 255, 01); /* Изменили цвет границы */
  border-left-color: transparent;
  width: 36px;
  border-radius: 50%;
  height: 36px;
  animation: spin89345 1s linear infinite;
  color: white;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`;

document.head.appendChild(style);
