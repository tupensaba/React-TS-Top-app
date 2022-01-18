import { Pprop } from "./P.prop";
import styles from "./P.module.css";
import cn from 'classnames';


export const Par = ({size = 'm',children, className, ...props}:Pprop): JSX.Element =>{

    return (
        <p className={cn(styles.p, className,{
            [styles.s]: size =='s',
            [styles.m]: size =='m',
            [styles.l]: size =='l',
        })}
        {...props}>
            
        {children}
        </p>
    );
} ;