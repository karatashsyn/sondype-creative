import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="ahrefs-site-verification"
            content="5d68cf6541eb0d46481ddd3ba1134d86a176d96f496c105b91e1f6d383a27568"
          />
          <meta
            name="google-site-verification"
            content="HS0GbZWwQ0J8MyZkaoYlFS50xMQdmlXAzxWoUZ6t6pg"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jm9bt1j1en");`,
            }}
          ></script>
          <link rel="icon" href="/sc.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
