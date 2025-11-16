import UpdateIconBox from "./UpdateIconBox";

export default function TableEnableBarIcon( {active}: { active?: boolean } ) {
    return (
        <UpdateIconBox>
            <svg 
                className={ active ? "stroke-orange" : "stroke-body-dark" } 
                width="18" 
                height="18" 
                viewBox="0 0 18 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" >
                <path d="M9 1V17M1 9H17M1 1H17V17H1V1Z" strokeWidth="1.6" />
            </svg>
        </UpdateIconBox>
    )
}