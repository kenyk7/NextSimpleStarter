import Head from 'next/head'
import Header from './default/header'
import Footer from './default/footer'

export default ({ children, title = 'React SSR PWA' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <Header/>
      {children}
    <Footer/>
  </div>
);
