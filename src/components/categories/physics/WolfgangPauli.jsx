import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import pauliImage from "../../../assets/wolfgang_pauli.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #0e0e0e;
  color: #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff66cc;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff66cc, 0 0 10px #ff66cc, 0 0 20px #ff66cc;
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

const WolfgangPauli = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={pauliImage} alt="Wolfgang Pauli" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Wolfgang Pauli (1900-1958) was a pioneering Austrian physicist whose
            contributions to quantum mechanics and particle physics have had a
            profound impact on the field. Known for the Pauli exclusion
            principle, Pauli's work laid critical foundations for our
            understanding of atomic structure and quantum theory. His research
            helped shape modern physics, influencing both theoretical and
            experimental approaches.
            <SectionTitle>Early Life and Education</SectionTitle>
            Wolfgang Pauli was born on April 25, 1900, in Vienna, Austria, to a
            family of intellectuals. His father, a chemist, and his mother, an
            accomplished pianist, fostered an environment rich in scientific and
            artistic pursuits. Pauli displayed exceptional aptitude in
            mathematics and physics from a young age. He began his formal
            studies at the University of Vienna in 1918, where he was influenced
            by leading physicists of the time, including Arnold Sommerfeld and
            Niels Bohr.
            <SectionTitle>
              Early Research and the Pauli Exclusion Principle
            </SectionTitle>
            Pauli's early research focused on the theoretical aspects of quantum
            mechanics. In 1925, he introduced the Pauli exclusion principle,
            which states that no two fermions (particles with half-integer spin)
            can occupy the same quantum state simultaneously within a quantum
            system. This principle was revolutionary, providing a critical
            explanation for the structure of atoms and the stability of matter.
            It explained why electrons in an atom fill distinct orbitals and why
            matter maintains its form. The exclusion principle was a key
            development in the field of quantum mechanics and provided essential
            insights into the behavior of electrons in atoms. It also played a
            crucial role in the development of the theory of white dwarf stars
            and neutron stars, which are supported by the principles of quantum
            mechanics.
            <SectionTitle>Contributions to Quantum Mechanics</SectionTitle>
            Pauli's work extended beyond the exclusion principle to include
            significant contributions to the development of quantum mechanics.
            His formulation of the Pauli matrices, which are used to describe
            spin operators in quantum mechanics, provided a mathematical
            framework for understanding particle spin. This work was
            instrumental in advancing the theory of quantum mechanics and
            contributed to the development of quantum field theory. Pauli's
            involvement in the development of the theory of spin was
            particularly influential. He proposed that particles could possess
            intrinsic angular momentum, or spin, which was a critical concept
            for understanding atomic and subatomic processes. His insights into
            spin and the properties of particles laid the groundwork for future
            research in quantum field theory and particle physics.
            <SectionTitle>
              The Pauli Neutrino and Contributions to Particle Physics
            </SectionTitle>
            In addition to his work on quantum mechanics, Pauli made significant
            contributions to particle physics. In 1930, he proposed the
            existence of the neutrino, a neutral particle that was later
            confirmed experimentally. The neutrino was introduced to explain the
            apparent violation of energy conservation in beta decay processes.
            Pauli's prediction of the neutrino was a major milestone in particle
            physics, leading to the discovery of this elusive particle and
            advancing our understanding of fundamental interactions. Pauli's
            contributions to particle physics extended to his involvement in the
            development of the theory of weak interactions. His work on the weak
            force, which is responsible for processes such as beta decay, was
            crucial in shaping our understanding of fundamental forces in
            nature. Pauli's insights into weak interactions and particle physics
            helped establish the framework for the Standard Model of particle
            physics.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Wolfgang Pauli continued his research and academic work throughout
            his life. He held positions at various institutions, including the
            University of Zurich, the Institute for Advanced Study in Princeton,
            and the University of Munich. Pauli's contributions to quantum
            mechanics and particle physics earned him widespread recognition,
            including the Nobel Prize in Physics in 1945 for his discovery of
            the Pauli exclusion principle. Pauli's legacy extends beyond his
            scientific contributions. He was known for his rigorous approach to
            research and his ability to challenge established theories. His work
            had a lasting impact on the field of theoretical physics,
            influencing generations of physicists and shaping our understanding
            of atomic and subatomic processes. Wolfgang Pauli passed away on
            December 15, 1958, but his contributions to physics remain integral
            to our understanding of the fundamental nature of matter. His work
            continues to be studied and celebrated, and his insights into
            quantum mechanics and particle physics have had a lasting impact on
            the field of science.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default WolfgangPauli;
