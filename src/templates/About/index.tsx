import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
        bibendum egestas augue arcu ut est. Sapien in monti palavris qui num
        significa nadis i pareci latim. Admodum accumsan disputationi eu sit.
        Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros
        vermeio.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
