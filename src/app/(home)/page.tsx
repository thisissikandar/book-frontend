import { Suspense } from "react";
import Banner from "./components/Banner";
import Booklist from "./components/Booklist";
import Loader from "@/components/Loader";

export default async function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loader />}>
        <Booklist />
      </Suspense>
    </div>
  );
}
