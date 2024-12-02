import { describe, expect, it } from "vitest";
import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";


describe('app', () => {

    it("should count increment correctly when clicking button", () =>{
        render(<App/>)

        const button = screen.getByText(/count is 0/i);

        fireEvent.click(button)
        expect(button).toHaveTextContent("count is 1")

        fireEvent.click(button)
        expect(button).toHaveTextContent("count is 2")



    })


})