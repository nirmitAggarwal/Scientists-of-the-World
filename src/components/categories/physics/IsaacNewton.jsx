import React from "react";
import styled from "styled-components";
import { FaAppleAlt } from "react-icons/fa";
import newtonImage from "../../../assets/isaac_newton.jpg";

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1a1a2e;
  color: #eaeaea;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #ffa500;
  text-shadow: 0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 20px #ffa500;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ffa500;
  margin-top: 2rem;
  text-shadow: 0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 20px #ffa500;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: #2a2a3e;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const IsaacNewton = () => {
  return (
    <Container>
      <Header>
        <FaAppleAlt /> Isaac Newton
      </Header>
      <Card>
        <Image src={newtonImage} alt="Isaac Newton" />
        <Content>
          <SectionTitle>Introduction</SectionTitle>
          Isaac Newton was born on January 4, 1643, in Woolsthorpe, England. He
          is widely recognized as one of the greatest and most influential
          scientists of all time. His contributions to science and mathematics
          have had a profound and lasting impact on the world. Newton made
          significant advances in the fields of physics, astronomy, mathematics,
          and natural philosophy. His work laid the foundation for many
          scientific principles that are still in use today.
          <br />
          <br />
          <SectionTitle>Early Life</SectionTitle>
          Newton&apos;s early life was marked by hardship. His father died
          before he was born, and he was raised by his grandmother after his
          mother remarried. Despite these challenges, Newton showed an early
          aptitude for science and mathematics. He attended the King's School in
          Grantham, where he was introduced to the works of Euclid and other
          mathematicians. In 1661, he enrolled at Trinity College, Cambridge,
          where he studied mathematics and philosophy.
          <br />
          <br />
          <SectionTitle>Contributions to Physics</SectionTitle>
          During his time at Cambridge, Newton began to develop his theories on
          calculus, optics, and the laws of motion. He made groundbreaking
          discoveries in these fields, which he later published in his seminal
          work, "Philosophiæ Naturalis Principia Mathematica" (Mathematical
          Principles of Natural Philosophy), in 1687. This work laid out the
          three laws of motion and the law of universal gravitation, which
          became the foundation of classical mechanics.
          <br />
          <br />
          Newton&apos;s first law of motion, also known as the law of inertia,
          states that an object at rest will remain at rest, and an object in
          motion will remain in motion, unless acted upon by an external force.
          His second law of motion defines the relationship between an object's
          mass, acceleration, and the applied force, stating that force equals
          mass times acceleration (F = ma). The third law of motion states that
          for every action, there is an equal and opposite reaction.
          <br />
          <br />
          <SectionTitle>Contributions to Mathematics</SectionTitle>
          In addition to his work in physics, Newton made significant
          contributions to the field of optics. He conducted experiments with
          light and prisms, demonstrating that white light is composed of a
          spectrum of colors. He also developed the reflecting telescope, which
          used mirrors instead of lenses to improve image clarity and reduce
          chromatic aberration. This invention greatly advanced the field of
          astronomy and remains in use today.
          <br />
          <br />
          <SectionTitle>Contributions to Optics</SectionTitle>
          Newton&apos;s work in mathematics was equally groundbreaking. He
          developed the fundamental principles of calculus independently of
          German mathematician Gottfried Wilhelm Leibniz. Although there was
          controversy over who developed calculus first, it is now accepted that
          both Newton and Leibniz arrived at their discoveries independently.
          Newton's notation and methods are still used in calculus today.
          <br />
          <br />
          <SectionTitle>Later Life and Legacy</SectionTitle>
          Beyond his scientific achievements, Newton also made contributions to
          theology and alchemy. He wrote extensively on biblical interpretation
          and alchemical studies, although these works were not published during
          his lifetime. Despite his interests in these areas, Newton is best
          remembered for his scientific and mathematical contributions.
          <br />
          <br />
          Newton served as the Lucasian Professor of Mathematics at Cambridge
          from 1669 to 1702. In 1703, he was elected President of the Royal
          Society, a position he held until his death. In 1705, he was knighted
          by Queen Anne, becoming Sir Isaac Newton. He continued to work and
          publish on various scientific topics throughout his life.
          <br />
          <br />
          Isaac Newton died on March 31, 1727, in London, England. He was buried
          in Westminster Abbey, a testament to his significant contributions to
          science and society. His legacy continues to influence modern science,
          and his discoveries remain a cornerstone of physics and mathematics
          education around the world.
          <br />
          <br />
          Newton&apos;s life and work exemplify the power of human curiosity and
          the quest for knowledge. His discoveries have shaped our understanding
          of the natural world and laid the groundwork for countless scientific
          advancements. Today, he is remembered as a towering figure in the
          history of science, whose work continues to inspire scientists and
          thinkers across disciplines.
        </Content>
      </Card>
    </Container>
  );
};

export default IsaacNewton;
