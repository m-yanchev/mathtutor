import UpdateIconBox from "./UpdateIconBox";

export default function ParagraphFormatIcon( {active}: { active?: boolean } ) {
    return (
        <UpdateIconBox>
            <svg 
                className={ active ? "stroke-orange" : "stroke-body-dark" } 
                width="16" 
                height="18" 
                viewBox="0 0 16 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" >
                <path 
                    d="M15.3335 1H6.66683C5.25234 1 3.89579 1.5619 2.89559 2.5621C1.8954 3.56229 1.3335 4.91885 1.3335 6.33333C1.3335 7.74782 1.8954 9.10438 2.89559 10.1046C3.89579 11.1048 5.25234 11.6667 6.66683 11.6667H8.00016M12.0002 17.6667V1M8.00016 17.6667V1" 
                    strokeWidth="1.6"/>
            </svg>
        </UpdateIconBox>
    )
}