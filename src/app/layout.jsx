import Layout from '@/components/layout/Layout';
import { Roboto, Plus_Jakarta_Sans } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.css'
import './global.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], variable: "--font-roboto" });

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700', '800'], display:'swap', variable: "--font-plus-jakarta-sans"  });


export const metadata = {
  title: 'arqvest',
  description: 'Arqvest, a smart way of investment!.Arqvest is a fintech company providing financial market-related services such as consultation, investment solutions, etc. with unique membership and credit card plans.',
  icons:{ 
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: "/site.webmanifest"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${roboto.variable} ${plusJakartaSans.variable}`}>
        <div id="_next">
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  )
}

export default RootLayout;