import { ColumnContainer, ColumnTitle, CardContainer } from './styles';
export const App = () => {
  return (
    <ColumnContainer>
      <ColumnTitle>Todo: </ColumnTitle>
      <CardContainer>First Item</CardContainer>
      <CardContainer>Second Item</CardContainer>
      <CardContainer>Third Item</CardContainer>
    </ColumnContainer>
  )
}

