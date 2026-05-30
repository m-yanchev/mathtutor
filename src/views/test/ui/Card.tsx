import Button from "@/views/common/components/Button";
import { Test } from "@/generated/prisma/client";
import Link from "next/link";

type Props = Readonly<{
    test: Test
}>;

export default function Card( {test}: Props ) {
    return (
        <Link href={`/tests/${test.id}`} className="flex flex-col gap-[16px] lg:gap-[24px] w-full lg:w-[331px] cursor-pointer">
            <h3 className="text-[16px] lg:text-[18px] leading-[18px] lg:leading-[24px] text-body-dark">{test.name}</h3>
            <hr className="border-[1px] border-[#efefef]"/>
            <div className="flex w-full justify-between" >
                <Button variant="small">Відкрити тест</Button>
                <Button variant="small"> 
                    <svg width="18" height="12" viewBox="0 0 18 12" stroke="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1388 0.194641L17.9428 5.99997L12.1388 11.8053L11.1948 10.8613L15.3908 6.66664H0.333496V5.33331H15.3908L11.1948 1.13864L12.1388 0.194641Z" />
                    </svg>
                </Button>
            </div>
        </Link>
    );
} 