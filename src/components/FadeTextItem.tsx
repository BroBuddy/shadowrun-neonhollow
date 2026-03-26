import { Text } from "@/types/Text"
import { Link } from "react-router-dom"

function FadeTextItem({ text, italic, link }: Text) {
    if (link) {
        return (
            <p className="text-right">
                <Link to={link} className="text-teal-400">
                    {text}
                </Link>
            </p>
        )
    }

    if (italic) {
        return <p className="text-left"><em>{text}</em></p>
    }

    return <p className="text-right">
        <strong className="fade-strong">{text}</strong>
    </p>
}

export default FadeTextItem