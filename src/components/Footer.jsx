function Footer() {
  let date = new Date().getFullYear();
  const styles = {
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center',
    paddingBottom: '10px'

  }
  return (
        <p style={styles}>&copy; {date} TNP.</p>
  );
}

export default Footer;