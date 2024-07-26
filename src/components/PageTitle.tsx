import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <p className="mt-[30px] mb-[60px] text-primary text-xl leading-[22px] font-semibold">
      {title}
    </p>
  );
};

export default PageTitle;
