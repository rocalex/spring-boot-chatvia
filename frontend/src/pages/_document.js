import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.ico"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        {/* eslint-disable @next/next/no-sync-scripts */}
        <script src="/assets/libs/jquery/jquery.min.js"/>
        <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"/>
        <script src="/assets/libs/node-waves/waves.min.js"/>

        <script src="/assets/libs/magnific-popup/jquery.magnific-popup.min.js"/>

        <script src="/assets/libs/owl.carousel/owl.carousel.min.js"/>

        <script src="/assets/js/pages/index.init.js"/>

        <script src="/assets/js/app.js"/>
        {/* eslint-enable @next/next/no-sync-scripts */}
        </body>
      </Html>
    )
  }
}

export default MyDocument