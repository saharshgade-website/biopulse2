self.addEventListener('push', (event) => {
  let data = { title: 'BioPulse alert', body: 'High risk detected nearby.' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    // keep the fallback text above rather than showing nothing
  }
  event.waitUntil(self.registration.showNotification(data.title, { body: data.body }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
