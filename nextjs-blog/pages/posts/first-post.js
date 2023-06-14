import Link from 'next/link';
import styled from "styled-components";
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <div>
                <Link href="/">
                    <h1>First Post</h1>
                    <Image src="/images/profile.jpg" height={144} width={144} alt='Andrew' />
                </Link>
            </div>
        </Layout>
    );
}

const H2 = styled.h2`
`

export default FirstPost;