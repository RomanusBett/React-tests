import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe('Greetings component', () => {
    test('renders Hello world as text', () => {
        render(<Greetings />);
        const HelloWordElement = screen.getByText('Hello World!', { exact: false });
        expect(HelloWordElement).toBeInTheDocument();
    });

    test('renders Welcome to this test if the button was NOT clicked', ()=>{
        render(<Greetings />);
        const ChangeTheTextElement = screen.getByText('Welcome to This test', { exact: true });
        expect(ChangeTheTextElement).toBeInTheDocument();
    })

    test('renders Changed text if the button was clicked', ()=>{
        render(<Greetings />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement); 

        const ChangedTextElement = screen.getByText('Changed text');
        expect(ChangedTextElement).toBeInTheDocument();

    })
});