/* eslint-disable */

self.addEventListener('message', function (event) {
  if (event.data && event.data === 'skipWaiting') {
    self.skipWaiting()
  }
})
