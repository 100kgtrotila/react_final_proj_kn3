export const safeLocalStorage = {
    getItem: (key: string): string | null => {
        try {
            return localStorage.getItem(key)
        } catch (error) {
            console.error(`Error reading from localStorage (${key}):`, error)
            return null
        }
    },

    setItem: (key: string, value: string): void => {
        try {
            localStorage.setItem(key, value)
        } catch (error) {
            console.error(`Error writing to localStorage (${key}):`, error)
        }
    },

    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error(`Error removing from localStorage (${key}):`, error)
        }
    },
}
