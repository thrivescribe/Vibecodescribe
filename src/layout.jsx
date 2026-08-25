/** @type {import('@vercel/analytics/react').AnalyticsConfig} */

import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="VibeCode - A community platform for AI-assisted coders" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
