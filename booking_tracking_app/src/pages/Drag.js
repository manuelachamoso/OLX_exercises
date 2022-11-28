import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Book from "../components/Book";
import Shelf from "../components/Shelf";
import { Link } from "react-router-dom";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Drag({books, setBooks, changeShelf}) {
const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
const read = books.filter((book) => book.shelf === 'read')

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }
        
        setBooks((prevTasks) =>
          reorder(prevTasks, source.draggableId, destination.index)
          
        );
        setBooks(source.draggableId, destination.droppableId)
        console.log(result)
      }}
      
    ><div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
      
    </div>
    <div className="list-books-content">
      <div>
      </div>
      <div>
      <Shelf section='Currently Reading' books={books} category="currentlyReading" changeShelf={changeShelf} />
      <Shelf section='Want to read' books={books} category="wantToRead" changeShelf={changeShelf} />
      <Shelf section='Read' books={books} category="read" changeShelf={changeShelf}/>
      </div>
      <div className="open-search">
        <Link to='/search' className='open-search'>Add a book</Link>
    </div>
    </div>
  </div>
      <div className="app">
        <Droppable droppableId="read">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            > 
              {read.map((book, index) => (
                <Draggable key={book.id} draggableId={book.id} index={index}>
                  {(draggableProvided) => (
                    <div
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      
                    >
                      <Book key={book.id}  book={book} setBooks={setBooks}/>
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="currentlyReading">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            > 
              {currentlyReading.map((book, index) => (
                <Draggable key={book.id} draggableId={book.id} index={index}>
                  {(draggableProvided) => (
                    <div
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      
                    >
                      <Book key={book.id}  book={book} setBooks={setBooks}/>
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Drag;