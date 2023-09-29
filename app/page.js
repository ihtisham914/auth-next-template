"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const token = useSelector((state) => state.Auth.token);
  if (token === "") {
    router.push("/auth/login");
  }
  return <main>welcome to the app</main>;
}
