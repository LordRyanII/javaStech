import './Header.css';

interface propsInfo {
    title: string,
    description: string,
}

export const Header = (props: propsInfo) => {
    return (
        <header>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.description}
            </p>
        </header>
    )
}