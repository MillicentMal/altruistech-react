import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export function PopoverDefault() {
    return (
    <Popover>
        <PopoverHandler>
          <Button>Popover</Button>
        </PopoverHandler>
        <PopoverContent>
         
        </PopoverContent>
      </Popover>
    );
  }