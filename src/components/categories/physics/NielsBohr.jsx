import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import bohrImage from "../../../assets/Niels_Bohr.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1f1f1f;
  color: #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #00aaff;
  margin-top: 2rem;
  text-shadow: 0 0 5px #00aaff, 0 0 10px #00aaff, 0 0 20px #00aaff;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: justify;
`;

const Card = styled.div`
  background-color: #2e2e2e;
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

const NielsBohr = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={bohrImage} alt="Niels Bohr" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Niels Bohr (1885-1962) was a Danish physicist who made foundational
            contributions to understanding atomic structure and quantum
            mechanics. He was awarded the Nobel Prize in Physics in 1922 for his
            investigation of the structure of atoms and the radiation emanating
            from them. Bohr is best known for his Bohr model of the atom, which
            introduced the concept of quantized electron orbits.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born in Copenhagen, Denmark, Bohr showed an early aptitude for
            science. He studied at the University of Copenhagen, where he earned
            his doctorate under the supervision of J.J. Thomson. Bohr's early
            research focused on the structure of atoms and molecules, laying the
            groundwork for his later work.
            <SectionTitle>The Bohr Model</SectionTitle>
            The Bohr model, introduced in 1913, revolutionized the field of
            atomic physics. According to this model, electrons orbit the nucleus
            in quantized energy levels, and the emission or absorption of light
            occurs when electrons transition between these levels. This model
            successfully explained the spectral lines of hydrogen and provided a
            framework for understanding atomic structure.
            <SectionTitle>
              Quantum Mechanics and the Copenhagen Interpretation
            </SectionTitle>
            Bohr played a key role in the development of quantum mechanics. He,
            along with Werner Heisenberg, developed the Copenhagen
            interpretation of quantum mechanics, which posits that physical
            systems do not have definite properties until they are measured.
            This interpretation emphasizes the probabilistic nature of quantum
            phenomena and remains a foundational concept in quantum theory.
            <SectionTitle>Contributions to Nuclear Physics</SectionTitle>
            In addition to his work on atomic structure, Bohr made significant
            contributions to nuclear physics. He proposed the concept of nuclear
            fission in 1938, which laid the foundation for the development of
            nuclear energy and atomic weapons. Bohr's insights into nuclear
            reactions had a profound impact on both science and global politics.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Bohr continued his scientific work and advocacy for peaceful uses of
            atomic energy until his death in 1962. He founded the Institute for
            Theoretical Physics in Copenhagen, which became a major center for
            research in quantum mechanics. Bohr's contributions to science and
            his promotion of international scientific cooperation have left a
            lasting legacy in the field of physics. Niels Bohr remains a
            towering figure in the history of science. His work on atomic
            structure and quantum mechanics has had a profound impact on our
            understanding of the physical world, and his contributions continue
            to influence modern physics.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default NielsBohr;
