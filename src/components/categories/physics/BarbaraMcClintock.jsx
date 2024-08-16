import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import mcclintockImage from "../../../assets/barbara_mcclintock.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #2196f3;
  margin-top: 2rem;
  text-shadow: 0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 20px #2196f3;
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

const BarbaraMcClintock = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={mcclintockImage} alt="Barbara McClintock" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Barbara McClintock (1902-1992) was a groundbreaking American
            scientist renowned for her discovery of transposons, or "jumping
            genes," which challenged the conventional understanding of genetic
            inheritance. Her pioneering work in genetics earned her the Nobel
            Prize in Physiology or Medicine in 1983, making her the first woman
            to receive the award in this category.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born on June 16, 1902, in Hartford, Connecticut, Barbara McClintock
            displayed an early interest in science. She attended Cornell
            University, where she earned her Bachelor of Science degree in 1923
            and her Ph.D. in 1927. During her time at Cornell, McClintock
            conducted research on maize (corn), which would become the focus of
            her future work.
            <SectionTitle>Scientific Contributions</SectionTitle>
            McClintock's most significant contribution to science was her
            discovery of transposons, which are segments of DNA that can move
            from one location to another within a genome. Her research
            demonstrated that these "jumping genes" could influence the
            expression of other genes and play a crucial role in genetic
            variation. Working with maize, McClintock observed that certain
            genetic elements could move within the genome, causing changes in
            the pigmentation of the corn kernels. This phenomenon, known as
            "mutable loci," provided the first evidence of genetic elements that
            could change their position within the genome, leading to variations
            in gene expression. McClintock's work on transposons was initially
            met with skepticism, but it eventually became a cornerstone of
            modern genetics. Her research laid the foundation for the
            understanding of genetic regulation, gene mutations, and the
            mechanisms underlying genetic diversity.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Despite facing significant challenges as a woman in science during
            her early career, McClintock's contributions were eventually
            recognized and celebrated. In addition to the Nobel Prize, she
            received numerous other awards and honors throughout her career.
            McClintock continued her research and teaching at various
            institutions, including the Carnegie Institution of Washington and
            the University of Missouri. Her work has had a lasting impact on the
            field of genetics and molecular biology, influencing research on
            genetic engineering, gene therapy, and the study of genomic
            stability. Barbara McClintock passed away on September 2, 1992, in
            Hampton, Connecticut. Her legacy is remembered through her
            pioneering work on transposons and her contributions to the
            understanding of genetic mechanisms.
            <SectionTitle>Legacy and Honors</SectionTitle>
            McClintock's groundbreaking discoveries in genetics are commemorated
            through various awards and honors. The Barbara McClintock Award for
            Plant Genetics and Genome Studies, established by the American
            Society of Plant Biologists, recognizes outstanding contributions to
            the field of plant genetics. Her legacy also lives on through her
            influence on modern genetic research and her role as a trailblazer
            for women in science. McClintock's contributions have shaped our
            understanding of genetics and have paved the way for future
            advancements in the field. Barbara McClintock's pioneering work on
            transposons and her dedication to scientific research have left an
            indelible mark on the field of genetics, making her one of the most
            influential scientists of the 20th century.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default BarbaraMcClintock;

