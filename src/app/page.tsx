import type { Metadata } from 'next'
import { permanentRedirect, RedirectType } from 'next/navigation';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://mathteacher.education/tests',
    },
}

export default async function Page() {

    permanentRedirect( "/tests", RedirectType.replace )
}