
import * as React from "react"
import { Check} from "lucide-react"
import { PiCaretUpDownFill } from "react-icons/pi";
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

export const MonthPicker:React.FC = () => {
    interface Months{
        value:string,
        label:string
      }
    const Months:Months[] = [
        { value: "january", label: "January" },
        { value: "february", label: "February" },
        { value: "march", label: "March" },
        { value: "april", label: "April" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" },
      ];
      const [open, setOpen] = React.useState(false)
      const [value, setValue] = React.useState("")
    
      return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="none"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-start p-0 font-bold"
          >
            {value
              ? Months.find((Months) => Months.value === value)?.label
              : "Janurary"}<PiCaretUpDownFill/>
         
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Months..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Months found.</CommandEmpty>
              <CommandGroup>
                {Months.map((Months) => (
                  <CommandItem
                    key={Months.value}
                    value={Months.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {Months.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === Months.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>)
}
