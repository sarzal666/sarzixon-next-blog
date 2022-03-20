import Head from 'next/head'
import Image from 'next/image'
import DefaultTheme from "./themes/DefaultTheme";
import Layout from "./components/Layout";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <DefaultTheme>
                <Layout>
                    <Header page="home" />
                </Layout>
            </DefaultTheme>
        </>
    )
}
