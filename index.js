const style = document.createElement('style');
style.textContent = `
/* Добавьте стили для класса loader */
.loader {
    color: white;
    background-color: white;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--uib-color);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

`;

document.head.appendChild(style);
