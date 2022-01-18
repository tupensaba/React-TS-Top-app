import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SideBarprop extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
        children: ReactNode;
}