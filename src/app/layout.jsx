import Layout from '@/components/layout/Layout';
import { Roboto } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.css'
import './global.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], display:'swap' });


export const metadata = {
  title: 'arqvest',
  description: 'Arqvest, a smart way of investment!.Arqvest is a fintech company providing financial market-related services such as consultation, investment solutions, etc. with unique membership and credit card plans.',
  icons:{ 
    icon: "./favicon.ico",
  }
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={roboto.className}>
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