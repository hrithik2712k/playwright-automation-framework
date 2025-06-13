import cryptoJs from "crypto-js";

export default class CommonUtils {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
  }

  /**
   * Provide Encrypted Data from String
   * @param data
   * @returns encryptedData
   */

  public encryptData(data: string) {
    const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
    console.log("Encrypted Data", encryptedData);
    return encryptedData;
  }

  /**
   * Provide decrypted Data from String
   * @param data
   * @returns decryptedData
   */

  public decryptData(data: string) {
    const decryptedData = cryptoJs.AES.decrypt(data, this.secretKey).toString(
      cryptoJs.enc.Utf8
    );
    return decryptedData;
  }
}
