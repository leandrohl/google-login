export default class LocalStorage {
  public static getLocalStorage <T> (keyName: string): T | null {
    const value = localStorage.getItem(keyName)

    if (!value) return null
  
    return JSON.parse(value)
  } 

  public static setLocalStorage <T> (keyName: string, value: T): boolean {
    try {
      localStorage.setItem(keyName, JSON.stringify(value))
      return true
    } catch (e) {
      return false
    }
  } 

  public static clearLocalStorage <T> (keyName: string): boolean {
    try {
      localStorage.clear()
      return true
    } catch (e) {
      return false
    }
  } 

  public static removeItemLocalStorage <T> (keyName: string): boolean {
    try {
      localStorage.removeItem(keyName)
      return true
    } catch (e) {
      return false
    }
  } 
}