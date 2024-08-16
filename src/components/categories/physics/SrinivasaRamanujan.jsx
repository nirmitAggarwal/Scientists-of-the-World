import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import ramanujanImage from "../../../assets/srinivasa_ramanujan.jpg"; // Ensure this image is placed in the assets folder

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

const SrinivasaRamanujan = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={ramanujanImage} alt="Srinivasa Ramanujan" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Srinivasa Ramanujan (December 22, 1887 – April 26, 1920) was an
            Indian mathematician whose work in mathematical analysis, number
            theory, infinite series, and continued fractions has had a profound
            impact on modern mathematics. Despite having little formal training,
            Ramanujan produced results that were both groundbreaking and
            enigmatic, influencing mathematicians worldwide.
            <SectionTitle>Early Life and Education</SectionTitle>
            Ramanujan was born in Erode, India, into a modest family. From an
            early age, he demonstrated an extraordinary aptitude for
            mathematics. His early education was characterized by his passion
            for mathematics, which led him to independently study advanced
            mathematical concepts. His work initially went unnoticed until he
            began sending his results to mathematicians in England. In 1914,
            Ramanujan's correspondence with G.H. Hardy, a prominent
            mathematician at the University of Cambridge, led to an invitation
            to work in England. Despite the challenges of living in a foreign
            country and facing health issues, Ramanujan made significant
            contributions to mathematics during his time in Cambridge.
            <SectionTitle>Mathematical Contributions</SectionTitle>
            Ramanujan's work encompassed a wide range of mathematical fields,
            including: - **Number Theory**: Ramanujan made significant
            contributions to number theory, particularly in the areas of
            partition functions and highly composite numbers. His work on the
            partition function, which counts the number of ways a positive
            integer can be expressed as the sum of positive integers, was
            groundbreaking. - **Infinite Series**: Ramanujan developed several
            remarkable results related to infinite series. His series for
            calculating π (pi) were particularly noteworthy and have been used
            in various mathematical and computational applications. -
            **Continued Fractions**: Ramanujan's research on continued fractions
            provided deep insights into their properties and applications. His
            results in this area have had lasting implications in both pure and
            applied mathematics. - **Mock Theta Functions**: One of Ramanujan's
            most enigmatic contributions was his work on mock theta functions.
            These functions were not fully understood until many years after his
            death, but they have since become an important area of research in
            number theory and mathematical analysis.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Ramanujan's contributions to mathematics have been recognized and
            celebrated posthumously. His work has inspired numerous
            mathematicians and researchers, and his results continue to be the
            subject of ongoing study. The Ramanujan Journal and the Ramanujan
            Prize for Young Mathematicians are among the honors established to
            recognize achievements in mathematics inspired by his work. In
            recognition of his contributions, several mathematical concepts and
            results have been named in his honor, including the Ramanujan–Hardy
            Number and the Ramanujan Conjecture. His legacy is also commemorated
            through various academic and cultural initiatives, including
            biographies, films, and mathematical societies. Despite his brief
            life, Srinivasa Ramanujan's impact on mathematics is profound and
            enduring. His work remains a testament to the power of mathematical
            intuition and creativity, and he continues to be celebrated as one
            of the greatest mathematicians of the 20th century.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default SrinivasaRamanujan;
