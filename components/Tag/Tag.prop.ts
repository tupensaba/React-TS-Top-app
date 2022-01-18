import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Tagprop extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'green' | 'red' | 'grey' | 'primary';
    href?: string;
}