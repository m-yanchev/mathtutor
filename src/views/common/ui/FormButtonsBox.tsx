import BoxXPadding from "./BoxXPadding";

export default function FormButtonsBox( {children}: { children: React.ReactNode } ) {
    return (
        <BoxXPadding className="flex justify-end mt-[56px] mb-[99px] gap-[24px]" >
            {children}
        </BoxXPadding>
    )
}