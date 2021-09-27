import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} -Amazona` : 'Amazona'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <Header />
      <main className='container mx-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
