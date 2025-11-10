import React from 'react'

interface Props {
  text: string;
}

export const DividerText = ({ text }: Props) => {
  return (
    <div className="relative col-span-full my-4 flex items-center justify-center">
      <div className="hidden md:block absolute top-1/2 w-full border-t border-tercery"></div>
      <span className="bg-primary-foreground md:px-10 font-medium uppercase z-10 text-3xl">{text}</span>
    </div>
  )
}
