// Import Document component from next/document
import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add custom fonts here */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Raleway:ital,wght@0,100;0,200;1,100&family=Space+Mono&family=Tapestry&family=Work+Sans:wght@400;500;800&display=swap" rel="stylesheet"/>      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
