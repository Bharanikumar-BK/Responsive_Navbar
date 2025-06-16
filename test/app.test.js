/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Navbar HTML structure', () => {
  let html;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../index.html');
    html = fs.readFileSync(filePath, 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('Navbar exists', () => {
    const navbar = document.querySelector('nav');
    expect(navbar).not.toBeNull();
  });

  test('Navbar has logo', () => {
    const logo = document.querySelector('.logo');
    expect(logo).not.toBeNull();
    expect(logo.textContent).toBeTruthy();
  });

  test('Navbar has menu items', () => {
    const menuItems = document.querySelectorAll('.nav-links li');
    expect(menuItems.length).toBeGreaterThan(0);
  });
});
