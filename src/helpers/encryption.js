import { AES } from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";

const key = "adana0101";
export const encrytion = (data) => {
  const jsonString = JSON.stringify(data);
  return AES.encrypt(jsonString, key).toString();
};

export const decryption = (data) => {
  const decryptedBytes = AES.decrypt(data, key);
  const decryptedData = decryptedBytes.toString(Utf8);
  return JSON.parse(decryptedData);
};
