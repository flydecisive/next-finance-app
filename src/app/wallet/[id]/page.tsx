"use client";

import { useParams } from "next/navigation";

export default function Wallet() {
  const params = useParams();
  console.log(params);

  return <div>{params?.id}</div>;
}
