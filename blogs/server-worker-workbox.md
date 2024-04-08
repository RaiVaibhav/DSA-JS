
# Service workers and Workbox.

![service worker](https://miro.medium.com/v2/resize:fit:720/format:webp/1*etkZ_vD_0u6UzGF3U4_bTg.png)

This is a small blog to me to keep a note on the concept of how Workbox works internally.

**What is service worker?** (Copied from Mozilla doc)

Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

**Service worker concept and usage?**

A service worker is an event-driven [worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) registered against an origin and a path. It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).

It has no DOM access and runs on a different thread to the main JavaScript that powers your app, so it is non-blocking. It is designed to be fully async; as a consequence, APIs such as synchronous [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) can’t be used inside a service worker.

Service workers can’t import JavaScript module dynamically, and [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) will throw if it is called in a service worker global scope. Static import using the [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement is allowed.

Service workers only run over HTTPS, for security reasons. Most significantly, HTTP connections are susceptible to malicious code injection by [man in the middle](https://developer.mozilla.org/en-US/docs/Glossary/MitM) attacks, and such attacks could be worse if allowed access to these powerful APIs.

Now service worker relies on three steps.
> **Registration -> Installation -> Activation.**

**Registration:**

* Register a script for installation by telling the service worker where this script is located and later it can start installing in the background.

* Checkout about the [options](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register) here, basically options contain value like **scope**: path of the script, **type**: specifying the type of worker to create.
```
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js", options).then(
        (registration) => {
          console.log("Service worker registration succeeded:", registration);
        },
        (error) => {
          console.error(`Service worker registration failed: ${error}`);
        },
      );
    } else {
      console.error("Service workers are not supported.");
    }
```
**Install and activate**:

After service worker is registered, the browser will attempt to install then activate the service worker for your page/site.

The install event is fired when an installation is successfully completed. The install event is generally used to populate your browser's offline caching capabilities with the assets you need to run your app offline. To do this, we use Service Worker's storage API — [cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) — a global object on the service worker that allows us to store assets delivered by responses, and keyed by their requests. This API works in a similar way to the browser's standard cache, but it is specific to your domain. The contents of the cache are kept until you clear them.

(coming from mozilla straight)

    const putInCache = async (request, response) => {
      const cache = await caches.open("v1");
      await cache.put(request, response);
    };
    
    const cacheFirst = async ({ request, fallbackUrl }) => {
      // First try to get the resource from the cache
      const responseFromCache = await caches.match(request);
      if (responseFromCache) {
        return responseFromCache;
      }
    
      // Next try to get the resource from the network
      try {
        const responseFromNetwork = await fetch(request);
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
      } catch (error) {
        const fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
          return fallbackResponse;
        }
        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response("Network error happened", {
          status: 408,
          headers: { "Content-Type": "text/plain" },
        });
      }
    };
    
    self.addEventListener("fetch", (event) => {
      event.respondWith(
        cacheFirst({
          request: event.request,
          fallbackUrl: "/gallery/myLittleVader.jpg",
        }),
      );
    });

Notice here, there is a lot of things going, starting from register to install, now while installing here we are defining the cache First strategy and the logic of that strategy i.e., everything we are doing from scratch.

**So, what's the role of Workbox, if we can do everything?**

Its same as saying, I can create a webpage with simple plain, html, CSS, and js without using React.js, **yes we can**.

Consider workbox as a wrapper/framework/high-level Api or whatever, but not only it gives different strategy for caching but also it makes caching possible in just one line of code.

Suppose if I have to write a caching strategy for caching the Image, it will be a huge headache, and will require a lot of brainstorming but Workbox takes care of all of this.

**Resources**

* Worker Lifecycle: [The service worker lifecycle | Articles | web.dev](https://web.dev/articles/service-worker-lifecycle)
* Service Worker API: [Using Service Workers — Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

Blog  URL - https://raivaibhav.medium.com/service-workers-and-workbox-07f6c625bf73