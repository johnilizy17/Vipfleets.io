
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbutton({name,links}) {

    const route = useRouter()
   

    return (
        <Link passHref={true} href={links}>
            <div className={route.pathname == links ? "cursor-pointer text-brand-color font-semibold" : "cursor-pointer font-semibold"}>{name}</div>
        </Link>

    )
}