const staticName = 's-app-v3'

const assetUrls = [
    'index.html',
    '../src/App.js',
    '../src/index.js',
    '../src/styles/style.css'
]

self.addEventListener('install', async () => {

       const cache = await caches.open(staticName)
       await cache.addAll(assetUrls)
})


self.addEventListener('activate',async () => {

    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames.filter(name => name !== staticName).map(name => caches.delete(name))
    )
})

self.addEventListener('fetch', (evt) => {
    // const {request} = evt

    // const url = new URL(request.url)

    // if(url.origin === location.origin) {
    //     evt.respondWith(cacheFirst(request))
    // } else {
    //     evt.respondWith(networkFirst(request))
    // }

    evt.respondWith(cacheFirst(evt.request))
})

async function cacheFirst(request) {
        const cached = await caches.match(request)
        return cached ?? await fetch(request)
}


// async function networkFirst(request) {

//     const cache = await caches.open(dynamicName)


//     try {
//         const response = await fetch(request)
//         await cache.put(request, response.clone())
//         return response
//     } catch(e) {
//         const cached = await cache.match(request)
//         return cached
//     }
   
// }