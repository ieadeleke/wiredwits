interface ButtonProps {
    content: string
}

const Button = (props: ButtonProps) => {
    return (
        <button className="bg-black py-5 px-10 text-sm rounded-full text-white opacity-90">{props.content}</button>
    )
}

export default Button;