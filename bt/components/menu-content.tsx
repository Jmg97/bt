'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MenuItem {
  name: {
    en: string
    kr: string
  }
  price: number
  note?: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuData: MenuSection[] = [
  {
    title: "COFFEE",
    items: [
      { name: { en: "Americano", kr: "아메리카노" }, price: 5.5 },
      { name: { en: "Cappuccino", kr: "카푸치노" }, price: 6.5 },
      { name: { en: "Cafe Latte", kr: "카페라떼" }, price: 6.5 },
      { name: { en: "Vanilla Bean Latte", kr: "바닐라빈라떼" }, price: 7.5 },
      { name: { en: "Cafe Mocha", kr: "카페모카" }, price: 7.5 },
      { name: { en: "Ice Special", kr: "아인슈페너" }, price: 8.0 },
      { name: { en: "Cream Latte", kr: "크림라떼" }, price: 8.0 },
      { name: { en: "Extra Shot", kr: "샷추가" }, price: 1.0 },
      { name: { en: "Change to Oat", kr: "피커스 오트 변경" }, price: 1.0 }
    ]
  },
  {
    title: "SIGNATURE",
    items: [
      { 
        name: { en: "Pink Coco Blanc", kr: "핑크 코코 블랑" }, 
        price: 9.0,
        note: "코코넛, 리치 향이 어우러진 핑크빛 음료 / ICE ONLY"
      },
      { 
        name: { en: "Blue Trunana View", kr: "블루 트라나 뷰" }, 
        price: 9.0,
        note: "청량한 바다를 담은 블루베리 에이드 / ICE ONLY"
      },
      { 
        name: { en: "Black Sugar Oat Latte", kr: "흑임자 오트 라떼" }, 
        price: 9.0,
        note: "고소한 흑임자 피커스 오트 우유 / ICE ONLY"
      },
      { 
        name: { en: "Iced Tea", kr: "아이스 티" }, 
        price: 8.0,
        note: "복숭아 과육과 얼그레이를 블렌딩한 티 / ICE ONLY"
      }
    ]
  },
  {
    title: "SINGLE ORIGIN",
    items: [
      { name: { en: "Mandeling", kr: "만델링" }, price: 8.0 },
      { name: { en: "Yirgacheffe", kr: "예가체프" }, price: 8.0 },
      { name: { en: "Decaf", kr: "디카페인" }, price: 8.0 }
    ]
  },
  {
    title: "PREMIUM COFFEE",
    items: [
      { name: { en: "Yemen Mocca Matari", kr: "예멘 모카마타리" }, price: 15.0 },
      { name: { en: "Jamaica Blue Mountain", kr: "자메이카 블루마운틴" }, price: 15.0 },
      { name: { en: "Hawaii Kona", kr: "하와이 코나" }, price: 15.0 }
    ]
  },
  {
    title: "NON COFFEE",
    items: [
      { name: { en: "Chocolate Latte", kr: "초코 라떼" }, price: 7.0 },
      { name: { en: "Sweet Potato Latte", kr: "고구마 라떼" }, price: 7.0 },
      { name: { en: "Sweet Pumpkin Latte", kr: "제주 말차라떼" }, price: 7.0 },
      { name: { en: "Toffee Nut Latte", kr: "토피넛 라떼" }, price: 7.0 },
      { name: { en: "Strawberry Latte", kr: "생딸기 라떼" }, price: 9.0, note: "ICED ONLY" },
      { name: { en: "Vin Chaud", kr: "뱅쇼" }, price: 8.0 },
      { name: { en: "Peppermint Tea", kr: "페퍼민트" }, price: 8.0 },
      { name: { en: "Chamomile Tea", kr: "캐모마일" }, price: 8.0 },
      { name: { en: "Jasmine Tea", kr: "자스민 필 티" }, price: 8.0 },
      { name: { en: "Earl Grey Tea", kr: "얼그레이 리저브 티" }, price: 8.0 }
    ]
  }
]

export function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("COFFEE")

  return (
    <Tabs defaultValue="COFFEE" className="w-full h-full flex flex-col">
      <TabsList className="flex justify-between mb-4 w-full">
        {menuData.map((section) => (
          <TabsTrigger
            key={section.title}
            value={section.title}
            className="text-sm md:text-base font-medium px-3 py-2 rounded-full flex-1 max-w-[20%]"
            onClick={() => setActiveCategory(section.title)}
          >
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex-grow overflow-hidden rounded-md border border-blue-100 bg-white/80 backdrop-blur-sm">
        {menuData.map((section) => (
          <TabsContent key={section.title} value={section.title} className="h-full">
            <ScrollArea className="h-full px-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.name.en}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-blue-900">{item.name.en}</span>
                      <span className="text-sm text-blue-600">{item.name.kr}</span>
                      {item.note && (
                        <span className="text-xs text-blue-400 mt-1">{item.note}</span>
                      )}
                    </div>
                    <span className="text-lg font-medium text-blue-900">
                      {item.price.toFixed(1)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

