import { cn } from "@/lib/utils";
import React from "react";




    
export const gridItems = [{title:'Title1',description:'desc1'},
                          {title:'Title2',description:'desc1'},
                          {title:'Title3',description:'desc1'}]


import { Section } from 'lucide-react'
import { section } from 'motion/react-client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'> <BentoGrid>{gridItems.map((item,i)=>
        (<BentoGridItem 
        key={i}
        title={item.title}
        description={item.description} 
        />
    ))}
    </BentoGrid> 
    </section>
  )
}

export default Grid