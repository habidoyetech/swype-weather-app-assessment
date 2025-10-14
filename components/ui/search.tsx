import { useEffect, useId, useState } from "react"
import { LoaderCircleIcon, MicIcon, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function InputSearch({className, onChange, value, placeholder}: React.ComponentProps<"input">) {
  const id = useId()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (value) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
    setIsLoading(false)
  }, [value])

  return (
    <div className="">
      <div className="relative font-sans bg-background/50">
        <Input
          id={id}
          className={cn(className, " text-foreground pl-10 py-5")}
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={onChange}
        />
        <button
          className="text-background focus-visible:ring-ring/50 absolute inset-y-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Press to speak"
          type="button"
        >
          <SearchIcon className="text-foreground" size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
