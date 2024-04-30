"use client";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const toastTypes = ["default", "success", "info", "warning", "error"] as const;

// Derive the union type from the array
type ToastTypes = (typeof toastTypes)[number];

const ToastersPlaygroud = (): JSX.Element => {
  const toastContent = {
    title: "Event has been created",
    content: {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => {
          console.log("Undo");
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          console.log("Cancel!");
        },
      },
    },
  };

  const [toastType, setToastType] = React.useState<ToastTypes>("error");

  return (
    <div className="px-4">
      <div className="flex flex-col gap-2">
        <Label>Toast Playground</Label>
        <div className="flex items-center gap-2">
          <Select
            defaultValue={toastType}
            onValueChange={(value) => {
              setToastType(value as ToastTypes);
            }}
          >
            <SelectTrigger className="min-w-[180px] w-fit">
              <SelectValue placeholder="toaster type" />
            </SelectTrigger>
            <SelectContent>
              {toastTypes.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant={toastType}
            onClick={() => {
              if (toastType === "default") {
                toast(toastContent.title, toastContent.content);
              } else {
                toast[toastType](toastContent.title, toastContent.content);
              }
            }}
          >
            Toast!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToastersPlaygroud;
