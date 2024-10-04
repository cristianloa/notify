// app.js

// Checar si el navegador soporta las notificaciones
if ('Notification' in window && 'serviceWorker' in navigator) {
    console.log('Web Push Notifications y Service Worker son compatibles');

    // Pide permiso para enviar notificaciones
    Notification.requestPermission(status => {
        console.log('Permiso de notificación: ', status);
    });
} else {
    console.log('Este navegador no soporta notificaciones push.');
}

// Función para registrar el service worker y manejar las notificaciones
navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('Service Worker registrado con éxito.');

    document.getElementById('notifyBtn').addEventListener('click', () => {
        if (Notification.permission === 'granted') {
            // Envía la notificación
            registration.showNotification('Lectura Final', {
                body: 'Es momento de volver a la sala para la lectura final.',
                icon: 'https://example.com/icon.png', // Puedes personalizar el ícono
                vibrate: [200, 100, 200],
                tag: 'final-sustentacion',
                renotify: true
            });
        } else {
            console.log('Permiso de notificación no concedido.');
        }
    });
}).catch(error => {
    console.error('Error al registrar el service worker:', error);
});
