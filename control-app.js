// Registrar el Service Worker
if ('Notification' in window && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function(reg) {
            console.log('Service Worker registrado');
        })
        .catch(function(error) {
            console.error('Error al registrar el Service Worker:', error);
        });

    // Solicitar permiso para notificaciones
    Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
            console.log('Permiso concedido para notificaciones');
        } else {
            console.log('Permiso denegado para notificaciones');
        }
    });
}

// Manejar la recepción de notificaciones
navigator.serviceWorker.addEventListener('message', function(event) {
    const status = document.querySelector('.status');
    const historyList = document.getElementById('history-list');
    status.textContent = "¡Notificación recibida!";
    historyList.innerHTML += `<li>${event.data.message}</li>`;
});

// Temporizador (opcional)
let time = 0;
setInterval(function() {
    time++;
    document.getElementById('timer').textContent = new Date(time * 1000).toISOString().substr(11, 8);
}, 1000);
