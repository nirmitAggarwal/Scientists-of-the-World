import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import samuelsonImage from "../../../assets/paul_samuelson.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #00e5ff;
  margin-top: 2rem;
  text-shadow: 0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 20px #00e5ff;
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

const PaulSamuelson = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={samuelsonImage} alt="Paul Samuelson" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Paul Samuelson (May 15, 1915 – December 13, 2009) was an American
            economist and a key figure in the development of modern economic
            theory. He is renowned for his work in microeconomics, welfare
            economics, and mathematical economics. Samuelson’s contributions to
            economic theory and policy were instrumental in shaping 20th-century
            economic thought and practice.
            <SectionTitle>Early Life and Education</SectionTitle>
            Paul Samuelson was born in Gary, Indiana, and showed an early
            interest in economics. He pursued his undergraduate studies at the
            University of Chicago, where he was influenced by the Chicago School
            of Economics. Samuelson’s academic journey continued at Harvard
            University, where he completed his PhD in 1941 under the supervision
            of Alvin Hansen. During his time at Harvard, Samuelson developed a
            reputation for his innovative approach to economic theory. His
            dissertation, which focused on the application of mathematical
            methods to economic analysis, set the stage for his future work in
            the field.
            <SectionTitle>Contributions to Economic Theory</SectionTitle>
            Paul Samuelson’s most significant contributions to economics include
            his development of the neoclassical synthesis, which integrated
            Keynesian economics with classical economic theory. This synthesis
            became the foundation for much of modern macroeconomic thought.
            Samuelson’s seminal work, “Foundations of Economic Analysis” (1947),
            is considered one of the most important texts in the field of
            economics. The book introduced rigorous mathematical methods to
            economic theory, significantly influencing the development of
            econometrics and economic modeling. In addition to his work on
            economic theory, Samuelson made important contributions to welfare
            economics. He developed the concept of the “revealed preference,”
            which provides a method for analyzing consumer choice and
            preferences without relying on subjective utility functions.
            Samuelson’s influence extended beyond academic circles; his textbook
            “Economics” (1948) became a widely used reference and introduced
            many students to the principles of economics. The book has been
            revised and updated through numerous editions, reflecting
            Samuelson’s commitment to advancing economic education.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Paul Samuelson’s impact on economics was recognized through numerous
            awards and honors. He was awarded the Nobel Prize in Economic
            Sciences in 1970 for his contributions to the development of modern
            economic theory. Samuelson’s work was celebrated for its clarity,
            rigor, and applicability to real-world economic issues. Samuelson’s
            legacy is reflected in the continued use of his theories and methods
            in economic research and policy. His approach to economic analysis,
            which combines mathematical precision with practical insights, has
            shaped the field of economics and influenced generations of
            economists. Paul Samuelson passed away in 2009, leaving behind a
            rich legacy of scholarly work and a lasting influence on the field
            of economics. His contributions continue to be studied and
            appreciated by economists and students around the world.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default PaulSamuelson;
