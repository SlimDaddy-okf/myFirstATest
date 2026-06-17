import { test, expect } from '@playwright/test';

// test('My new test', () => {
//     console.log("Hello, my new test")
// });

// Альтернативний варіант 'My new test'
function writeText() {
    console.log("Hello, my new test");
}

test('My new test',writeText)