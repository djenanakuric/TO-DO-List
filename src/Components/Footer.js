
const Footer = ({length}) => {
    return (
        <footer>
            <p> {length} list {length ? 'items' : 'item'}  </p>
        </footer>
    )
}

export default Footer;