import { GoogleTagManager } from "@next/third-parties/google";

interface GTMProps {
    gtmId: string
}

export default function GTM( { gtmId }: GTMProps ) {

    return <GoogleTagManager gtmId={gtmId} />;
}