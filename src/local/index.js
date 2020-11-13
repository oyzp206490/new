const local = {
    setToken(key, value) {
        localStorage.setItem(key, value)
    },
    getToken(value) {
        localStorage.getItem(value)
    },
    removeToken(value) {
        localStorage.removeItem(value)
    }
}

export default local