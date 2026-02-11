import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomeMain from "@/pages/homes/home-2";

export const metadata: Metadata = {
  title: "Digiheads",
};

export default function Home() {
  return (
    <>
      {/* <HomeOnePage /> */}
      <HomeMain/>
    </>
  );
}
