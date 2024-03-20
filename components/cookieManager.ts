import { NativeModules, Platform } from 'react-native';

const CookieManager = NativeModules.CookieManager;

export default {
  set: (url: string, cookie: string, callback: (success: boolean) => void) => {
    if (Platform.OS === 'android') {
      CookieManager.setFromResponse(url, cookie, callback);
    } else {
      // For iOS, you can use a different cookie management library or implement your own logic.
      // Here, we're using a dummy implementation that always calls the callback without setting any cookies.
      callback(false);
    }
  },
  get: (url: string, callback: (cookies: string) => void) => {
    CookieManager.get(url, callback);
  },
};