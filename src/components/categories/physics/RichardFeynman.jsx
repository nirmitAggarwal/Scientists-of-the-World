import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import feynmanImage from "../../../assets/richard_feynman.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1e1e1e;
  color: #eaeaea;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #00ff00;
  margin-top: 2rem;
  text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: justify;
`;

const Card = styled.div`
  background-color: #2c2c2c;
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

const RichardFeynman = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={feynmanImage} alt="Richard Feynman" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Richard Feynman (1918-1988) was an American theoretical physicist
            known for his contributions to quantum mechanics, quantum
            electrodynamics, and particle physics. He was a recipient of the
            Nobel Prize in Physics in 1965 for his fundamental work in quantum
            electrodynamics, which provided a comprehensive framework for
            understanding the interactions between light and matter.
            <SectionTitle>Early Life and Education</SectionTitle>
            Feynman was born in New York City and displayed an early talent for
            mathematics and science. He attended the Massachusetts Institute of
            Technology (MIT), where he earned his bachelor&apos;s degree in
            physics. Feynman continued his studies at Princeton University,
            where he worked under the guidance of John Archibald Wheeler and
            completed his PhD.
            <SectionTitle>Quantum Electrodynamics</SectionTitle>
            Feynman&apos;s most notable contribution to physics was his
            development of quantum electrodynamics (QED). His Feynman diagrams,
            a visual representation of particle interactions, revolutionized the
            way physicists approached quantum field theory. These diagrams
            provided a new and intuitive way to calculate and visualize the
            interactions between particles, simplifying complex quantum
            calculations.
            <SectionTitle>Work on the Manhattan Project</SectionTitle>
            During World War II, Feynman was involved in the Manhattan Project,
            the U.S. project to develop the atomic bomb. He worked at the Los
            Alamos Laboratory, where his contributions included the development
            of methods for calculating critical mass and designing the
            bomb&apos;s detonation mechanism. His work played a crucial role in
            the success of the project.
            <SectionTitle>Teaching and Public Engagement</SectionTitle>
            Feynman was renowned for his teaching and public lectures. His
            series of lectures at Caltech, known as the &quot;Feynman Lectures
            on Physics,&quot; became widely popular and are still used as
            educational resources. Feynman was known for his engaging and
            unconventional teaching style, which made complex concepts
            accessible and exciting for students.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Feynman continued to influence physics and science education
            throughout his life. He wrote several popular books, including
            &quot;Surely You&apos;re Joking, Mr. Feynman!&quot; and &quot;The
            Pleasure of Finding Things Out,&quot; which offer insights into his
            scientific work and personal philosophy. Feynman&apos;s legacy is
            marked by his contributions to theoretical physics, his engaging
            teaching style, and his efforts to make science accessible to the
            public. Richard Feynman remains a highly respected figure in the
            scientific community, and his work continues to inspire new
            generations of physicists and science enthusiasts. His innovative
            ideas and enthusiastic approach to science have left an enduring
            impact on the field of physics.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default RichardFeynman;
