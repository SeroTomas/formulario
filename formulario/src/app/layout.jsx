//style
import '../styles/globals.scss'
//hooks, dependencias
import ContextProvider from '@/components/AppContext';

export const metadata = {
  title: 'Formulario',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
