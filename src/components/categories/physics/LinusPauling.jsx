import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import paulingImage from "../../../assets/linus_pauling.jpg"; // Ensure this image is placed in the assets folder

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1c1c1c;
  color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff4500;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ff4500, 0 0 10px #ff4500, 0 0 20px #ff4500;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: justify;
`;

const Card = styled.div`
  background-color: #2a2a2a;
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

const LinusPauling = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={paulingImage} alt="Linus Pauling" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Linus Pauling (1901-1994) was an American chemist, biochemist, and
            peace activist. He is one of the most influential chemists of the
            20th century, known for his work on the nature of the chemical bond
            and his pioneering research in molecular biology. Pauling was
            awarded the Nobel Prize in Chemistry in 1954 for his research into
            the nature of the chemical bond and the application of these ideas
            to the elucidation of the structure of proteins.
            <SectionTitle>Early Life and Education</SectionTitle>
            Linus Pauling was born in Portland, Oregon, and exhibited an early
            interest in science. He attended Oregon State University, where he
            earned his degree in chemical engineering. His academic career
            continued at the California Institute of Technology (Caltech), where
            he made groundbreaking contributions to the field of chemistry.
            <SectionTitle>The Nature of the Chemical Bond</SectionTitle>
            One of Pauling&rsquo;s most significant contributions to science was his
            work on the nature of the chemical bond. His book, &quot;The Nature of
            the Chemical Bond,&quot; published in 1939, is considered one of the most
            influential chemistry books ever written. In it, Pauling introduced
            the concept of hybridization and the idea that chemical bonds result
            from the overlap of atomic orbitals. His work provided a theoretical
            framework for understanding molecular structure and bonding.
            <SectionTitle>Research in Molecular Biology</SectionTitle>
            Pauling&rsquo;s research extended beyond chemistry into the field of
            molecular biology. He was one of the first scientists to use X-ray
            diffraction to study the structure of biological molecules. His work
            on the structure of proteins, particularly the alpha-helix and
            beta-pleated sheet structures, was crucial in advancing the
            understanding of protein structure and function.
            <SectionTitle>Peace Activism and Nobel Peace Prize</SectionTitle>
            In addition to his scientific achievements, Linus Pauling was a
            prominent peace activist. He was an outspoken critic of nuclear
            weapons testing and played a key role in advocating for nuclear
            disarmament. His efforts were recognized when he was awarded the
            Nobel Peace Prize in 1962 for his work against nuclear testing and
            his commitment to world peace.
            <SectionTitle>Later Life and Legacy</SectionTitle>
            Pauling continued his scientific research and activism until his
            death in 1994. His legacy is marked by his contributions to
            chemistry, molecular biology, and his advocacy for peace. Pauling&rsquo;s
            work remains influential in various scientific disciplines, and his
            impact on both science and social issues is widely recognized. Linus
            Pauling&rsquo;s dedication to both science and peace has left a lasting
            legacy, inspiring future generations of scientists and activists.
            His groundbreaking research and unwavering commitment to social
            justice make him a significant figure in the history of science and
            global activism.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default LinusPauling;
