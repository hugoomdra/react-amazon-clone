import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* HEADER */}
      <Header></Header>

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner></Banner>

        {/* Product Feed */}
        <ProductFeed products={products}></ProductFeed>
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()
  // const products = await (await (fetch('https://dummyjson.com/products'))).json()
  return {
    props: {
      products: data,
    }, // will be passed to the page component as props
  }
}
