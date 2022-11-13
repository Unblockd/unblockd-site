import Layout from 'components/layout/layout';
import { AppProps } from 'next/app';
import './styles.css';
import { ThemeProvider } from 'next-themes';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default CustomApp;
