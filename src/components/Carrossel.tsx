"use client";
import * as React from "react";
import { Event } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import Button from "./Button";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSpacing({ eventos }: { eventos: Event[] }) {
  const router = useRouter();

  return (
    <Carousel className="w-full mt-9 mb-40 px-16 max-sm:p-0">
      <CarouselContent>
        {eventos.map((evento, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/1 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4 "
          >
            <div className="p-1">
              <Card className="w-[343px] h-[436px] rounded-[13px] border-[#DEDEDE] max-sm:w-[260px] m-auto">
                <CardContent className="flex flex-col leading-none">
                  <div className="relative w-full h-[161px]">
                    <Image
                      alt={evento.name}
                      src={evento.image}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-[13px]"
                    />
                  </div>
                  <div className="pl-[32px] max-sm:pl-[24px]">
                    <h2 className="text-[20px] font-bold mt-[31px] mb-[7px]">
                      {evento.name}
                    </h2>
                    <p className="text-[15px] text-[#535353] font-regular w-[260px] mb-[27px] max-sm:w-[200px]">
                      {evento.subtitle}
                    </p>
                    <div className="flex flex-col gap-[11px] mb-[20px]">
                      <span className="text-[15px] font-regular flex gap-[9px] ml-[3px] items-center">
                        <Image
                          alt="localização"
                          src="/local.svg"
                          width={14}
                          height={14}
                          className="mr-[2.4px]"
                        />
                        {evento.local}
                      </span>
                      <span className="text-[15px] font-regular flex gap-[9px] items-center">
                        <Image
                          alt="calendário"
                          src="/date.svg"
                          width={20}
                          height={20}
                        />
                        {evento.date}
                      </span>
                    </div>

                    <div>
                      <Button
                        onClick={() => {
                          router.push(`/eventos/${evento.id}`);
                        }}
                        className="w-[11=71px] bg-[#9F6AFF] text-[#FFF] text-[18px] font-regular h-[58px] rounded-[13px] flex justify-center gap-[16px] items-end pb-[20px] p-[24px] cursor-pointer"
                      >
                        <span className="leading-none">Ver detalhes</span>
                        <Image
                          alt="seta"
                          src="/seta.svg"
                          width={16}
                          height={21}
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative top-[50px] w-[41px] m-auto">
        <CarouselPrevious className="h-[49px] w-[49px] cursor-pointer" />
        <CarouselNext className="h-[49px] w-[49px] cursor-pointer" />
      </div>
    </Carousel>
  );
}
