import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import rutherfordImage from "../../../assets/ernest_rutherford.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #2c2c2c;
  color: #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff9933;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff9933, 0 0 10px #ff9933, 0 0 20px #ff9933;
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

const ErnestRutherford = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={rutherfordImage} alt="Ernest Rutherford" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Ernest Rutherford (1871-1937) was a New Zealand physicist who is
            known as the father of nuclear physics. He was awarded the Nobel
            Prize in Chemistry in 1908 for his work on the chemistry of
            radioactive substances. Rutherford is best known for his discovery
            of the nuclear structure of the atom and his pioneering work on
            radioactive decay.
            <SectionTitle>Early Life and Education</SectionTitle>
            Rutherford was born in Brightwater, New Zealand, and showed an early
            aptitude for science. He studied at the University of New Zealand
            and later at the University of Cambridge, where he worked with J.J.
            Thomson and made significant contributions to the field of
            radioactivity.
            <SectionTitle>Gold Foil Experiment</SectionTitle>
            Rutherford is most famous for his gold foil experiment, conducted in
            1909. This experiment involved directing alpha particles at a thin
            gold foil and observing their scattering. The results led to the
            discovery of the atomic nucleus, as Rutherford found that most alpha
            particles passed through the foil, but some were deflected at large
            angles, suggesting the presence of a dense, positively charged
            nucleus at the center of the atom.
            <SectionTitle>Work on Radioactivity</SectionTitle>
            Rutherford made significant contributions to the understanding of
            radioactivity. He identified and named alpha and beta radiation and
            discovered that alpha particles are helium nuclei. His work laid the
            foundation for the development of nuclear physics and our
            understanding of radioactive decay processes.
            <SectionTitle>Later Work and Legacy</SectionTitle>
            Rutherford continued his research on nuclear physics and chemistry
            throughout his career. He was instrumental in the development of the
            concept of the nuclear model of the atom and the study of nuclear
            reactions. Rutherford&apos;s work had a profound impact on the field
            of physics, and his discoveries paved the way for future research in
            atomic and nuclear science. Ernest Rutherford&apos;s contributions
            to science have left a lasting legacy. His work on the structure of
            the atom and radioactivity continues to be fundamental to our
            understanding of atomic physics and has influenced generations of
            scientists.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default ErnestRutherford;
