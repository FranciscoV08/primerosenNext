
// Hace que se genere del lado del cliente 
'use client';

import Link from '@/node_modules/next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}



export const ActiveLink = ({path, text} : Props ) => {

  const pathName = usePathname();

  return (
    <Link 
      className={`${style.link} ${  (pathName === path ) && style['active-link']}`} 
      key={path} 
      href={path} 
      > {text} </Link>
  )
}

