import { theme } from '../../styles/theme'
import { Button } from '../Button'
import { ContainerSlider, SliderItem, Container } from './styles'

export const HeaderSlider = () => {
  return (
    <ContainerSlider>
      <Container>
        <ItemSlider
          title={'Acelere cada etapa da sua carreira em programação'}
          subtitle={'Dev Week'}
          actionTitle="Faça sua inscrição"
          buttonText="Me inscrever"
        />
      </Container>
    </ContainerSlider>
  )
}

interface ItemSliderProps {
  subtitle?: string
  title: string
  actionTitle?: string
  buttonText: string
  actionButton?: () => void
}

export const ItemSlider = ({
  subtitle,
  title,
  actionTitle,
  buttonText,
  actionButton,
}: ItemSliderProps) => {
  return (
    <SliderItem>
      <div className="col">
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
      </div>

      <div className="col">
        <div className="youtSubscripte">
          <h3>{actionTitle}</h3>
          <Button
            bg={theme.colors.primary}
            color={theme.colors.light_gray}
            text={buttonText}
            borderColor="#f4f4f4"
          />
        </div>
      </div>
    </SliderItem>
  )
}
