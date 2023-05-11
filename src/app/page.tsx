import Image from "next/image";
import MaterialsCatalog from "@/components/MaterialsCatalog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <MaterialsCatalog />
    </main>
  );
}
