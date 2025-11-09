function Footer() {
    const footerStyle = {
        backgroundColor: '#333',
        color: 'gray',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px'
    };

    return (
        <>
            <footer style={footerStyle}>
                © {new Date().getFullYear()} My Company. All Rights Reserved.
            </footer>
        </>
    );
}

export default Footer;