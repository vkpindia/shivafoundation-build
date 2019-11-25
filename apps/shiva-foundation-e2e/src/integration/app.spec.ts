import { getGreeting } from '../support/app.po';

describe('shiva-foundation', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to shiva-foundation!');
  });
});
