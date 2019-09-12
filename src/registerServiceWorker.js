// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

export default function register() {
  let installingWorker

  document.getElementById('app-reload').addEventListener('click', () => {
    installingWorker.postMessage('skipWaiting')
  })

  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

      function showUpdateBar() {
        const snackbar = document.getElementById('refresh-snackbar')
        snackbar.className = 'show'
      }

      function hideUpdateBar() {
        const snackbar = document.getElementById('refresh-snackbar')
        snackbar.className = 'hide'
      }

      navigator.serviceWorker.register(swUrl).then((registration) => {
        registration.onupdatefound = () => {
          installingWorker = registration.installing
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // NEW CONTENT TIME TO REFRESH BABY
                showUpdateBar()
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.')
              }
            }
          }
        }
      }).catch((error) => {
        console.error('Error during service worker registration:', error)
      })
      let refreshing
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) {
          return
        }
        hideUpdateBar()
        window.location.reload()
        refreshing = true
      })
    })
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
    })
  }
}
