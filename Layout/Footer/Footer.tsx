import { Footerprop } from "./Footer.prop";
import styles from "./Footer.module.css";
import cn from 'classnames';



export const Footer = (className, {...props}:Footerprop): JSX.Element =>{

    return (
        <footer className ={cn(className , styles.footer)} {...props}>
          <div>
         Все права защищены
          </div>
          <a href="#" target ="_blank"> КОНТАКТ</a>
          <a href="#" target ="_blank">ПРАВИЛА</a>
         </footer>
    );
} ;