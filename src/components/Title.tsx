type Props = {
    children: string
};

function Title({children}: Props): JSX.Element {
    return (
        <div className="container-desktop">
            <div className="d-col-justify-center align-center p-sm">
                <h1 className="font-xl font-upper">{children}</h1>
            </div>
        </div>
    )
}

export default Title;