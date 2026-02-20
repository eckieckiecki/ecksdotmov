import { useEffect } from 'react';
import styled from 'styled-components';

const BSoDContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0000aa;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  padding: 24px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    animation: flicker 0.15s infinite;
    z-index: 2;
  }

  @keyframes flicker {
    0% {
      opacity: 0.97;
    }
    5% {
      opacity: 0.9;
    }
    10% {
      opacity: 0.99;
    }
    100% {
      opacity: 0.97;
    }
  }
`;

const BSoDContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 640px;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
`;

const ErrorText = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;

const ErrorCode = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  letter-spacing: 2px;
`;

const InfoText = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
`;

const NotFound = ({ path }: { path: string }) => {
  useEffect(() => {
    document.querySelectorAll('.winbox').forEach((winboxElement: any) => {
      if (winboxElement.winbox) {
        winboxElement.winbox.close();
      }
    });
  }, []);

  return (
    <BSoDContainer>
      <BSoDContent>
        <ErrorText>*** SYSTEM ERROR ***</ErrorText>
        <ErrorCode>PAGE_NOT_FOUND (0x00000404)</ErrorCode>

        <InfoText>A fatal exception 404 has occurred at: </InfoText>
                  <InfoText>{path}</InfoText>

        <InfoText style={{ marginTop: '24px' }}>You fucked up, buddy! The current application will be terminated.</InfoText>

        <InfoText style={{ marginTop: '24px' }}>
          Press any key to return to the desktop...
        </InfoText>

        <button
          onClick={() => {
            window.location.hash = '#/';
          }}
          style={{
            marginTop: '20px',
            padding: '8px 12px',
            background: '#0000aa',
            color: '#ffffff',
            border: '1px solid #ffffff',
            fontFamily: "'Courier New', monospace",
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Go Home
        </button>
      </BSoDContent>
    </BSoDContainer>
  );
};

export default NotFound;
