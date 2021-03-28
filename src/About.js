function About(props) {
  const { age, city, stack } = props.data;

  const stackList = <ul>
    {stack.map(item => {
      return <li>{item}</li>
    })}
  </ul>;

  return <section>
    Hi! My name is Kevin Laborda.  I am a <time>{age}</time> year old full-stack developer currented based in {city}.
    I enjoy working with a variety of technologies including the following: {stackList}
    My hope for this space is to track and collect my thoughts on various projects/issues that I encounter.
  </section>
}

export default About;
