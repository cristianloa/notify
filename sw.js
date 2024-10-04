self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'No hay datos',
        icon: 'icon.png' // Asegúrate de que esta ruta sea correcta
    };

    event.waitUntil(
        self.registration.showNotification('Notificación de Sustentación', options)
    );
});

// Manejo de la interacción con la notificación
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('control.html') // Redirige a la página de control al hacer clic
    );
});
