import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import fermiImage from "../../../assets/enrico_fermi.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1e1e1e;
  color: #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #66ff66;
  margin-top: 2rem;
  text-shadow: 0 0 5px #66ff66, 0 0 10px #66ff66, 0 0 20px #66ff66;
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

const EnricoFermi = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={fermiImage} alt="Enrico Fermi" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Enrico Fermi (1901-1954) was an Italian-American physicist known for
            his work on the development of quantum theory, nuclear and particle
            physics, and statistical mechanics. He was awarded the Nobel Prize
            in Physics in 1938 for his work on induced radioactivity.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born in Rome, Italy, Fermi showed an early interest in mathematics
            and physics. He studied at the University of Pisa and then at the
            Scuola Normale Superiore in Pisa. Fermi’s early research included
            work on statistical mechanics and quantum theory.
            <SectionTitle>Development of Quantum Mechanics</SectionTitle>
            Fermi made significant contributions to quantum mechanics,
            particularly through his development of the statistical methods
            known as Fermi-Dirac statistics. This work provided a theoretical
            framework for understanding the behavior of particles in a quantum
            system and was crucial for the development of quantum theory.
            <SectionTitle>Work on Nuclear Physics</SectionTitle>
            Fermi’s most famous contributions include his work on nuclear
            reactions and the development of the first nuclear reactor. His
            experiments on neutron capture and nuclear fission led to the
            construction of the first controlled nuclear chain reaction in 1942,
            known as the Chicago Pile-1.
            <SectionTitle>The Manhattan Project</SectionTitle>
            During World War II, Fermi worked on the Manhattan Project, the U.S.
            project aimed at developing the atomic bomb. His expertise in
            nuclear physics was invaluable to the project, and he played a key
            role in the development of nuclear weapons.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            After World War II, Fermi continued his research in nuclear and
            particle physics. He became a professor at the University of Chicago
            and was instrumental in the development of the university’s physics
            department. Fermi’s contributions to physics have had a lasting
            impact, and his work continues to be fundamental to modern physics.
            Enrico Fermi is remembered as one of the most important physicists
            of the 20th century. His work in quantum mechanics, nuclear physics,
            and particle physics has left a profound legacy in the field of
            science.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default EnricoFermi;
