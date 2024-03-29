import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function useToastHook() {
  const [state, setState] = useState(undefined);
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { message, status } = state;

      toast({
        title: status,
        description: message.message ?? message.error ?? message,
        status: status,
        duration: 3000,
        position: "bottom-right"
      });
    }
  }, [state, toast]);

  return [state, setState];
}