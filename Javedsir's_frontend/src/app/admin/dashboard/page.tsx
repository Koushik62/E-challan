"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { link } from "fs";
import {
  BarChart,
  BarChart3,
  CirclePlus,
  DollarSign,
  BadgeDollarSign,
} from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const cardItems = [
    {
      title: 'RC Challan API',
      description: 'The RC Challan Details API provides access to information regarding vehicle registration certificate (RC) challans',
      icon: BarChart,
      link: 'rc-challanapi'
    },
    {
      title: 'RC Advanced Verification',
      description: 'The RC Challan Details API provides access to information regarding vehicle registration certificate (RC) challans',
      icon: BarChart3,
      link: 'rc-advapi'
    },
    {
      title: 'Pay Challan',
      description: 'The RC Challan Details API provides access to information regarding vehicle registration certificate (RC) challans',
      icon: BadgeDollarSign,
      link: 'Challan'
    }
  ];
  

  const handleClick = (card: any) => {
    router.push(card.link)
  }

  return (
    <>
    {/* <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1> */}
    <div className="grid grid-cols-2 gap-8">
      {cardItems.map((card, index) => (
        <Card
          key={card.name}
          className="cursor-pointer hover:shadow-lg"
          onClick={() => handleClick(card)}
        >
          <CardContent className="mt-5">
            <div className="flex items-center justify-center">
              <div className="h-16 w-16 min-w-16 flex flex-grow items-center justify-center border border-primary rounded-full mr-3">
                <card.icon className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">{card.title}</p>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    </>
  )
}
