"use client";
import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      {isSubscribed ? (
        <Button
          variant={isSubscribed ? "secondary" : "default"}
          className="w-[171px] h-[50px] bg-[#cccccc] text-[#8a8a8a] text-[17px] font-medium rounded-[13px] mt-[19px] hover:bg-[#ccc] transition duration-400 cursor-pointer mb-[32px]"
        >
          Inscrito
        </Button>
      ) : (
        <Button
          variant={isSubscribed ? "secondary" : "default"}
          className="w-[171px] h-[50px] bg-[#9F6AFF] text-[#FFF] text-[17px] font-medium rounded-[13px] mt-[19px] hover:bg-[#744CBD] transition duration-400 cursor-pointer mb-[32px]"
          onClick={() => {
            setIsSubscribed(true);
            toast("Você se inscreveu com sucesso", {
              action: {
                label: "Ok",
                onClick: () => console.log("Undo"),
              },
            });
          }}
        >
          Inscreva-se
        </Button>
      )}
    </div>
  );
}
