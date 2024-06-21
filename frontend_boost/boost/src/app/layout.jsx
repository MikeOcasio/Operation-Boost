import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'


import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '',
    default:
      'Operation Boost - A collection of resources to help you build and grow your next gaming project',
  },
  description:
    'this is a collection of resources to help you build and grow your next gaming project',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-RussianViolet">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
