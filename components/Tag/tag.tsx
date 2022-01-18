import { Tagprop } from "./Tag.prop";
import styles from "./Tag.module.css";
import cn from 'classnames';


export const Tag = ({size = 's', color ="ghost", href, children, className, ...props}:Tagprop): JSX.Element =>{

     return (
        <div className={cn(styles.tag, className,{
            [styles.s]: size =='s',
            [styles.m]: size =='m',
            [styles.grey]: color == 'grey',
            [styles.ghost]: color =='ghost',
            [styles.green]: color =='green',
            [styles.red]: color =='red',
            [styles.primary]: color =='primary',
        })}
        {...props}>
           {
           
            href
            ?<a href={href}>{children}</a>
            : <>{children}</>

           } 
         
        </div>
    );
} ;