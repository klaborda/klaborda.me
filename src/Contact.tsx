import { Button, Text, Flex, View } from "@adobe/react-spectrum";
import "./Contact.css";

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
      <Flex direction="column" gap="size-100">
        <View marginTop="size-100">
          <Text marginEnd="size-100" UNSAFE_className="bold">
            LinkedIn
          </Text>
          <Button variant="primary" onPress={openLinkedIn}>
            <Text>Kevin Laborda</Text>
          </Button>
        </View>
        <View>
          <Text marginEnd="size-100" UNSAFE_className="bold">
            Email
          </Text>
          <Button variant="primary" onPress={openEmail}>
            <Text>{email}</Text>
          </Button>
        </View>
      </Flex>
    </section>
  );
}

export default Contact;
