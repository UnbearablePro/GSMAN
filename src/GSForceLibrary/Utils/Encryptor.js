/**
 * Encryptor has the functionality for encrypting data.
 * 
 */
class Encryptor {

  /**
   * Hash a piece of text.
   * 
   * @param {string} textToHash : string
   */
  static hash(textToHash) {
    let cryptedMessage = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, textToHash);
    return Utilities.base64Encode(cryptedMessage); 
  }

  /**
   * Encrypt a piece of text.
   * 
   * @param {string} textToEncrypt : string
   */
  static encrypt(textToEncrypt) {
    let encryptedMessage = Utilities.base64EncodeWebSafe(textToEncrypt);
    return encryptedMessage;
  }

  /**
   * Decrypt a piece of text.
   * 
   * @param {string} textToDecrypt : string
   */
  static decrypt(textToDecrypt) {
    var decryptedMessage = Utilities.base64DecodeWebSafe(textToDecrypt);
    return Utilities.newBlob(decryptedMessage).getDataAsString();
  }
}


