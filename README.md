## Design For Next.js

## インポート
####  bootstrap
```
yarn add bootstrap@next
```

#### Tailwind導入（あとから導入） 
- パッケージのインストール
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```  

  - Tailwind CSSの設定ファイルの編集

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- グローバルCSSファイルの設定
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Next.jsプロジェクトにCSSをインポート
  - pages/_app.jsにグローバルcssをインポート
```
import '../styles/globals.css'
```
