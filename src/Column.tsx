import React from "react";
import { ColumnContainer, ColumnTitle } from './styles';
import AddNewItem from "./AddNewItem";
import Card from './Card';
import { useAppState } from "./state/AppStateContext";

type ColumnProps = {
  text: string;
  id: string;
}

const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {
        tasks.map(task => <Card text={task.text} id={task.id}/>)
      }
      <AddNewItem 
        toggleButtonText="+ Add another card"
        onAdd={(text) => console.log('another card', text)}
        dark
      />
    </ColumnContainer>
  )
}

export default Column;