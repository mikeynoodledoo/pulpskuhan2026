'use client'
import Image from "next/image";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  return (
    <div className="relative px-6 flex flex-col flex-1 items-center justify-center ">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between  sm:items-start">
        <div id="image-top" className="w-full grid place-items-center ">
          <Image src="/Party_Title_2.png" alt="party-title.png" width={600} height={450} className="w-full h-auto" />
        </div>
        <div className="w-full  bg-white rounded-md shadow-md my-4">
          <form className="w-full ">
            <div className="border-3 border-white rounded-2xl bg-white w-full items-center justify-between p-5 text-black text-center">
              <h1 className="text-xl font-bold "> PULPSKUHAN 2026 SECRET SANTA</h1>
              <p className="text-xs">Enter your email to unwrap the surprise and meet your Christmas Baby!</p>
              <input id="emailInput" className="w-full rounded-sm border-1  text-center mt-5 bg-gray-200 p-2" placeholder="Enter your email here"/>
              <Button type="submit" className="mt-2 w-1/2 rounded-lg"> Send Email </Button>
            </div>
          </form>
          <div className="flex w-full items-center justify-center">
            <Dialog>
              <DialogTrigger className="text-center text-black p-1 text-[11px] mb-2 border-b border-black">Resend Email?</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Resend Email</DialogTitle>
                </DialogHeader>
                <form className="flex flex-col gap-4 w-full ">
                  <input className="bg-gray" placeholder="Enter email here"></input>                 
                  <Button type="submit">Resend Email</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  );
}
