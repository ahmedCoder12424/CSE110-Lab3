import { render, screen, fireEvent, within } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { Navbar } from "./navbar";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { StickyNotes } from "./StickyNotes";


describe("Read toDoList", () => {

    test("read to do list", () => {
      render(<ToDoList />);


      const messages = document.getElementsByClassName("App-body");

      console.log(messages[0]);
      

  
     // const listSubTitle = within(messages[0] as HTMLElement).getByText("Items bought:");
  //    const itemNumberLabel = within(messages[0] as HTMLElement).getByText("Items bought: ");
      const itemNumber = within(messages[0] as HTMLElement).getByText("Items bought: 0");
      const item_1 =  within(messages[0] as HTMLElement).getByText("Apples");
      const item_2 =  within(messages[0] as HTMLElement).getByText("Bananas");

     // expect(listSubTitle).toBeInTheDocument();
      expect(itemNumber).toBeInTheDocument();
      expect(item_1).toBeInTheDocument();
      expect(item_2).toBeInTheDocument();
  
    
      });

});

describe("check items toDoList", () => {

    test("check items checked is consistent", () => {
        render(<ToDoList/>);


      const messages = document.getElementsByClassName("App");
      
      
      
     
      const itemNumber = within(messages[0] as HTMLElement).getByText("Items bought: 0");
      const inputs = document.getElementsByTagName("input");
      console.log(inputs)
      const item_1 =  within(messages[0] as HTMLElement).getByText("Apples");
      const item_2 =  within(messages[0] as HTMLElement).getByText("Bananas");
      expect(itemNumber).toBeInTheDocument();
      fireEvent.click(inputs[0]);

      const itemNumber1= within(messages[0] as HTMLElement).getByText("Items bought: 1");
      expect(itemNumber1).toBeInTheDocument();

      fireEvent.click(inputs[0]);
      const itemNumber2= within(messages[0] as HTMLElement).getByText("Items bought: 2");
      expect(itemNumber2).toBeInTheDocument();


      fireEvent.click(inputs[1]);
      const itemNumber3= within(messages[0] as HTMLElement).getByText("Items bought: 1");
      expect(itemNumber3).toBeInTheDocument();

    
      });

      describe("check items toDoList edge case", () => {

        test("check items checked is consistent", () => {
            
            
            const {rerender} = render(<MemoryRouter><Navbar /> </MemoryRouter>);
 
           
         render(<ToDoList />);
    
          const messages = document.getElementsByClassName("App");
        
         
          const itemNumber = within(messages[0] as HTMLElement).getByText("Items bought: 0");
          const inputs = document.getElementsByTagName("input");

          
          expect(itemNumber).toBeInTheDocument();
          fireEvent.click(inputs[0]);
    
          const itemNumber1= within(messages[0] as HTMLElement).getByText("Items bought: 1");
          expect(itemNumber1).toBeInTheDocument();
    
          fireEvent.click(inputs[0]);
          const itemNumber2= within(messages[0] as HTMLElement).getByText("Items bought: 2");
          expect(itemNumber2).toBeInTheDocument();

         const links = document.getElementsByTagName("a");
         console.log(links);

         const homeLink = screen.getByTestId("home");
         const ABCLink = screen.getByTestId("abc");
    
         fireEvent.click(homeLink);
         fireEvent.click(ABCLink);

        
        console.log("successfully switched links")

        rerender(<ToDoList />);

        const messages1 = document.getElementsByClassName("App");
        console.log(messages[0]);
        const itemNumber3= within(messages1[0] as HTMLElement).getByText("Items bought: 0");
        expect(itemNumber3).toBeInTheDocument();

         
    
        
          });

});
});