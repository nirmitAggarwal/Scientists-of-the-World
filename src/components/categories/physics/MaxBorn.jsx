import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import bornImage from "../../../assets/max_born.jpg"; // Ensure this image is placed in the assets folder

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

const MaxBorn = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={bornImage} alt="Max Born" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Max Born (1882-1970) was a German physicist who made fundamental
            contributions to quantum mechanics and solid-state physics. Born's
            work on the probabilistic interpretation of quantum mechanics and
            his contributions to the development of the theory of crystals
            significantly influenced modern physics.
            <SectionTitle>Early Life and Education</SectionTitle>
            Max Born was born on December 11, 1882, in Breslau (now Wrocław,
            Poland). He studied physics at the University of Göttingen, where he
            was influenced by the work of Wilhelm Wien and other leading
            physicists of the time. Born completed his doctoral studies under
            the supervision of Adolf Smekal and went on to contribute to the
            burgeoning field of quantum mechanics.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Born's most significant contribution to quantum mechanics was his
            statistical interpretation of the wave function, which describes the
            probability of finding a particle in a given region. This
            interpretation, known as the Born rule, is a cornerstone of quantum
            theory and remains a key component of the field. In addition to his
            work on quantum mechanics, Born made important contributions to the
            theory of crystals. His work on the statistical properties of
            crystal structures led to the development of the theory of lattice
            dynamics, which explains the vibrational properties of crystals and
            has applications in various fields, including material science and
            solid-state physics. Born also played a crucial role in the
            development of matrix mechanics, a form of quantum mechanics
            formulated by Werner Heisenberg and others. He collaborated with
            other leading physicists, including Niels Bohr and Albert Einstein,
            to advance the understanding of quantum phenomena and to explore the
            implications of quantum theory.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            In the 1930s, Born's academic career flourished, and he became a
            professor at the University of Göttingen. He mentored many students
            who would go on to make significant contributions to physics,
            including Werner Heisenberg and Wolfgang Pauli. However, with the
            rise of the Nazi regime in Germany, Born faced increasing
            persecution due to his Jewish heritage. In 1933, he emigrated to the
            United Kingdom, where he continued his research and teaching at the
            University of Edinburgh. Born's contributions to quantum mechanics
            were recognized with the Nobel Prize in Physics in 1954, awarded for
            his fundamental work in quantum mechanics and his statistical
            interpretation of the wave function. His work laid the groundwork
            for many advancements in physics and has had a lasting impact on the
            field. Max Born passed away on January 5, 1970, in Göttingen,
            Germany. His legacy continues through his contributions to quantum
            mechanics and solid-state physics, and his work remains influential
            in modern scientific research.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Born's impact on physics is commemorated through various honors and
            awards. The Max Born Prize, awarded by the Institute of Physics,
            recognizes outstanding contributions to quantum mechanics and
            related fields. The University of Göttingen, where Born conducted
            much of his research, has named a research institute in his honor,
            the Max Born Institute, which focuses on experimental and
            theoretical studies in quantum mechanics and related disciplines.
            Born's work continues to influence the study of quantum mechanics
            and solid-state physics. His contributions have shaped our
            understanding of the fundamental nature of matter and energy, and
            his legacy endures through the continued exploration of the
            principles he helped establish. Max Born's remarkable contributions
            to physics have left an indelible mark on the field, and his
            pioneering work in quantum mechanics and crystal theory continues to
            inspire and guide physicists and researchers around the world.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default MaxBorn;
