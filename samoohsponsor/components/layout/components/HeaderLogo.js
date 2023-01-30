import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo> Samooh Sponsor</Logo>
  )
}

const Logo = styled.h1`
 font-weight: bold;
 font-size: 55px;
 margin-left: 11px ;
 font-family: 'Lobster';
 letter-spacing: 3px;
 cursor: pointer;
`

export default HeaderLogo