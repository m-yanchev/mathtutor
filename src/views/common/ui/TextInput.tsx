type Props = {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    name?: string;
    id?: string;
}

export default function TextInput( { value, onChange, placeholder = "", className = "", name, id }: Props ) {
    return (
        <input 
            className={`w-full rounded-[12px] border-[1px] p-[16px] border-stroke text-[16px] leading-[20px] placeholder:text-gray focus:outline-0 ${className}`} 
            type="text" 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
        />
    );
}