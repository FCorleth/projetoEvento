import React from "react";

const Title = () => {
  return (
    <div className="mt-6 lg:mt-[94px] mb-8 lg:mb-[114px] px-3 lg:px-0">
      <div className="space-y-2 lg:space-y-0 flex flex-col items-center lg:items-start">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[75px] w-full lg:w-[724px] leading-tight lg:leading-none lg:ml-[64px] text-center lg:text-left">
          Encontre, descubra e participe de
        </h1>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[75px] text-[#9F6AFF] w-full lg:w-[724px] leading-none lg:ml-[64px] text-center lg:text-left">
          eventos incríveis!
        </h1>
      </div>
      <h2 className="font-regular text-base sm:text-lg md:text-xl lg:text-[20px] text-[#535353] leading-relaxed lg:leading-none lg:ml-[64px] mt-4 lg:mt-[6px] max-w-[95%] lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
        Gerencie sua agenda e não perca nenhuma oportunidade.
      </h2>
    </div>
  );
};

export default Title;
