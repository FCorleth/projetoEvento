import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonWithIcon() {
  return (
    <Button className="w-[281px] bg-[#9F6AFF] text-[#FFF] text-[20px] font-regular h-[58px] rounded-[13px] ml-[64px]">
      <Mail /> Eventos em Destaques
    </Button>
  );
}
