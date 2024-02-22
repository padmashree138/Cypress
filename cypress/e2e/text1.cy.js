/// <reference types ="cypress"/>

it("Google Search", () => {
  cy.visit("https://www.google.com");

  cy.get(".glFyf123", { timeout: 5000 }).type("Automation Step by Step{Enter}");

  // cy.contains("Google Search").click();

  cy.contains("Videos").click();
});
