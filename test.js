import CryptoJS from 'crypto-js';

/**
 * AES 加密
 * @param {string} plaintext 明文
 * @param {string} key 密钥
 * @param {string} [iv] 初始化向量（可选）
 * @returns {string} 加密后的密文（Base64格式）
 */
function aesEncrypt(plaintext, key, iv) {
  // 将密钥和IV转换为CryptoJS支持的格式
  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const ivBytes = iv ? CryptoJS.enc.Utf8.parse(iv) : undefined;

  // 加密配置
  const cfg = {
    mode: CryptoJS.mode.CBC, // 加密模式
    padding: CryptoJS.pad.Pkcs7, // 填充方式
    iv: ivBytes // 初始化向量
  };

  // 执行加密
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(plaintext),
    keyBytes,
    cfg
  );

  // 返回Base64格式的密文
  return encrypted.toString();
}

/**
 * AES 解密
 * @param {string} ciphertext 密文（Base64格式）
 * @param {string} key 密钥
 * @param {string} [iv] 初始化向量（可选）
 * @returns {string} 解密后的明文
 */
function aesDecrypt(ciphertext, key, iv) {
  // 将密钥和IV转换为CryptoJS支持的格式
  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const ivBytes = iv ? CryptoJS.enc.Utf8.parse(iv) : undefined;

  // 解密配置
  const cfg = {
    mode: CryptoJS.mode.CBC, // 加密模式
    padding: CryptoJS.pad.Pkcs7, // 填充方式
    iv: ivBytes // 初始化向量
  };

  // 执行解密
  const decrypted = CryptoJS.AES.decrypt(
    ciphertext,
    keyBytes,
    cfg
  );

  // 返回UTF-8格式的明文
  return decrypted.toString(CryptoJS.enc.Utf8);
}

// 示例用法
const key = "1234567890abcdef1234567890abcdef"; // 32字节密钥（256位）
const iv = "abcdef1234567890"; // 16字节IV（可选）

const plaintext = "这是一段需要加密的敏感数据";
console.log("原文:", plaintext);

// 加密
const encrypted = aesEncrypt(plaintext, key, iv);
console.log("加密后:", encrypted);

// 解密
const decrypted = aesDecrypt(encrypted, key, iv);
console.log("解密后:", decrypted);