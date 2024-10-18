import { render, screen, fireEvent, within } from "@testing-library/react";
import { StickyNotes } from "./StickyNotes";

describe("Create StickyNote", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
   
    test("creates a new note", () => {
      render(<StickyNotes />);
   
   // Please make sure your sticky note has a title and content input field with the following placeholders.
      const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
      const createNoteContentTextarea =
        screen.getByPlaceholderText("Note Content");
      const createNoteButton = screen.getByText("Create Note");
   
      fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
      fireEvent.change(createNoteContentTextarea, {
        target: { value: "Note content" },
      });
      fireEvent.click(createNoteButton);
   
      const newNoteTitle = screen.getByText("New Note");
      const newNoteContent = screen.getByText("Note content");
   
      expect(newNoteTitle).toBeInTheDocument();
      expect(newNoteContent).toBeInTheDocument();
    });

    test("read a note", () => {
        render(<StickyNotes />);
     

      const messages = document.getElementsByClassName("note-item")
    //  const helloMessage = within(messages).getByText('hello')
      const note1_title = within(messages[0] as HTMLElement).getByText("test note 1 title");

      const note1_content = within(messages[0] as HTMLElement).getByText("test note 1 content");
      const note1_role =  within(messages[0] as HTMLElement).getByText("other");
      expect(note1_title).toBeInTheDocument();
      expect(note1_content).toBeInTheDocument();
      expect(note1_role).toBeInTheDocument();


      const note2_title =  within(messages[1] as HTMLElement).getByText("test note 2 title");
      const note2_content =  within(messages[1] as HTMLElement).getByText("test note 2 content");
      const note2_role =  within(messages[1] as HTMLElement).getByText("personal");
      expect(note2_title).toBeInTheDocument();
      expect(note2_content).toBeInTheDocument();
      expect(note2_role).toBeInTheDocument();

      const note3_title =  within(messages[2] as HTMLElement).getByText("test note 3 title");
      const note3_content =  within(messages[2] as HTMLElement).getByText("test note 3 content");
      const note3_role =  within(messages[2] as HTMLElement).getByText("work");
      expect(note3_title).toBeInTheDocument();
      expect(note3_content).toBeInTheDocument();
      expect(note3_role).toBeInTheDocument();

      const note4_title =  within(messages[3] as HTMLElement).getByText("test note 4 title");
      const note4_content =  within(messages[3] as HTMLElement).getByText("test note 4 content");
      const note4_role =  within(messages[3] as HTMLElement).getByText("study");
      expect(note4_title).toBeInTheDocument();
      expect(note4_content).toBeInTheDocument();
      expect(note4_role).toBeInTheDocument();

      const note5_title =  within(messages[4] as HTMLElement).getByText("test note 5 title");
      const note5_content =  within(messages[4] as HTMLElement).getByText("test note 5 content");
      const note5_role =  within(messages[4] as HTMLElement).getByText("study");
      expect(note5_title).toBeInTheDocument();
      expect(note5_content).toBeInTheDocument();
      expect(note5_role).toBeInTheDocument();

      const note6_title =  within(messages[5] as HTMLElement).getByText("test note 6 title");
      const note6_content = within(messages[5] as HTMLElement).getByText("test note 6 content");
      const note6_role =  within(messages[5] as HTMLElement).getByText("personal");
      expect(note6_title).toBeInTheDocument();
      expect(note6_content).toBeInTheDocument();
      expect(note6_role).toBeInTheDocument();
   
      // const notesOnPage = screen.getAllByClassName("Note");

    });

    test("delete a note", () => {
        render(<StickyNotes />);

        const messages = document.getElementsByClassName("note-item")
        //  const helloMessage = within(messages).getByText('hello')
        const note1_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note1_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 1 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 1 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("other")).toBeNull();
    

        

   
   
      // const notesOnPage = screen.getAllByClassName("Note");

    });

    test("delete a note", () => {
        render(<StickyNotes />);

        const messages = document.getElementsByClassName("note-item")
        //  const helloMessage = within(messages).getByText('hello')
        const note1_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note1_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 1 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 1 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("other")).toBeNull();
    

        

   
   
      // const notesOnPage = screen.getAllByClassName("Note");

    });

      test("delete a note edge case", () => {
        render(<StickyNotes />);

        const messages = document.getElementsByClassName("note-item")
        //  const helloMessage = within(messages).getByText('hello')
        const note1_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note1_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 1 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 1 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("other")).toBeNull();

        const note2_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note2_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 2 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 2 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("personal")).toBeNull();

        const note3_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note3_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 3 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 3 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("work")).toBeNull();

        const note4_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note4_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 4 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 4 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("study")).toBeNull();


        const note5_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note5_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 5 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 5 content")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("study")).toBeNull();


        const note6_delButton = within(messages[0] as HTMLElement).getByText("x");

        fireEvent.click(note6_delButton);

        expect(within(messages[0] as HTMLElement).queryByText("test note 6 title")).toBeNull();
        expect(within(messages[0] as HTMLElement).queryByText("test note 6 content")).toBeNull();
        //expect(within(messages[0] as HTMLElement).queryByText("personal")).toBeNull();
   
      // const notesOnPage = screen.getAllByClassName("Note");

    });

    test("update a note", () => {
        render(<StickyNotes />);

        const messages = document.getElementsByClassName("note-item")
        //  const helloMessage = within(messages).getByText('hello')

        const note1_title = within(messages[0] as HTMLElement).getByText("test note 1 title");

        const note1_content = within(messages[0] as HTMLElement).getByText("test note 1 content");
        const note1_role =  within(messages[0] as HTMLElement).getByText("other");

      
        expect(note1_title).toBeInTheDocument();
        expect(note1_content).toBeInTheDocument();
        expect(note1_role).toBeInTheDocument();

        note1_title.innerHTML = "Numaan";
        note1_content.innerHTML = "friend";
        note1_role.innerHTML = "work";
        const note1_title_changed = within(messages[0] as HTMLElement).getByText("Numaan");
        const note1_content_changed = within(messages[0] as HTMLElement).getByText("friend");
        const note1_role_changed =  within(messages[0] as HTMLElement).getByText("work");
        expect(note1_title_changed).toBeInTheDocument();
        expect(note1_content_changed).toBeInTheDocument();
        expect(note1_role_changed).toBeInTheDocument();

   
      // const notesOnPage = screen.getAllByClassName("Note");

    });
   
   });

 