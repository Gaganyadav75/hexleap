"use client"
import Mode from "@/components/Mode";
import SportsSection from "@/components/SportsSection";
import CollectionSection from "@/components/CollectionSection";

export default function Home() {


  return (
    <main 
    className="flex min-h-screen dark:bg-[#292B32] bg-main-bg-color flex-col gap-10 items-center justify-between medium:px-0 small:p-0 small:py-10 p-20"
    >
        {/* {sports div} */}

        <SportsSection/>

        {/* {collection div} */}

        <CollectionSection/>


        {/* {dark & light mode switch} */}

        <Mode/>


    </main>
  );
}
