// Types for config passed to the service worker registration
type ServiceWorkerConfig = {
    onUpdate?: (registration: ServiceWorkerRegistration) => void
    onSuccess?: (registration: ServiceWorkerRegistration) => void
}

// Check if service workers are supported and if we are on localhost
const isLocalhost: boolean = Boolean(
    window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
)

const appUrl = import.meta.env.VITE_PUBLIC_URL

export function register(config?: ServiceWorkerConfig): void {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(appUrl as string, window.location.href)
        if (publicUrl.origin !== window.location.origin) return

        window.addEventListener('load', () => {
            const swUrl = `${appUrl}/service-worker.js`

            if (isLocalhost) {
                // Validate existing service worker
                checkValidServiceWorker(swUrl, config)
                navigator.serviceWorker.ready.then(() => {
                    console.log('Service worker is ready.')
                })
            } else {
                // Register a new service worker
                registerValidSW(swUrl, config)
            }
        })
    }
}

function registerValidSW(swUrl: string, config?: ServiceWorkerConfig): void {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing
                if (installingWorker == null) return

                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log(
                                'New content is available; please refresh.'
                            )
                            if (config?.onUpdate) config.onUpdate(registration)
                        } else {
                            console.log('Content is cached for offline use.')
                            if (config?.onSuccess)
                                config.onSuccess(registration)
                        }
                    }
                }
            }
        })
        .catch((error) => {
            console.error('Error during service worker registration:', error)
        })
}

function checkValidServiceWorker(
    swUrl: string,
    config?: ServiceWorkerConfig
): void {
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then((response) => {
            const contentType = response.headers.get('content-type')
            if (
                response.status === 404 ||
                (contentType != null && !contentType.includes('javascript'))
            ) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload()
                    })
                })
            } else {
                registerValidSW(swUrl, config)
            }
        })
        .catch(() => {
            console.log(
                'No internet connection. App is running in offline mode.'
            )
        })
}

export function unregister(): void {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister()
        })
    }
}
