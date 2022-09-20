import CryptoJS from "crypto-js";

export default function useToken(){
    const hash = import.meta.env.VITE_HASH_SECRET;
    var iv = CryptoJS.enc.Base64.parse(import.meta.env.VITE_HASH_SECRET);
    const secret = CryptoJS.SHA256(import.meta.env.VITE_HASH_SECRET);
    const token = CryptoJS.AES.encrypt(hash, secret, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();

    return token;
}