type Props = Readonly<{
    hidden: boolean
}>

export default function Missed( { hidden }: Props ) {
    return (
        <span className={`${ hidden && "hidden"} text-mistake`} >
            Пропущено
        </span>
    )
}