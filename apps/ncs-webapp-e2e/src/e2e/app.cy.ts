import { getHeader } from '../support/app.po';

describe('ncs-webapp-e2e', () => {
  beforeEach(() => cy.visit({url: '/'}))

  it('should able to login', () => {
    // // Custom command example, see `../support/commands.ts` file
    cy.login('daniel', 'password')

    // // Function helper example, see `../support/app.po.ts` file
    getHeader().contains(/NCS System/)
  })
})
