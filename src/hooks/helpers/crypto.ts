import CryptoJS from "crypto-js";

export class CryptoHelper {
  private iv;
  private secret;
  constructor() {
    this.iv = CryptoJS.enc.Base64.parse(import.meta.env.VITE_HASH_SECRET);
    this.secret = CryptoJS.SHA256(import.meta.env.VITE_HASH_SECRET);
  }
  cryptoEncrypt(value: string) {
    return CryptoJS.AES.encrypt(value, this.secret, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  }

  cryptoDecrypt(value: string) {
    return CryptoJS.AES.decrypt(value, this.secret, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  }
}

export default new CryptoHelper();
