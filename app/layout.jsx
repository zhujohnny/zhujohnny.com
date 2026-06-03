import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s – Johnny Zhu',
  },
  description: 'Johnny Zhu – Senior Software Engineer at Riot Games, Los Angeles',
  openGraph: {
    title: 'Johnny Zhu',
    description: 'Senior Software Engineer at Riot Games, Los Angeles',
  },
}

const logo = (
  <>
    <span style={{ fontWeight: 700 }}>Johnny Zhu</span>
    <span style={{ color: '#888', marginLeft: '0.5rem', fontWeight: 400 }}>
      Los Angeles, CA
    </span>
  </>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="👋">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={<Navbar logo={logo} projectLink="https://github.com/zhujohnny" />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/zhujohnny/zhujohnny.com/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<Footer>© {new Date().getFullYear()} Johnny Zhu</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
