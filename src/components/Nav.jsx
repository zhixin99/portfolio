export default function Nav({href, section, className}) {
    return (
        <li className={className}>
            <a href={href}> {section} </a>
        </li>
    )
}