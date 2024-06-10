const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splittedUrl = this._urlSplitter(url);
        return this._urlCombiner(splittedUrl);
    },

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    },

    _urlSplitter(url) {
        const splitUrl = url.split('/');
        return {
            resource: splitUrl[1] || null,
            id: splitUrl[2] || null,
            action: splitUrl[3] || null,
        };
    },

    _urlCombiner(splittedUrl) {
        return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/') + (splittedUrl.id ? '/:id' : '') + (splittedUrl.action ? `/${splittedUrl.action}` : '');
    },
};

export default UrlParser;
