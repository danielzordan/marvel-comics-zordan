import { FooterContainer, FooterContent } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <a href="https://developer.marvel.com/documentation/getting_started">
          Marvel API
        </a>
        <span>Data provided by Marvel. © 2022 MARVEL</span>
      </FooterContent>
    </FooterContainer>
  );
}
