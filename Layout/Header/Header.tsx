import { Headerprop } from "./Header.prop";
import styles from "./Header.module.css";
import cn from 'classnames';


export const Header = ({...props}:Headerprop): JSX.Element =>{

    return (
        <div{...props}>
          Header
        </div>
    );
} ;