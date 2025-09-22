type Props = Readonly<{
    onInput: ( value: string ) => void
    value: string
}>

export default function TagSelect( { onInput, value }: Props ) {

    const handleInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const value = event.target.value
        onInput(value)
    }

    return (
        <div className="flex items-center gap-[16px] w-full lg:w-[686px] rounded-[12px] border-[1px] border-stroke p-[16px] bg-gray-light">
            <svg className="stroke-body-light" width="18" height="18" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.6 0V13.6M4.6 13.6C3.75131 13.6 2.93738 13.9371 2.33726 14.5373C1.73714 15.1374 1.4 15.9513 1.4 16.8C1.4 17.6487 1.73714 18.4626 2.33726 19.0627C2.93738 19.6629 3.75131 20 4.6 20M4.6 13.6C5.44869 13.6 6.26263 13.9371 6.86274 14.5373C7.46286 15.1374 7.8 15.9513 7.8 16.8C7.8 17.6487 7.46286 18.4626 6.86274 19.0627C6.26263 19.6629 5.44869 20 4.6 20M4.6 20V24M17.4 0V4M17.4 4C16.5513 4 15.7374 4.33714 15.1373 4.93726C14.5371 5.53737 14.2 6.35131 14.2 7.2C14.2 8.04869 14.5371 8.86263 15.1373 9.46274C15.7374 10.0629 16.5513 10.4 17.4 10.4M17.4 4C18.2487 4 19.0626 4.33714 19.6627 4.93726C20.2629 5.53737 20.6 6.35131 20.6 7.2C20.6 8.04869 20.2629 8.86263 19.6627 9.46274C19.0626 10.0629 18.2487 10.4 17.4 10.4M17.4 10.4V24" strokeWidth="1.6"/>
            </svg>
            <input 
                className="font-normal w-full lg:w-[580px] text-[16px] leading-[20px] text-body-dark placeholder:text-gray focus:outline-0" 
                onInput={handleInput}
                value={value}
                placeholder="Введить тег" />
            <div className="flex justify-center items-center size-[24px]">
                <svg className="stroke-body-light" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}