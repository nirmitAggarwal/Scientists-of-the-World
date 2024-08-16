import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import curieImage from "../../../assets/Marie_Curie.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #2d2d2d;
  color: #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ff69b4;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 20px #ff69b4;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: #3a3a3a;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MarieCurie = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
        <Card>
          <Image src={curieImage} alt="Marie Curie" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Marie Curie (1867-1934) was a Polish-born physicist and chemist who
            conducted pioneering research on radioactivity. She was the first
            woman to win a Nobel Prize and remains the only person to have won
            Nobel Prizes in two different scientific fields: Physics and
            Chemistry. Her work laid the foundation for the development of x-ray
            machines and significantly advanced the understanding of atomic
            structure.
            <SectionTitle>Early Life</SectionTitle>
            Marie Curie was born Maria Skłodowska in Warsaw, Poland. Her early
            education was marked by a strong academic interest in science,
            despite the constraints imposed on women in her native country. She
            moved to Paris in 1891 to study at the Sorbonne, where she adopted
            the name Marie Curie and pursued her passion for science. There, she
            met Pierre Curie, whom she married in 1895.
            <SectionTitle>Research on Radioactivity</SectionTitle>
            Marie Curie’s most notable contribution to science was her research
            on radioactivity, a term she coined. Working with her husband
            Pierre, she discovered two new elements, polonium and radium. Her
            meticulous experiments demonstrated that radioactivity was a
            property of atoms, not a result of chemical reactions. This
            discovery was crucial in advancing the field of nuclear physics and
            medicine.
            <SectionTitle>Contributions to Medicine</SectionTitle>
            Marie Curie’s work had a profound impact on medical science. During
            World War I, she established mobile x-ray units, known as "Little
            Curies,&quot; which were used to diagnose injuries on the battlefield.
            Her research and applications in radiology paved the way for modern
            cancer treatments and diagnostic techniques, including radiation
            therapy.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            After the death of her husband Pierre in 1906, Marie Curie continued
            her research at the University of Paris. She was awarded the Nobel
            Prize in Chemistry in 1911 for her discovery of radium and polonium
            and for her contributions to the advancement of chemistry. Her
            legacy is celebrated for breaking barriers for women in science and
            for her groundbreaking work in radioactivity. Marie Curie died on
            July 4, 1934, from aplastic anemia, a condition linked to prolonged
            exposure to high levels of radiation. Her contributions to science
            have had a lasting impact on various fields, and she is remembered
            as a pioneer in the study of radioactivity and a trailblazer for
            women in science.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default MarieCurie;
