"use client";

import dynamic from "next/dynamic";

const ComingSoon = dynamic(() => import("@/components/comingsoon/comingsoon"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Page() {
  return <ComingSoon />;
}
