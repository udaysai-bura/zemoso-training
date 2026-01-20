import styled from "styled-components";

export const Page = styled.div`
  font-family: system-ui, sans-serif;
  background: #f5f6fa;
  min-height: 100vh;
  padding: 24px;
`;

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 500px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h3`
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 8px 10px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({ danger }) => (danger ? "#ffb3b3" : "#ccc")};
  background: ${({ danger }) => (danger ? "#ffecec" : "#eee")};
  color: ${({ danger }) => (danger ? "#c0392b" : "#000")};
  cursor: pointer;
  font-size: 14px;
  margin-right: 6px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const UserInfo = styled.div`
  span {
    display: block;
    font-size: 13px;
    color: #555;
  }
`;
