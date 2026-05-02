
// cria overlay
const loader = document.createElement('div');
loader.id = 'custom-loader';

loader.innerHTML = `
    <div class="spinner"></div>
  `;

document.body.appendChild(loader);

// estilos via JS (não depende do seu CSS)
const style = document.createElement('style');
style.innerHTML = `
    #custom-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #ccc;
      border-top: 4px solid #333;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
document.head.appendChild(style);

// trava scroll
document.body.style.overflow = 'hidden';

// controla tempo
window.addEventListener('load', function () {
    const extraDelay = 300; // +2 segundos

    setTimeout(() => {
        loader.style.transition = 'opacity 0.4s ease';
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.remove();
            document.body.style.overflow = 'auto';
        }, 400);
    }, extraDelay);
});