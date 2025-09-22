import { Test } from "@prisma/client";
import Link from "next/link";

type Props = Readonly<{
    test: Test
}>;

export default function Card( {test}: Props ) {
    return (
        <Link href={`/tests/${test.id}`} className="flex flex-col gap-[16px] lg:gap-[24px] w-full lg:w-[331px] cursor-pointer">
            <span className="text-[16px] lg:text-[18px] leading-[18px] lg:leading-[24px] text-body-dark">{test.name}</span>
            <hr className="border-[1px] border-[#efefef]"/>
            <div className="flex w-full justify-between" >
                <span className="text-[16px] leading-[20px] text-orange">Відкрити тест</span>
                <div className="flex items-center justify-center size-[20px]"> 
                    <svg className="fill-orange" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1388 0.194641L17.9428 5.99997L12.1388 11.8053L11.1948 10.8613L15.3908 6.66664H0.333496V5.33331H15.3908L11.1948 1.13864L12.1388 0.194641Z" />
                    </svg>
                </div>
            </div>
        </Link>
    );
} 