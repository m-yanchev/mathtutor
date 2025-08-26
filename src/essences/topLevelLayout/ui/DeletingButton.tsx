'use client'

type Props = Readonly<{
    onClick: () => void
}>

export default function DeletingButton( {onClick}: Props ) {
    return (
        <button 
            onClick={onClick}
            className="size-[24px] stroke-orange cursor-pointer"
            type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2 4.80005V2.40005C7.2 1.9757 7.36857 1.56874 7.66863 1.26868C7.96869 0.96862 8.37565 0.800049 8.8 0.800049H15.2C15.6243 0.800049 16.0313 0.96862 16.3314 1.26868C16.6314 1.56874 16.8 1.9757 16.8 2.40005V4.80005M0 5.60005H24M2.4 5.60005V21.6C2.4 22.0244 2.56857 22.4314 2.86863 22.7314C3.16869 23.0315 3.57565 23.2 4 23.2H20C20.4243 23.2 20.8313 23.0315 21.1314 22.7314C21.4314 22.4314 21.6 22.0244 21.6 21.6V5.60005M12 11.2V19.2M7.2 14.4V19.2M16.8 14.4V19.2" strokeWidth="1.6"/>
            </svg>
        </button>
    );
}

