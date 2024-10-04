document.getElementById('send-btn').addEventListener('click', function() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            const notificationData = {
                title: '¡Notificación de Sustentación!',
                body: 'Este es un mensaje de prueba desde la interfaz de envío.',
            };
            registration.showNotification(notificationData.title, {
                body: notificationData.body,
                icon: 'icon.png' // Asegúrate de que esta ruta sea correcta
            });
        });
    } else {
        console.log('Permiso no concedido para las notificaciones.');
    }
});
