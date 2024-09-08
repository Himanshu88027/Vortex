"use client";

import qs from "query-string"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
    const router = useRouter()
    const [value, setValue] = useState("")
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!value) return;

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value }
        }, {skipEmptyString: true})

        router.push(url)
    }
    const onClear = () => {
        setValue("")
    }
  return (
    <form
        onSubmit={onSubmit}
        className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
      value={value}
      onChange={(e)=> setValue(e.target.value)}
        placeholder="search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X  
            onClick={onClear}
            className="absolute h-5 w-5 cursor-pointer top-2.5 right-14 text-muted-foreground transition hover:text-primary"
        />
      )
      }
      <Button
         type="submit"
         variant="secondary"
         size="sm"
         className="rounded-l-none opacity-60 hover:opacity-100 transition"
      >
        <SearchIcon className="h-5 w-5 text-primary" />
      </Button>
    </form>
  );
};
