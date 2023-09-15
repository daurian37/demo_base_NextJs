import './globals.css'

//page de demarrage de l'application

export const metadata = {
  title: 'Demo',
  description: 'ceci est une demo pour l\'apprentissage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
