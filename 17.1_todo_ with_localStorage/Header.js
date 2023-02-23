const Header= ({ title }) => {
    return (
        <Header>
            <h1>{title}</h1>
        </Header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;