import Head from 'next/head'
import Image from 'next/image'
import DefaultTheme from "./themes/DefaultTheme";
import Layout from "./components/Layout";

export default function Home() {
    return (
        <>
            <DefaultTheme>
                <Layout>
                    test
                </Layout>
            </DefaultTheme>
        </>
    )
}
