// sw.js

// Escuchar el evento de notificación
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Cierra la notificación al hacer clic

    // Abre la ventana de la aplicación si está cerrada
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Si hay una ventana abierta, la lleva al frente
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            // Si no hay ventana abierta, abre una nueva
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
