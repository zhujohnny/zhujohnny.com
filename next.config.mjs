import nextra from 'nextra'

const withNextra = nextra({
  staticImage: true,
  defaultShowCopyCode: false,
})

export default withNextra({
  reactStrictMode: true,
})
