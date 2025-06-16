/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Navbar HTML structure', () => {
  let html;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../index.html'); // adjust if your HTML is in a different folder
    html = fs.readFileSync(filePath, 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('Header exists', () => {
    const header = document.querySelector('header');
    expect(header).not.toBeNull();
  });

  test('Header has logo', () => {
    const logo = document.querySelector('.logo');
    expect(logo).not.toBeNull();
    expect(logo.textContent).toBeTruthy();
  });

  test('Header has menu items', () => {
    const menuItems = document.querySelectorAll('.links li');
    expect(menuItems.length).toBeGreaterThan(0);
  });
});
