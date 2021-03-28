function About(props) {
  const { age, city } = props.data;

  return <section>
    Hi! My name is Kevin Laborda.  I am a <time>{age}</time> year old full-stack developer currented based in {city}.
  </section>
}

export default About;
