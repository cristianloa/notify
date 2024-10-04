// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function(reg) {
            console.log('Service Worker registrado correctamente:', reg);
        })
        .catch(function(error) {
            console.error('Error al registrar el Service Worker:', error);
        });

    // Solicitar permiso para notificaciones
    Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
            console.log('Permiso para notificaciones concedido');
        } else {
            console.log('Permiso para notificaciones denegado');
        }
    });
} else {
    console.error('Service Workers no son soportados por este navegador.');
}

// Manejar la recepción de notificaciones
navigator.serviceWorker.addEventListener('message', function(event) {
    console.log('Notificación recibida:', event.data);
    const status = document.querySelector('.status');
    const historyList = document.getElementById('history-list');
    status.textContent = "¡Notificación recibida!";
    historyList.innerHTML += `<li>${event.data.message}</li>`;
});
