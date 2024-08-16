import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import turingImage from "../../../assets/alan_turing.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #00e5ff;
  margin-top: 2rem;
  text-shadow: 0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 20px #00e5ff;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: justify;
`;

const Card = styled.div`
  background-color: #333333;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AlanTuring = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={turingImage} alt="Alan Turing" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Alan Turing (June 23, 1912 – June 7, 1954) was a British
            mathematician, logician, and cryptanalyst who is widely considered
            to be the father of theoretical computer science and artificial
            intelligence. His work laid the foundation for modern computing and
            his contributions to breaking the Enigma code during World War II
            were instrumental in the Allied victory.
            <SectionTitle>Early Life and Education</SectionTitle>
            Alan Turing was born in Maida Vale, London, and showed an early
            interest in mathematics and science. He attended Sherborne School,
            where he excelled in mathematics and physics. Turing later went on
            to study at King's College, University of Cambridge, where he earned
            a degree in mathematics and made significant contributions to the
            field of probability theory. Turing's academic journey continued at
            Princeton University, where he completed his PhD under the
            supervision of Alonzo Church. His work at Princeton, particularly on
            the concept of computable numbers and the Turing machine,
            established him as a leading figure in mathematical logic.
            <SectionTitle>Contributions to Computer Science</SectionTitle>
            Turing’s most famous contribution is the development of the Turing
            machine, a theoretical construct that formalized the concept of
            computation and algorithmic processes. This concept is fundamental
            to the field of computer science and provides a basis for
            understanding what can be computed. During World War II, Turing
            worked at Bletchley Park, where he played a key role in breaking the
            German Enigma codes. His work in cryptanalysis, including the
            development of the Bombe machine, was crucial to decrypting
            intercepted German messages and significantly contributed to the war
            effort. Turing also proposed the concept of a universal machine,
            which can simulate the operation of any other machine. This idea is
            central to the design of modern computers and underpins the
            theoretical foundation of computer science.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Alan Turing's legacy is profound and enduring. His work in
            mathematics, computer science, and cryptography has had a lasting
            impact on the world. The Turing Award, often considered the "Nobel
            Prize of Computing," is named in his honor and is awarded annually
            for outstanding contributions to the computing community. Turing's
            contributions to the field of artificial intelligence were also
            pioneering. He proposed the famous Turing Test, a criterion for
            determining whether a machine exhibits intelligent behavior
            equivalent to that of a human. Despite his groundbreaking work,
            Turing's life was marred by personal struggles and societal
            prejudices. He was prosecuted for his homosexuality, which was
            illegal at the time, and underwent chemical castration. He died
            under tragic circumstances at the age of 41. Today, Turing is
            celebrated as a visionary and a hero. His legacy continues to
            inspire advances in computing, artificial intelligence, and
            cryptography. Turing's story has been the subject of numerous books,
            films, and academic studies, ensuring that his contributions are
            remembered and appreciated by future generations.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default AlanTuring;
