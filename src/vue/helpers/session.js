import md5 from "md5/md5";

export default {
    getItem(key) {
        const item = sessionStorage.getItem(key)

        return JSON.parse(item)
    },

    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value))
    },

    /**
     * @param objectKey Object
     * @returns {any}
     */
    getItemHash(objectKey) {
        const item = sessionStorage.getItem(md5(JSON.stringify(objectKey)))

        if (!item) {
            return null
        }

        return JSON.parse(item)
    },

    /**
     * @param objectKey Object
     * @param value Object
     */
    setItemHash(objectKey, value) {
        sessionStorage.setItem(md5(JSON.stringify(objectKey)), JSON.stringify(value))
    }
}