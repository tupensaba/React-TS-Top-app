import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Par } from "../components";
import { Tag } from "../components/Tag/tag";
import { Rating } from "../components/Rating/rating";
import { useState } from "react";
import { withLayout } from "../Layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

 function Home({ menu, }:HomeProps): JSX.Element {

const [rating, setRating] = useState<number>(0);

 return(
  
   <div>
     <Htag tag='h2'>Текст</Htag>
     <Button appearance ='primary' arrow="up"> КНОПКА </Button>
     <Par size='s' >MNOGO TEXTA TEXTA TEXTA</Par>
     <Par size='m' >MNOGO TEXTA TEXTA TEXTA</Par>
     <Par size='l' >MNOGO TEXTA TEXTA TEXTA</Par>
     <Tag size="s" color="ghost">Ghost</Tag>
     <Tag size="m" color="grey">Grey</Tag>
     <Tag size="s" color="red">Red</Tag>
     <Tag size="s" color="primary">Primary</Tag>
     <Tag size="m" color="green">Green</Tag>
     <Rating rating={rating} isEditable setRating={setRating}/>
     <ul>
       {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
     </ul>
   </div>
  
 );

 }

 export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps>= async () =>{
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {

      menu,
      firstCategory

    }
  };
};

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[];
  firstCategory: number;
}