import Image from "next/image";
import MaterialsCatalog from "@/components/MaterialsCatalog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <MaterialsCatalog />
      <footer className="my-7 text-xs">
        <p>
          The code for this component can be found{" "}
          <a
            className="underline underline-offset-2 decoration-dotted"
            target="_blank"
            href="https://github.com/gregoryMD/materials-catalog"
          >
            here.
          </a>
        </p>
      </footer>
    </main>
  );
}
