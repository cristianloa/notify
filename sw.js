self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title || 'Notificación de Sustentación';
    const options = {
        body: data.body || 'Es momento de regresar a la sala de sustentación.',
        icon: 'icon.png'  // Puedes incluir un ícono si lo deseas
    };

    // Mostrar la notificación
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
