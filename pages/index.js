import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="text-primary">
        <p className="text-purple-600">first commit</p>
      </div>
    </Layout>
  );
}
