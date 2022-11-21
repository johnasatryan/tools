import type { NextPage } from 'next';
import { Header } from '../src/components/header/header';
import { Section } from '../src/components/section/section';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> mirror-image.pages.dev </title>
        <meta
          name='google-site-verification'
          content='3DJgqPIkJumVhCqXWqrIGrYdfYmsnPBZ7uXjd_QNdmE'
        />
      </Head>
      <Header />
      <Section />
    </>
  );
};

export default Home;
