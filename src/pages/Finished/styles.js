import styled from 'styled-components';

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    padding: 100px 0 40px;
`;

export const Container2 = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 1034px) {
    flex-direction: column-reverse;
    align-items:center;
    justify-content:center;
  }
`;

export const Navbar = styled.div`
    @media (max-width: 1050px) {
    display:none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 342px 1fr;
  height: 100%;

  @media (max-width: 984px) {
    grid-template-columns: 1fr;
  }
`;

export const Titulo = styled.p`
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: rgba(0, 0, 0, 0.88);
`;

export const Profile = styled.img`
 src: url(${(props) => props.src});

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  overflow: hidden;
  position: absolute;
  margin: 16px 39px;
  top: 0;
  right: 0;
`;


export const Button = styled.button`
width: 328px;
height: 48px;
border-radius:100px;
border:none;
font-weight: 600;
font-size: 14px;
line-height: 22px;
text-align: center;
text-transform: uppercase;
margin: 0 8px;

color: ${(props) => `${props.cor}`};
background-color: ${(props) => `${props.bg}`};
border: ${(props) => `${props.border}`};

@media (max-width: 1034px) {
    margin:10px;
  }
      @media (max-width: 400px) {
        width: 280px;
      }
  `;
