import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import bellBurnellImage from "../../../assets/jocelyn_bell_burnell.jpg"; // Ensure this image is placed in the assets folder

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

const JocelynBellBurnell = () => {
  return (
    <Container>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
        <Card>
          <Image src={bellBurnellImage} alt="Jocelyn Bell Burnell" />
          <Content>
            <SectionTitle>Introduction</SectionTitle>
            Jocelyn Bell Burnell (born July 15, 1943) is a distinguished
            astrophysicist known for her discovery of pulsars, a groundbreaking
            achievement in the field of radio astronomy. Her discovery, made in
            1967, significantly advanced our understanding of the universe and
            earned her numerous accolades, although the Nobel Prize for the
            discovery was awarded to her male colleagues.
            <SectionTitle>Early Life and Education</SectionTitle>
            Born in Belfast, Northern Ireland, Jocelyn Bell showed an early
            interest in science and mathematics. She pursued her undergraduate
            studies in physics at the University of Edinburgh, where she
            excelled academically. Following her undergraduate degree, she
            completed her Ph.D. at the University of Cambridge under the
            supervision of Antony Hewish.
            <SectionTitle>Scientific Contributions</SectionTitle>
            Bell Burnell's most notable achievement came during her Ph.D.
            research at Cambridge, where she worked on a project involving a
            radio telescope designed to detect quasars. Instead, she discovered
            a series of regular pulses of radio waves, which were initially
            thought to be signals from extraterrestrial civilizations and were
            nicknamed LGM (Little Green Men). These pulses were later identified
            as coming from rapidly rotating neutron stars, now known as pulsars.
            This discovery provided crucial evidence for the existence of
            neutron stars and contributed to the development of the theory of
            pulsar emission mechanisms. Her work has been pivotal in the field
            of astrophysics and has led to numerous studies on the nature of
            pulsars and their role in the universe. Bell Burnell's contributions
            to the field of radio astronomy extend beyond her initial discovery.
            She has conducted extensive research on the properties of pulsars
            and has been involved in various projects aimed at understanding the
            structure and evolution of the universe.
            <SectionTitle>Later Career and Legacy</SectionTitle>
            Throughout her career, Bell Burnell has held several prestigious
            academic positions and has been actively involved in promoting
            science education and diversity in STEM fields. She has been a
            professor at institutions such as the University of Oxford and has
            served as the President of the Royal Astronomical Society. Her
            achievements have been recognized through numerous awards and
            honors, including the Breakthrough Prize in Fundamental Physics and
            the Special Breakthrough Prize in Fundamental Physics. Despite not
            receiving the Nobel Prize for her discovery, Bell Burnell's
            contributions to science have been widely acknowledged and
            celebrated. Jocelyn Bell Burnell's legacy extends beyond her
            scientific achievements. She has been an advocate for women in
            science and has worked to increase the visibility of female
            scientists in the field. Her efforts have inspired a new generation
            of scientists and have contributed to the ongoing advancement of
            astrophysics.
            <SectionTitle>Legacy and Honors</SectionTitle>
            Bell Burnell's impact on astrophysics is commemorated through
            various honors and awards. In addition to her scientific
            achievements, she has been recognized for her contributions to
            science education and her advocacy for diversity in STEM. The Bell
            Burnell Graduate Scholarship Fund, established in her honor,
            supports underrepresented students pursuing graduate studies in
            astronomy and astrophysics. Her pioneering work in radio astronomy
            and her dedication to advancing scientific knowledge have left a
            lasting mark on the field. Jocelyn Bell Burnell's contributions
            continue to influence research in astrophysics, and her legacy will
            be remembered for her groundbreaking discovery of pulsars and her
            advocacy for the next generation of scientists.
          </Content>
        </Card>
      </Tilt>
    </Container>
  );
};

export default JocelynBellBurnell;
