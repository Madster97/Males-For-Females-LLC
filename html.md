<meta name="base:app_id6972dd8e88e3bac59cf3d478"content="6972dd8e88e3bac59cf3d478" />
import { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    'base:app_id': '6972dd8e88e3bac59cf3d478',
  },
};

export default function Home() {
  return (<div>{/* Your page content */}</div>);
}
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="base:app_id" content="6972dd8e88e3bac59cf3d478" />
      </Head>
      {/* Your page content */}
    </>
  );
}