self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(), // Cuerpo del mensaje de la notificación
        icon: 'icon.png' // Ruta del ícono (opcional)
    };
    
    event.waitUntil(
        self.registration.showNotification('Notificación de Sustentación', options)
    );
});

// Manejo de mensajes del cliente
self.addEventListener('message', function(event) {
    // Puedes manejar el mensaje que envía el cliente aquí si es necesario
});
