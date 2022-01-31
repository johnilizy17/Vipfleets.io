import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Pages({ name, routes }) {

    const route = useRouter()

    return (
        <Link passHref={true} href={routes}>
            <div className={route.pathname == routes ? "mb-2 text-brand-color cursor-pointer" : "mb-2 cursor-pointer"} >
                <ol class="list-disc">
                    <li>

                        {name}
                    </li>
                </ol>
            </div>
        </Link>
    )
}