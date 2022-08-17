export default class LocalStorage {
  getLocalStorage<T> (keyName: string): T | null {
    const value = localStorage.getItem(keyName)

    if (value === null) return null

    return JSON.parse(value)
  }

  setLocalStorage<T> (keyName: string, value: T): boolean {
    try {
      localStorage.setItem(keyName, JSON.stringify(value))
      return true
    } catch (e) {
      return false
    }
  }

  clearLocalStorage (): boolean {
    try {
      localStorage.clear()
      return true
    } catch (e) {
      return false
    }
  }

  removeItemLocalStorage (keyName: string): boolean {
    try {
      localStorage.removeItem(keyName)
      return true
    } catch (e) {
      return false
    }
  }
}
