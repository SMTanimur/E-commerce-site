import Layout from "@components/Layout";
import "../../styles/globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="dark:bg-gray-900 dark:text-white">
      <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </div>
    </QueryClientProvider>
  )
}

export default MyApp;
