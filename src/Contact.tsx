import { Button, Text } from "@adobe/react-spectrum";

interface ContactProps {
  data: {
    linkedIn: string;
    email: string;
  };
}

function Contact(props: ContactProps) {
  const { linkedIn, email } = props.data;

  function openLinkedIn() {
    window.open(linkedIn, "_new");
  }

  function openEmail() {
    window.open(`mailto:${email}?subject=Contact%20%at%20klaborda.me`, "_new");
  }

  return (
    <section>
      To contact me, please use the following options:
      <ul>
        <li>
          <b>LinkedIn:</b>
          <Button variant="primary" onPress={openLinkedIn}>
            <Text>Kevin Laborda</Text>
          </Button>
        </li>
        <li>
          <b>Email:</b>
          <Button variant="primary" onPress={openEmail}>
            <Text>{email}</Text>
          </Button>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
