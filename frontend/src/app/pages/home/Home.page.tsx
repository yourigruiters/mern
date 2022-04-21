import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const CRAText = styled.h1`
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 60px;
  font-weight: 300;
  line-height: 80px;
`;

const Button = styled.button`
  margin: 40px;
  padding: 20px;
`;

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <>
      <CRAText>CRA-Personal Placeholder</CRAText>
      <Container>
        <Button>Hoi - Doet niks</Button>
      </Container>
    </>
  );
};

export default HomePage;
