import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Accordion from './Acc';

describe("Accordion test", () => {
    it("should show title all the time", () => {
        
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
})