"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ pathName }: { pathName: string }) {
  const router = useRouter();
  return (
    <button
      className="bg-blue-800 text-white cursor-pointer p-2 font-bold"
      onClick={() => router.push(`/${pathName}`)}
    >
      Back
    </button>
  );
}
