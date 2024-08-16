import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import oppenheimerImage from "../../../assets/j_robert_oppenheimer.jpg"; // Ensure this image is placed in the assets folder

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

const JRobertOppenheimer = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={oppenheimerImage} alt="J. Robert Oppenheimer" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            J. Robert Oppenheimer (1904-1967) was an American theoretical
            physicist who is best known for his role as the scientific director
            of the Manhattan Project, the World War II project that developed
            the first nuclear weapons. His contributions to theoretical physics,
            particularly in quantum mechanics, and his complex relationship with
            the political and scientific communities have made him a significant
            and controversial figure in the history of science.
            <SectionTitle>Early Life and Education</SectionTitle>
            Julius Robert Oppenheimer was born on April 22, 1904, in New York
            City, to a wealthy Jewish family. His father, Julius Oppenheimer,
            was a successful textile importer, and his mother, Ella Friedman
            Oppenheimer, was a painter. Oppenheimer's early education was marked
            by a profound interest in languages and science. He attended the
            Ethical Culture Fieldston School, where he excelled in his studies
            and showed an early interest in physics. Oppenheimer went on to
            Harvard University, where he pursued studies in chemistry before
            shifting his focus to physics. His undergraduate years were marked
            by his remarkable intellectual capabilities and a burgeoning
            interest in theoretical physics. After graduating summa cum laude in
            1925, he continued his studies at the University of Cambridge under
            the guidance of J.J. Thomson and then at the University of
            Göttingen, where he worked with Max Born. During this period,
            Oppenheimer made significant contributions to quantum mechanics,
            particularly in the field of wave mechanics.
            <SectionTitle>
              Scientific Contributions and Theoretical Physics
            </SectionTitle>
            Oppenheimer’s early work in quantum mechanics was foundational. He
            made substantial contributions to the development of quantum field
            theory and the theory of electron-positron pairs. His work on the
            Born-Oppenheimer approximation, which simplifies the mathematical
            treatment of molecular wave functions, remains a key concept in
            molecular quantum mechanics. Oppenheimer also played a crucial role
            in the development of the theory of neutron stars and black holes.
            His 1939 paper, co-authored with his student George Volkoff, was
            among the first to predict the existence of neutron stars—a concept
            that was later confirmed observationally.
            <SectionTitle>The Manhattan Project</SectionTitle>
            In 1942, Oppenheimer was appointed as the scientific director of the
            Manhattan Project, a top-secret U.S. government project aimed at
            developing atomic weapons. Under his leadership, the project
            successfully developed and tested the first nuclear bomb in July
            1945, at the Trinity test site in New Mexico. The success of the
            Manhattan Project was a testament to Oppenheimer's remarkable
            ability to manage a large, interdisciplinary team of scientists and
            engineers. The project not only marked a turning point in World War
            II but also ushered in the atomic age, fundamentally altering global
            politics and the nature of warfare.
            <SectionTitle>
              Post-War Contributions and Controversies
            </SectionTitle>
            After World War II, Oppenheimer became a prominent advocate for the
            peaceful use of nuclear energy and the control of nuclear weapons.
            He served as the Chairman of the Atomic Energy Commission (AEC) from
            1947 to 1952, where he worked on promoting international cooperation
            on nuclear issues and managing the U.S. nuclear arsenal. However,
            during the Cold War, Oppenheimer faced intense scrutiny and
            political pressure. His previous associations with leftist causes
            and his opposition to the development of the hydrogen bomb led to a
            contentious security clearance hearing in 1954. The hearing resulted
            in the revocation of his security clearance and a public fall from
            grace. Despite the controversies, Oppenheimer continued to influence
            the scientific community. He returned to academia, serving as a
            professor at the Institute for Advanced Study in Princeton, where he
            contributed to various fields of theoretical physics and engaged in
            philosophical discussions about science and society.
            <SectionTitle>Legacy</SectionTitle>
            J. Robert Oppenheimer’s legacy is complex and multifaceted. He is
            remembered as a brilliant physicist who made foundational
            contributions to quantum mechanics and nuclear physics. His
            leadership of the Manhattan Project and his subsequent advocacy for
            nuclear control and peaceful applications of atomic energy reflect
            his profound impact on both science and international policy.
            Oppenheimer’s life and career illustrate the challenges faced by
            scientists working at the intersection of scientific innovation and
            political influence. His contributions to physics remain highly
            regarded, and his story continues to be studied as an example of the
            ethical and political dimensions of scientific work. Oppenheimer
            passed away on February 18, 1967, but his influence endures through
            his scientific achievements and his role in shaping the modern
            world. His life serves as a reminder of the profound impact that
            scientists can have on global history and the ongoing ethical
            considerations surrounding technological advancements.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default JRobertOppenheimer;
