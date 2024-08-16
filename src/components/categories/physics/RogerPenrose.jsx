import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import penroseImage from "../../../assets/roger_penrose.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #8bc34a;
  margin-top: 2rem;
  text-shadow: 0 0 5px #8bc34a, 0 0 10px #8bc34a, 0 0 20px #8bc34a;
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

const RogerPenrose = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={penroseImage} alt="Roger Penrose" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Roger Penrose (born August 8, 1931) is a distinguished British
            physicist, mathematician, and cosmologist known for his significant
            contributions to the understanding of black holes, general
            relativity, and the nature of consciousness. His work has had a
            profound impact on theoretical physics and mathematics, earning him
            numerous accolades, including the Nobel Prize in Physics in 2020.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born in Colchester, Essex, England, Roger Penrose was introduced to
            mathematics and science from a young age. His father, Lionel
            Penrose, was a renowned geneticist, and his mother, Margaret
            Penrose, was a mathematician. This intellectual environment fostered
            Roger's interest in mathematics and physics. Penrose attended
            University College London (UCL) where he earned his Bachelor of
            Science degree in 1952. He went on to complete his Doctorate at
            Cambridge University under the supervision of the famous physicist,
            Sir Roger Penrose. During his doctoral studies, Penrose began to
            develop his groundbreaking theories in general relativity and
            cosmology.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Roger Penrose's most notable contributions include his work on
            singularity theorems, which proved that singularities (infinite
            density points) are a natural consequence of general relativity. His
            collaboration with Stephen Hawking led to the formulation of the
            Penrose-Hawking singularity theorems, which showed that
            singularities occur at the center of black holes and at the
            beginning of the universe. Penrose also introduced the concept of
            "Penrose tiling," a non-periodic tessellation of the plane that has
            applications in mathematical physics and crystallography. This
            tiling pattern is characterized by its ability to cover a plane
            without repeating and has been used to study quasicrystals and other
            complex structures. In addition to his work on black holes and
            tiling, Penrose has made significant contributions to the study of
            consciousness. His book "The Emperor's New Mind" explores the
            relationship between consciousness and computation, arguing that
            human consciousness cannot be fully explained by conventional
            theories of artificial intelligence.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Penrose's career has been marked by his involvement in both
            theoretical research and public discourse. He has held prestigious
            positions at various institutions, including the University of
            Oxford, where he has been a professor since 1973. His contributions
            to science have been recognized through numerous awards, including
            the Royal Society's Copley Medal and the Wolf Prize in Physics.
            Roger Penrose's impact on theoretical physics and cosmology is
            profound. His work on black holes, singularities, and the nature of
            consciousness has shaped our understanding of the universe and the
            nature of human cognition. His contributions continue to influence
            research in physics, mathematics, and philosophy.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Penrose's legacy is commemorated through various awards and honors,
            including the Nobel Prize in Physics in 2020, which he shared with
            Sir Roger Penrose and Reinhard Genzel for their work on black holes.
            The Penrose Institute, established in his honor, continues to
            advance research in theoretical physics and cosmology. His work has
            inspired generations of scientists and mathematicians, and his ideas
            have had a lasting impact on our understanding of the universe.
            Roger Penrose's contributions to science will be remembered for
            their originality and depth, and his influence will continue to be
            felt for years to come. Roger Penrose's research has not only
            advanced our knowledge of the cosmos but has also deepened our
            understanding of the fundamental nature of reality and
            consciousness.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default RogerPenrose;
