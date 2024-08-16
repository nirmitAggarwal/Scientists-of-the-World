import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import lovelaceImage from "../../../assets/ada_lovelace.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1b1b1b;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff4081;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff4081, 0 0 10px #ff4081, 0 0 20px #ff4081;
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

const AdaLovelace = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={lovelaceImage} alt="Ada Lovelace" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Ada Lovelace (December 10, 1815 – November 27, 1852) was an English
            mathematician and writer who is recognized for her work on Charles
            Babbage’s early mechanical general-purpose computer, the Analytical
            Engine. Her notes on the engine include what is considered the first
            algorithm intended to be processed by a machine, making her one of
            the first computer programmers.
            <SectionTitle>Early Life and Education</SectionTitle>
            Ada Lovelace was born as Augusta Ada Byron, the daughter of the
            famous poet Lord Byron and his wife Annabella Milbanke. Ada’s
            mother, Annabella, encouraged her interest in mathematics and logic,
            hoping to counterbalance the influence of her poet father. Ada
            received private tutoring from some of the leading mathematicians of
            the time, including Augustus De Morgan and Mary Somerville.
            Lovelace’s mathematical prowess was evident from an early age. At
            17, she met Charles Babbage, who was working on his concept of a
            mechanical computer, the Analytical Engine. Babbage’s work intrigued
            Lovelace, and she began to collaborate with him on his project.
            <SectionTitle>Contributions to Computing</SectionTitle>
            Ada Lovelace’s most significant contribution was her detailed notes
            on Babbage’s Analytical Engine. She translated an article by the
            Italian mathematician Luigi Federico Menabrea, adding her own
            extensive notes, which included a description of the engine’s
            capabilities and a detailed algorithm for calculating Bernoulli
            numbers. Lovelace’s notes were far ahead of their time. She
            anticipated the future of computing, describing how machines could
            be programmed to perform various tasks beyond arithmetic, such as
            composing music or creating graphics. Her work laid the groundwork
            for the future development of computing and programming languages.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Ada Lovelace’s contributions were not fully recognized during her
            lifetime. However, her work gained recognition in the 20th century,
            and she is now celebrated as a pioneering figure in computing. The
            United States Department of Defense named its programming language
            ADA in her honor. In addition to her contributions to computing, Ada
            Lovelace is remembered for her visionary thinking and her role as a
            trailblazer for women in science and technology. Various awards,
            honors, and institutions have been established in her name,
            including the Ada Lovelace Day, which celebrates the achievements of
            women in STEM fields. Ada Lovelace’s legacy continues to inspire and
            influence the field of computer science. Her vision of computing as
            a tool for solving complex problems and her foresight into the
            potential of machines have cemented her place as one of the greatest
            pioneers of the digital age.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default AdaLovelace;
