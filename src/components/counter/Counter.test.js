import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Button from "../Button";
import Counter from "./Counter";


describe('Counter Component testing',()=>{
    it('Counter addition testing',()=>{
        render(<Counter/>)
        let h1 = screen.getByText("Counter: 0")
        expect(h1).toHaveTextContent("0")

        let increment = screen.getByText("Increment")
        userEvent.click(increment);
        expect(h1).toHaveTextContent("1")
    });

    it('Counter substraction testing',()=>{
        render(<Counter/>)
        let h1 = screen.getByText("Counter: 0")
        expect(h1).toHaveTextContent("0")

        let increment = screen.getByText("Decrement")
        userEvent.click(increment);
        expect(h1).toHaveTextContent("-1")
    });
})