import Image from "next/image";
import Header from "../components/Header";
import List from "@/components/List";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Materials Demo </h1>
      <div>
        <Header />
        <List />
        <Details />
        <Footer />
      </div>
    </main>
  );
}
