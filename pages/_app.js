import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    // wrapping a global layout! to ALL PAGES!
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
