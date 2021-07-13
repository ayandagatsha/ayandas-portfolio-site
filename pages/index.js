import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p></p>
        <p>
          I enjoy telling computers what to do...{' '}since sooner or later,
          they end up doing what I say.{' '} Check out some of what I've been able to create: {''}
          <a href="http://localhost:3000/portfolio/projects" >Projects</a>
        </p>
      </section>
    </Layout>
  )
}