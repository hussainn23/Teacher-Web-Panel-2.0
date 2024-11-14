
import * as React from "react"
import { Check} from "lucide-react"
import {  ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Classes = [
  { value: "9A", label: "9A" },
  { value: "9B", label: "9B" },
  { value: "9C", label: "9C" },
  { value: "10A", label: "10A" },
  { value: "10B", label: "10B" },
  { value: "10C", label: "10C" },
];
export function ClassPicker() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between"
      >
        {value
          ? Classes.find((Classes) => Classes.value === value)?.label
          : "Select Classes..."}
        <ChevronsUpDown className="opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search Classes..." className="h-9" />
        <CommandList>
          <CommandEmpty>No Classes found.</CommandEmpty>
          <CommandGroup>
            {Classes.map((Classes) => (
              <CommandItem
                key={Classes.value}
                value={Classes.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {Classes.label}
                <Check
                  className={cn(
                    "ml-auto",
                    value === Classes.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
  )
}
