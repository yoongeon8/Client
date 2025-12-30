import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background1 from '../assets/background1.png';
import playerImg from '../assets/player-start-1.png';
import playerProfileImg from '../assets/player-start-profile.png';

const Container = styled.div<{ $bg: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const IntroOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.h1`
  color: white;
  font-size: 3rem;
`;

const StandingCharacter = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  height: 85%;
  z-index: 1;
`;

const DialogueSection = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  display: flex;
  align-items: stretch;
  z-index: 10;
`;

const ProfileWrapper = styled.div`
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #FF7CF2, #FFF583);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 10px;
  box-sizing: border-box;
`;

const ProfileInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MessageBox = styled.div`
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.7);
  border: 6px solid;
  border-image-source: linear-gradient(to right, #FF7CF2, #FFF583);
  border-image-slice: 1;
  padding: 30px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameTag = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  background: linear-gradient(to right, #FF7CF2, #FFF583);
  padding: 5px 25px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: yellow;
  }
`;

const DialogueText = styled.div`
  fontSize: 1.5rem;
  color: white;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const PrologPage = () => {
  const [step, setStep] = useState(1);
  const [currentLine, setCurrentLine] = useState(0);

  const dialogues = [
    "아...",
    "집인데 집에 가고 싶다",
    "내가 이 개발을 지금 왜 하고 있어야 하는 걸까",
    "정신병자 컴백 각이다..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextDialogue = () => {
    if (step === 2) {
      if (currentLine < dialogues.length - 1) {
        setCurrentLine(currentLine + 1);
      } else {
        alert("프롤로그 끝");
      }
    }
  };

  return (
    <Container $bg={background1} onClick={handleNextDialogue}>
      {/* STEP 1: 인트로 */}
      {step === 1 && (
        <IntroOverlay>
          <IntroText>점심시간 정원 앞</IntroText>
        </IntroOverlay>
      )}

      {/* STEP 2: 대화창 */}
      {step === 2 && (
        <>
          <StandingCharacter src={playerImg} alt="Character" />
          
          <DialogueSection>
            {/* 좌측 프로필 */}
            <ProfileWrapper>
              <ProfileInner>
                <ProfileImage src={playerProfileImg} alt="Profile" />
              </ProfileInner>
            </ProfileWrapper>

            {/* 우측 대화창 */}
            <MessageBox>
              <NameTag>
                <span>★</span> Player <span>★</span>
              </NameTag>
              <DialogueText>{dialogues[currentLine]}</DialogueText>
            </MessageBox>
          </DialogueSection>
        </>
      )}
    </Container>
  );
};

export default PrologPage;

// --- Styled Components ---