document.getElementById('notify-btn').addEventListener('click', function() {
    // Simular envío de notificación
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
            reg.showNotification('¡Es momento de volver a la sala!');
        });
        document.getElementById('message').textContent = 'Alerta enviada';
    } else {
        document.getElementById('message').textContent = 'Notificaciones no permitidas';
    }
});
