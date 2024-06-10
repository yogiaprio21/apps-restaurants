import CONFIG from '../globals/config.js';

const CacheHandler = {
    async cachingAppShell(requests) {
        const cache = await this.openCache();
        cache.addAll(requests);
    },

    async deleteOldCaches() {
        const cacheNames = await caches.keys();
        cacheNames
            .filter((cacheName) => cacheName !== CONFIG.CACHE_NAME)
            .map((filteredCacheName) => caches.delete(filteredCacheName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);

        if (response) {
            this._fetchRequest(request);
            return response;
        }

        return this._fetchRequest(request);
    },

    async openCache() {
        return caches.open(CONFIG.CACHE_NAME);
    },

    async _fetchRequest(request) {
        const response = await fetch(request);
        if (!response || response.status !== 200) {
            return response;
        }

        await this._addCache(request);
        return response;
    },

    async _addCache(request) {
        const cache = await this.openCache();
        cache.add(request);
    },
};

export default CacheHandler;
