"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function ClearSearchForm() {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button
      type="reset"
      onClick={reset}
      className="hover:drop-shadow-md transition-all"
    >
      <Link href="/" className="search-btn text-white-100">
        <X className="size-5" />
      </Link>
    </button>
  );
}
