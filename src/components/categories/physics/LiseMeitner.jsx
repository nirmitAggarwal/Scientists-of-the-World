import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import meitnerImage from "../../../assets/lise_meitner.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ffab00;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ffab00, 0 0 10px #ffab00, 0 0 20px #ffab00;
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

const LiseMeitner = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={meitnerImage} alt="Lise Meitner" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Lise Meitner (1878-1968) was an Austrian-Swedish physicist who made
            significant contributions to the understanding of nuclear fission.
            Her work, alongside Otto Hahn, led to the discovery of nuclear
            fission, a process that underpins the operation of nuclear reactors
            and atomic bombs.
            <SectionTitle>Early Life and Education</SectionTitle>
            Lise Meitner was born on November 7, 1878, in Vienna, Austria. She
            showed an early aptitude for mathematics and science and went on to
            study physics at the University of Vienna. She earned her doctorate
            in 1906, becoming one of the first women to achieve this in her
            field.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Meitner’s early work focused on radioactivity and nuclear physics.
            She collaborated with Otto Hahn in the 1920s, and their research was
            pivotal in the discovery of nuclear fission. While Hahn conducted
            the experimental work, Meitner, with her theoretical insights, was
            instrumental in explaining the results and understanding the process
            of nuclear fission. In 1938, while forced to flee Nazi Germany due
            to her Jewish heritage, Meitner continued her work in Sweden. She
            provided a theoretical explanation for the process of nuclear
            fission, describing how the nucleus of an atom splits into smaller
            parts, releasing a significant amount of energy. Meitner's
            explanation of nuclear fission laid the groundwork for the
            development of nuclear power and atomic weapons. Her contributions
            were crucial in shaping the future of nuclear science and
            technology.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            After World War II, Meitner continued her scientific work, although
            she did not receive the same level of recognition as some of her
            male counterparts. She was awarded several honors later in life,
            including the prestigious Enrico Fermi Award in 1966. Lise Meitner's
            legacy is commemorated through several scientific awards and honors
            named in her memory. The element meitnerium (Mt), discovered in
            1982, is named after her, acknowledging her contributions to
            science. Despite facing significant obstacles in her career due to
            her gender and political circumstances, Meitner’s contributions to
            nuclear physics have had a lasting impact on the field. Her work not
            only advanced scientific understanding but also paved the way for
            numerous technological innovations in nuclear energy. Lise Meitner
            passed away on October 27, 1968, in Stockholm, Sweden. Her
            pioneering work and dedication to science continue to inspire
            physicists and researchers around the world.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Lise Meitner's contributions to physics are celebrated through
            various awards and recognitions. The Lise Meitner Award, given by
            the European Physical Society, honors outstanding achievements in
            the field of nuclear physics. Her story is a testament to the
            challenges and triumphs of women in science. Meitner’s resilience
            and groundbreaking work have left an indelible mark on the
            scientific community and continue to influence the study of nuclear
            physics. Meitner's legacy endures through her contributions to our
            understanding of atomic processes and her role in the development of
            nuclear science. Her work remains a cornerstone of modern physics,
            and her achievements are remembered as a significant part of
            scientific history.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default LiseMeitner;
