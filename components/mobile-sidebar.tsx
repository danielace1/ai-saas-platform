"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>{" "}
        <DialogDescription className="sr-only">
          This is the mobile navigation sidebar.
        </DialogDescription>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
