import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eric Portofolio</title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='min-h-screen'>
          <nav className='py-10'>
            <h1>developedbyed</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href='#'>Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
