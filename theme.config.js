import React from 'react'

export default {
  logo: (
    <>
      <span style={{ fontWeight: 700 }}>Johnny Zhu</span>
      <span style={{ color: '#888', marginLeft: '0.5rem', fontWeight: 400 }}>
        Los Angeles, CA
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/zhujohnny',
  },
  docsRepositoryBase: 'https://github.com/zhujohnny/zhujohnny.com/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Johnny Zhu',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Johnny Zhu – Senior Software Engineer at Riot Games, Los Angeles" />
      <meta property="og:title" content="Johnny Zhu" />
      <meta property="og:description" content="Senior Software Engineer at Riot Games, Los Angeles" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: `© ${new Date().getFullYear()} Johnny Zhu`,
  },
  faviconGlyph: '👋',
}
