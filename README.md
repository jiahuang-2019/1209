# 準備
安裝Node.JS，請參考server那邊的README.md。

# 安裝CLI工具
首先該Project是以Angular寫成的，所以需要安裝相應的工具：
```bash
 npm i -g @angular/cli
 ```
 之後爲此Project安裝所需Libries。
 ```bash
 npm i
 ```

# 修改環境變數
 之後可以打開 src/environments/environment.ts 修改環境變數（如有需要）：
 ```javascript

export const environment = {
  production: false,
  // server所在位置，請注意PORT
  api_server_url: "http://localhost:3000",
  socket_io_url: "http://localhost:3000"
};
```

# 執行
之後可以輸入命令在本地執行：
```bash
ng serve
```

成功後會有類似的顯示：
```bash
[len@Len-Laptop-ASUS-T304UA robi3-new-interface]$ ng serve
10% building 4/4 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:4200/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: 404s will fallback to //index.html

chunk {main} main.js, main.js.map (main) 166 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 299 kB [initial] [rendered]
chunk {polyfills-es5} polyfills-es5.js, polyfills-es5.js.map (polyfills-es5) 586 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 172 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 8.24 MB [initial] [rendered]
Date: 2019-10-18T08:58:27.917Z - Hash: ead7db5b63ab9632fb98 - Time: 11352ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
ℹ ｢wdm｣: Compiled successfully.
```
