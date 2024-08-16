import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import diracImage from "../../../assets/paul_dirac.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #0d0d0d;
  color: #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff5722;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 20px #ff5722;
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

const PaulDirac = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={diracImage} alt="Paul Dirac" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Paul Dirac (1902-1984) was an English theoretical physicist renowned
            for his fundamental contributions to quantum mechanics and quantum
            electrodynamics. His work established the foundation for much of
            modern theoretical physics, and his mathematical formulations are
            central to our understanding of particle physics.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born on August 8, 1902, in Bristol, England, Dirac demonstrated
            exceptional aptitude in mathematics from an early age. He pursued
            his studies at the University of Bristol, where he excelled in both
            mathematics and physics. Dirac continued his education at the
            University of Cambridge, where he conducted groundbreaking research
            that would shape his future contributions to physics.
            <SectionTitle>The Dirac Equation</SectionTitle>
            One of Dirac's most significant contributions is the Dirac equation,
            formulated in 1928. This equation describes the behavior of
            relativistic electrons and predicts the existence of antimatter. The
            Dirac equation combines quantum mechanics and special relativity,
            providing a comprehensive framework for understanding the behavior
            of electrons at high energies. The prediction of antimatter, which
            was confirmed with the discovery of the positron, was a major
            breakthrough in particle physics. Dirac's work on the Dirac equation
            provided crucial insights into the nature of particles and their
            interactions, paving the way for the development of quantum field
            theory.
            <SectionTitle>
              Quantum Electrodynamics and the Dirac Sea
            </SectionTitle>
            Dirac's contributions to quantum electrodynamics (QED) were
            foundational in the development of the theory. His introduction of
            the concept of the Dirac sea, a theoretical model to explain the
            existence of negative energy states, provided a crucial framework
            for understanding the behavior of particles and antiparticles. The
            concept of the Dirac sea was instrumental in explaining the vacuum
            fluctuations and the creation of particle-antiparticle pairs.
            Dirac's work on QED helped establish the theoretical basis for
            understanding electromagnetic interactions at the quantum level and
            influenced subsequent developments in quantum field theory.
            <SectionTitle>Later Contributions and Legacy</SectionTitle>
            In addition to his work on quantum mechanics and electrodynamics,
            Dirac made significant contributions to the development of quantum
            field theory and the study of fundamental particles. He explored the
            implications of quantum mechanics for various physical phenomena and
            engaged in theoretical research on topics such as the nature of
            quantum states and the structure of the vacuum. Dirac received
            numerous accolades for his contributions to physics, including the
            Nobel Prize in Physics in 1933. His work has had a lasting impact on
            the field, influencing generations of physicists and shaping our
            understanding of the fundamental principles of nature. Paul Dirac
            passed away on October 20, 1984, but his legacy endures through his
            groundbreaking research and contributions to theoretical physics.
            His insights into quantum mechanics and quantum electrodynamics
            continue to inspire and inform ongoing research in particle physics
            and related fields.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default PaulDirac;
