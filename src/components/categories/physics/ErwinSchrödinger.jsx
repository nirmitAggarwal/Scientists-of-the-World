import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import schrodingerImage from "../../../assets/erwin_schrodinger.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #0a0a0a;
  color: #d4af37;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #d4af37;
  margin-top: 2rem;
  text-shadow: 0 0 5px #d4af37, 0 0 10px #d4af37, 0 0 20px #d4af37;
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

const ErwinSchrödinger = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={schrodingerImage} alt="Erwin Schrödinger" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Erwin Schrödinger (1887-1961) was an Austrian physicist renowned for
            his significant contributions to quantum mechanics, particularly
            through the development of the Schrödinger equation. His work laid
            the groundwork for understanding the behavior of particles at the
            quantum level and has had a lasting impact on the field of
            theoretical physics.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born on August 12, 1887, in Vienna, Austria, Schrödinger showed an
            early interest in science and mathematics. He began his studies at
            the University of Vienna in 1906, where he was influenced by
            prominent physicists and mathematicians of the time. His academic
            journey was marked by a deep curiosity and a commitment to exploring
            the fundamental principles of nature.
            <SectionTitle>The Schrödinger Equation</SectionTitle>
            In 1925, Schrödinger formulated the Schrödinger equation, a
            fundamental equation in quantum mechanics that describes how the
            quantum state of a physical system changes over time. This equation
            is crucial for understanding the behavior of particles such as
            electrons and atoms. It provides a mathematical framework for
            predicting the probability distributions of particles and their
            interactions. The Schrödinger equation has become a cornerstone of
            quantum mechanics, providing insights into the wave-like properties
            of particles and allowing scientists to make precise predictions
            about atomic and subatomic phenomena. Schrödinger's work
            revolutionized our understanding of the quantum world and
            established a new paradigm for studying matter and energy.
            <SectionTitle>Wave Mechanics and Quantum Theory</SectionTitle>
            Schrödinger's work on wave mechanics introduced the concept that
            particles can exhibit both wave-like and particle-like properties.
            This duality is a key feature of quantum theory and has been
            instrumental in explaining various quantum phenomena. Schrödinger's
            contributions to wave mechanics helped establish the framework for
            understanding the behavior of electrons in atoms and molecules.
            Schrödinger also introduced the concept of the wave function, which
            describes the probability distribution of a particle's position and
            momentum. The wave function is a central concept in quantum
            mechanics and has been used to develop various theories and models
            in physics and chemistry.
            <SectionTitle>
              Philosophical and Theoretical Contributions
            </SectionTitle>
            Schrödinger was also known for his philosophical reflections on the
            nature of reality and the implications of quantum mechanics. He
            engaged in debates about the interpretation of quantum theory and
            its implications for our understanding of reality. His famous
            thought experiment involving a cat in a box, known as Schrödinger's
            cat, illustrated the paradoxes and complexities of quantum
            mechanics. Schrödinger's philosophical inquiries and theoretical
            contributions helped shape the development of quantum mechanics and
            contributed to ongoing discussions about the nature of reality and
            the limits of scientific knowledge.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Throughout his career, Schrödinger held positions at various
            institutions, including the University of Zurich and the Institute
            for Advanced Study in Princeton. He continued to contribute to
            theoretical physics and engaged in interdisciplinary research on
            topics such as genetics and philosophy. Schrödinger was awarded the
            Nobel Prize in Physics in 1933 for his work on wave mechanics and
            the Schrödinger equation. His legacy extends beyond his scientific
            achievements, as his contributions to quantum mechanics have had a
            profound and lasting impact on the field of physics. Erwin
            Schrödinger passed away on January 4, 1961, but his work remains
            central to our understanding of the quantum world. His insights into
            the behavior of particles and the nature of reality continue to
            inspire and influence researchers in physics and related fields.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default ErwinSchrödinger;
