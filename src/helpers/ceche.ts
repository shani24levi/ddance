const CECHENAME = 'APP'

export const initallDataIntoCache = (response: any) => {
    if ('caches' in window) {
        // Opening given cache and putting our data into it
        caches.open(CECHENAME).then((cache) => {
            cache.addAll(response)
        })
    }
}

export const addDataIntoCache = (response: any) => {
    if ('caches' in window) {
        caches.open(CECHENAME).then((cache) => {
            cache.add(response)
        })
    }
}

export const removeDataIntoCache = (url: string) => {
    if ('caches' in window) {
        caches.open(CECHENAME).then((cache) => {
            cache.delete(url).then((response) => {
                return
            })
        })
    }
}
