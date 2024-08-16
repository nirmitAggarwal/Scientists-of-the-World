import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import gellMannImage from "../../../assets/murray_gell_mann.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #03a9f4;
  margin-top: 2rem;
  text-shadow: 0 0 5px #03a9f4, 0 0 10px #03a9f4, 0 0 20px #03a9f4;
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

const MurrayGellMann = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={gellMannImage} alt="Murray Gell-Mann" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Murray Gell-Mann (born 1929) is an American physicist renowned for
            his development of the quark model, which describes the fundamental
            constituents of matter. His work has had a profound impact on
            particle physics and our understanding of the subatomic world.
            <SectionTitle>Early Life and Education</SectionTitle>
            Murray Gell-Mann was born on September 15, 1929, in New York City.
            He exhibited an early talent for mathematics and science, leading
            him to pursue studies in physics at Yale University. He earned his
            doctorate in physics from the Massachusetts Institute of Technology
            (MIT) in 1951.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Gell-Mann's most significant contribution to physics is the quark
            model, proposed in 1964. This model introduced the concept of quarks
            as fundamental particles that combine to form protons, neutrons, and
            other hadrons. The quark model has become a cornerstone of the
            Standard Model of particle physics, providing a framework for
            understanding the behavior and interactions of elementary particles.
            In addition to his work on quarks, Gell-Mann has made substantial
            contributions to the development of quantum chromodynamics (QCD),
            the theory describing the strong force that binds quarks together.
            His research has provided valuable insights into the fundamental
            forces of nature and the structure of matter. Gell-Mann is also
            known for his work on the classification of particles and the
            development of the Eightfold Way, a scheme that organizes particles
            based on their symmetries and interactions. This classification
            scheme helped to predict the existence of new particles and guided
            experimental searches in particle physics.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Throughout his career, Gell-Mann has received numerous awards and
            honors for his contributions to physics. In 1969, he was awarded the
            Nobel Prize in Physics for his work on the theory of elementary
            particles and the development of the quark model. Beyond his
            research, Gell-Mann has been a prominent advocate for the
            advancement of science and education. He has contributed to various
            scientific organizations and has worked to promote public
            understanding of science. Gell-Mann's legacy extends through his
            influential research, which has shaped the field of particle physics
            and our understanding of the fundamental forces of nature. His work
            continues to inspire physicists and researchers exploring the
            mysteries of the subatomic world.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Murray Gell-Mann's contributions to physics are commemorated through
            various awards and recognitions. The Gell-Mann Prize in Theoretical
            Physics, awarded by the Institute for Advanced Study, recognizes
            outstanding achievements in the field of theoretical physics. The
            quark model and Gell-Mann's research have had a lasting impact on
            our understanding of particle physics, influencing subsequent
            developments and shaping the direction of future research in the
            field. Gell-Mann's work remains a fundamental part of the study of
            elementary particles, and his contributions continue to be
            celebrated and recognized within the scientific community. His
            pioneering research has left an indelible mark on the field of
            physics and the study of the fundamental building blocks of the
            universe. Murray Gell-Mann's dedication to advancing scientific
            knowledge and his significant contributions to the understanding of
            particle physics have established him as one of the most influential
            physicists of the 20th century.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default MurrayGellMann;
