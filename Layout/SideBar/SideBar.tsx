import { SideBarprop } from "./SideBar.prop";
import styles from "./P.module.css";
import cn from 'classnames';


export const SideBar = ({ ...props}:SideBarprop): JSX.Element =>{

    return (
        <div {...props}>
            SideBar
        </div>
    );
} ;