import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import maxwellImage from "../../../assets/James_Clerk_Maxwell.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1a1a2e;
  color: #eaeaea;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #00bfff;
  margin-top: 2rem;
  text-shadow: 0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 20px #00bfff;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: #2a2a3e;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const JamesClerkMaxwell = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
        <Card>
          <Image src={maxwellImage} alt="James Clerk Maxwell" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            James Clerk Maxwell (1831-1879) was a Scottish physicist best known
            for his formulation of Maxwell&apos;s equations, which describe the
            behavior of electric and magnetic fields. His work laid the
            foundation for classical electromagnetism, optics, and electric
            circuits. Maxwell&apos;s equations provided a unified theory of
            electricity and magnetism, predicting the existence of
            electromagnetic waves and leading to the development of modern
            physics.
            <SectionTitle>Early Life</SectionTitle>
            Maxwell was born in Edinburgh, Scotland, and exhibited an early
            interest in science and mathematics. He attended Edinburgh Academy
            and later studied at the University of Edinburgh, where he began to
            explore his interests in natural philosophy. Maxwell continued his
            studies at Cambridge University, where he was influenced by the work
            of Michael Faraday and Isaac Newton.
            <SectionTitle>Maxwell&apos;s Equations</SectionTitle>
            Maxwell&apos;s most significant contribution to physics was his set
            of four equations that describe the relationship between electric
            and magnetic fields. These equations, known as Maxwell&apos;s
            equations, are fundamental to the theory of electromagnetism and
            have had a profound impact on various fields, including optics,
            electrical engineering, and communications. They form the basis for
            understanding electromagnetic waves, including light.
            <SectionTitle>Contributions to Optics</SectionTitle>
            In addition to his work on electromagnetism, Maxwell made
            significant contributions to optics. His theory of color vision and
            analysis of light as an electromagnetic wave revolutionized the
            field of optics. Maxwell&apos;s equations showed that light is an
            electromagnetic wave, which unified the theories of light and
            electromagnetism.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Maxwell held academic positions at Marischal College in Aberdeen and
            King&apos;s College London. His work was recognized posthumously,
            and he is regarded as one of the most influential physicists in
            history. Maxwell&apos;s equations influenced many areas of physics,
            including the theory of relativity and quantum mechanics. His
            contributions have had a lasting impact on science and technology,
            making him a central figure in the history of physics.
            Maxwell&apos;s work paved the way for the development of many modern
            technologies, including radio, television, and radar. His theories
            continue to be fundamental in the study of electromagnetism and
            optics, reflecting his lasting influence on the scientific
            community.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default JamesClerkMaxwell;
