import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import coriImage from "../../../assets/gerty_cori.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff5722;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 20px #ff5722;
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

const GertyCori = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={coriImage} alt="Gerty Cori" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Gerty Cori (1896-1957) was a pioneering biochemist who, along with
            her husband Carl Cori, made groundbreaking contributions to the
            understanding of enzyme action and carbohydrate metabolism. She was
            the first woman to win a Nobel Prize in Physiology or Medicine,
            highlighting her significant impact on the field of biochemistry.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born on August 15, 1896, in Prague, then part of the
            Austro-Hungarian Empire, Gerty Radnitz Cori showed an early aptitude
            for science. She studied at the German University in Prague, where
            she completed her doctorate in 1920. Gerty met Carl Cori, a fellow
            student, and they married in 1920. The couple’s collaborative work
            in biochemistry would become a hallmark of their careers. They moved
            to the United States in 1922, where they continued their research at
            Washington University in St. Louis.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Gerty Cori's most significant contributions to science include her
            research on the Cori cycle, which describes the metabolic pathway
            involving the conversion of glycogen to glucose and back. This cycle
            is fundamental to understanding how energy is managed in muscles and
            liver tissues. The Coris' work on the action of enzymes led to the
            discovery of the role of phosphorylase in the breakdown of glycogen.
            Their research provided a detailed understanding of how enzymes work
            and how they regulate metabolic processes, which was crucial for
            advancing the field of biochemistry. The Coris also contributed to
            the understanding of the role of coenzymes in enzyme reactions. They
            studied the function of adenosine triphosphate (ATP) and its role in
            cellular metabolism, helping to clarify how energy is transferred
            and utilized within cells.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Gerty Cori received numerous awards and honors throughout her
            career, including the Nobel Prize in Physiology or Medicine in 1947,
            which she shared with her husband Carl Cori and Bernard Lown for
            their discovery of the mechanisms of the action of enzymes. Gerty
            and Carl Cori's collaborative research not only advanced the field
            of biochemistry but also set a precedent for future scientific
            collaborations. Their work has had lasting implications for our
            understanding of metabolic processes and enzyme action. Gerty Cori
            passed away on October 26, 1957, in Washington, D.C. Her legacy
            continues through the numerous biochemists and researchers who have
            built upon her groundbreaking work. Her contributions to science
            have been recognized globally, and she is remembered as a
            trailblazer in the field of biochemistry.
            <SectionTitle>Legacy and Honors</SectionTitle>
            The Coris' contributions to science are commemorated through various
            awards and recognitions. The Cori Institute at Washington University
            in St. Louis continues to honor their legacy through research in
            biochemistry and related fields. Gerty Cori's pioneering work has
            had a profound impact on the study of enzymes and metabolism,
            influencing both basic research and clinical applications. Her
            legacy lives on through the continued advancement of biochemistry
            and the many scientists inspired by her work. Gerty Cori's
            achievements have left an indelible mark on the field of
            biochemistry, and her contributions continue to shape our
            understanding of the biochemical processes that underpin life.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default GertyCori;
