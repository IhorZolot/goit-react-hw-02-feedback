import { styled } from 'styled-components';

export const Container = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 60px;
`;

export const FeedbackButton = styled.div`
  display: inline;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`;

export const Button = styled.button`
font-size: 16px;
  border: 2px solid lightgray;
  border-radius: 4px;
  padding: 10px 15px;
  width: 80px;
  margin-right: 45px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;}
  `;

export const ContainerStatistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
`;

export const StatValue = styled.p`
  border: 2px solid lightgray;
  padding: 10px 15px;
  width: 200px;
  font-size: 16px;
  
`;

export const Message = styled.p`
font-size: 24px;
color: red;
  border: 2px solid lightgray;
  padding: 10px 15px;
  width: 300px;
  text-align: center;
  
`;
