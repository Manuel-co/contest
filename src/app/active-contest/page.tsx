import UserAvatar from "@/components/active-contest/userAvatar";
import Head from "next/head";


export default function page() {
  return (
    <>
      {/* <Head>
        <title>Product Countdown</title>
        <meta name="description" content="Track product countdown" />
      </Head> */}

      <main className="min-h-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center space-y-8">
          <UserAvatar />
          {/* <ProgressMeter /> */}
        </div>
      </main>
    </>
  );
}
