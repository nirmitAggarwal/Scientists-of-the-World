import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import bardeenImage from "../../../assets/john_bardeen.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #4caf50;
  margin-top: 2rem;
  text-shadow: 0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 20px #4caf50;
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

const JohnBardeen = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={bardeenImage} alt="John Bardeen" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            John Bardeen (1908-1991) was an American physicist who made
            groundbreaking contributions to the fields of solid-state physics
            and superconductivity. He is best known for co-inventing the
            transistor and developing the BCS theory of superconductivity,
            earning him two Nobel Prizes in Physics.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born on May 23, 1908, in Madison, Wisconsin, John Bardeen showed an
            early aptitude for science and mathematics. He attended the
            University of Wisconsin-Madison, where he earned his Bachelor of
            Science degree in electrical engineering in 1928. Bardeen then went
            on to study at Princeton University, where he completed his Ph.D. in
            1936.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Bardeen's most significant contributions to science include the
            development of the transistor and the BCS theory of
            superconductivity. The transistor, co-invented with William Shockley
            and John Bardeen in 1947, revolutionized electronics by allowing for
            the creation of smaller, more efficient electronic devices. This
            invention laid the foundation for modern computing and communication
            technologies. In 1957, Bardeen, along with Leon Cooper and Robert
            Schrieffer, developed the BCS theory, which explains the microscopic
            mechanism of superconductivity. This theory describes how electron
            pairs, known as Cooper pairs, interact to enable electrical current
            to flow without resistance in superconducting materials. Bardeen's
            work in these areas has had a profound impact on physics and
            technology. The transistor is a fundamental component of almost all
            modern electronic devices, while the BCS theory has been crucial in
            understanding and developing superconducting materials.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Throughout his career, Bardeen received numerous accolades for his
            contributions to science. He was awarded the Nobel Prize in Physics
            twice: first in 1956 for the invention of the transistor, and again
            in 1972 for the development of the BCS theory of superconductivity.
            Bardeen continued his research and teaching at the University of
            Illinois at Urbana-Champaign until his retirement. He was known for
            his modesty and dedication to scientific inquiry, leaving a lasting
            legacy in both solid-state physics and engineering. John Bardeen
            passed away on January 30, 1991, in Boston, Massachusetts. His
            contributions to science have been recognized globally, and his work
            remains influential in the fields of electronics and
            superconductivity.
            <SectionTitle>Legacy and Honors</SectionTitle>
            John Bardeen's legacy is commemorated through various honors and
            awards. The Bardeen Medal, established by the IEEE, recognizes
            outstanding achievements in the field of electronic devices and
            circuits. His impact on technology and science is enduring, with the
            transistor being a cornerstone of modern electronics and the BCS
            theory continuing to influence research in superconductivity.
            Bardeen's contributions to science and technology have left an
            indelible mark on the world, shaping the development of modern
            electronics and deepening our understanding of superconductivity.
            His pioneering work and dedication to scientific excellence continue
            to inspire future generations of physicists and engineers. John
            Bardeen is remembered not only for his groundbreaking discoveries
            but also for his commitment to advancing the frontiers of science
            and technology, making him one of the most influential physicists of
            the 20th century.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default JohnBardeen;
