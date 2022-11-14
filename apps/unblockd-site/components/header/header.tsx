import Head from 'next/head';
import Navbar from 'components/navbar/navbar';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <Head>
        <title>Unblockd</title>
        <meta name="description" content="Web3 Unblockd" />
      </Head>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
