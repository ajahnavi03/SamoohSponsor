import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();
  return (
    <HeaderNavWrapper>
      <Link href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false}>
        Campaigns
      </HeaderNavLinks></Link>
      <Link href={'/createcampaign'}><HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false}>
        Create Campaign
      </HeaderNavLinks></Link>
      <Link href={'/dashboard'}><HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false}>
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  height: 50%;
  border-radius: 10px;
  padding: 6px;
  margin-right: 160px;
`
const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Merriweather Sans';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: large;
`
export default HeaderNav