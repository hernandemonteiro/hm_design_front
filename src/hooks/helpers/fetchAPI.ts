import CryptoHelper from "./crypto";

export async function fetchAPI(route: string, method: string) {
  return await fetch(`${import.meta.env.VITE_API_URL}${route}`, {
    method: method,
    headers: {
      "x-access-token": await CryptoHelper.cryptoEncrypt(
        import.meta.env.VITE_HASH_SECRET
      ),
    },
  }).then(async (response) => await response.json());
}
