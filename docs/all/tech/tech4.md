---
title: crypto-js aes 加解密
--- 
# 前端 crypto-js aes 加解密
  
&emsp;&emsp;关于 <span class="pein">AES</span> 加密的算法有兴趣的小伙伴可自行百度，这里我先推荐几篇文章[AES加密算法的详细介绍与实现](https://blog.csdn.net/qq_28205153/article/details/55798628)、[理解AES加密解密的使用方法](https://blog.csdn.net/vieri_32/article/details/48345023)  
### 具体实现  
&emsp;&emsp;要用 <span class="pein">AES</span> 算法加密，首先我们要引入 <span class="pein">crypto-js</span> ，<span class="pein">crypto-js</span> 是一个纯 <span class="pein">javascript</span> 写的加密算法类库 ，可以非常方便地在 <span class="pein">javascript</span> 进行 <span class="pein">MD5</span>、<span class="pein">SHA1</span>、<span class="pein">SHA2</span>、<span class="pein">SHA3</span>、<span class="pein">RIPEMD-160</span> 哈希散列，进行 <span class="pein">AES</span>、<span class="pein">DES</span>、<span class="pein">Rabbit</span>、<span class="pein">RC4</span>、<span class="pein">Triple DES</span> 加解密，我们可以采用 <span class="pein">npm i crypto-js --save</span> 进行下载安装，也可以直接去 [GitHub](https://github.com/brix/crypto-js)下载源码~  
### 定义加密和解密方法
```javascript
    const CryptoJS = require('crypto-js');  //引用AES源码js
    
    const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量
    
    //解密方法
    function Decrypt(word) {
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
    
    //加密方法
    function Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.ciphertext.toString().toUpperCase();
    }
    
    export default {
        Decrypt ,
        Encrypt
    }
```  

&emsp;&emsp;上面的代码中的 <span class="pein">key</span> 是密钥 ，<span class="pein">iv</span> 是密钥偏移量，这个一般是接口返回的，为了方便，我们这里就直接在这里定义了。值得注意的是密钥的长度，由于对称解密使用的算法是 <span class="pein">AES-128-CBC</span>算法，数据采用 <span class="pein">PKCS#7</span> 填充 ， 因此这里的 <span class="pein">key</span> 需要为16位！接着我们定义了 解密方法 <span class="pein">Decrypt</span> 和 加密方法 <span class="pein">Encrypt</span> ，最后通过 <span class="pein">export default</span> 将其暴露出去，方便在需要的时候进行引入~
  
 

