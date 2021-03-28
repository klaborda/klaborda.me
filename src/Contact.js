function Contact(props) {
  const { linkedIn, email } = props.data;

  function openLinkedIn() {
    window.open(linkedIn, '_new');
  }

  function openEmail() {
    window.open(`mailto:${email}?subject=Contact%20%at%20klaborda.me`, '_new');
  }

  return <section>
    To contact me, please use the following options:
    <ul>
      <li className="py-1"><b>LinkedIn:</b> <button className="btn btn-info" onClick={() => openLinkedIn()}>Kevin Laborda</button></li>
      <li><b>Email:</b> <button className="btn btn-info" onClick={() => openEmail()}>{email}</button></li>
    </ul>
  </section>
}

export default Contact;
