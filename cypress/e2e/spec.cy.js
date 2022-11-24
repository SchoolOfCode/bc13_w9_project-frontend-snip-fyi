/// <reference types="cypress"/>

import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(1000);

// describe("Opening the application", () => {
//   it("Visits the url", () => {
//     cy.visit("http://localhost:3000/");
//   });
// });

beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Testing the add Snippet function", () => {
  it("Clicks the add Snippet button and enters values to create a Snippet", () => {
    cy.get("button").click();
    cy.get(".CreateSnippet > input")
      .type("How to console.log: Hello World")
      .should("have.value", "How to console.log: Hello World");
    cy.get('[placeholder="Your code here"]')
      .type("console.log('Hello World')")
      .should("have.value", "console.log('Hello World')");
    cy.get('[placeholder="Description"]')
      .type(
        "A thorough example of how to console.log the greeting 'Hello World'"
      )
      .should(
        "have.value",
        "A thorough example of how to console.log the greeting 'Hello World'"
      );
    cy.get('[type="submit"]').click();
    cy.get(".CardDisplay").last().should("contain", "Hello World");
  });
});

describe("Checking the Search functionality", () => {
  it("Enters a valid search term into the search bar and checks that results are shown, then empties search bar", () => {
    cy.get('[type="search"]').type("How to").should("have.value", "How to");
    cy.get(":nth-child(1) > .card-inner-wrapper > .title").should(
      "contain",
      "Hello World"
    );
    cy.get('[type="search"]')
      .type("{selectall}{backspace}")
      .should("have.value", "");
  });
});

describe("Adding a comment", () => {
  it("Opens a Snippet, adds a comment then checks the comment has been added, then closes the Snippet", () => {
    cy.get(".card-display-wrapper > .CardDisplay > .Card")
      .last()
      .click({ force: true });
    cy.get(".author-section > input")
      .type("{selectall}{backspace}")
      .type("Little Bobby Drop Tables")
      .should("have.value", "Little Bobby Drop Tables");
    cy.get("textarea")
      .type("I'm coming for your database!")
      .should("have.value", "I'm coming for your database!");
    cy.get(".CommentForm > button").click();
    cy.get(".ViewSnippet > :nth-child(5)").click();
  });
});

describe("Deleting a Snippet", () => {
  it("Opens a Snippet, clicks the delete button, checks the Snippet has been deleted", () => {
    cy.get(".card-display-wrapper > .CardDisplay > .Card")
      .last()
      .click({ force: true });
    cy.get(".ViewSnippet > :nth-child(6)").click();
    cy.get(".card-display-wrapper > .CardDisplay > .Card")
      .last()
      .should("not.have.value", "How to console.log: Hello World");
    cy.get('[type="search"]').type(" ").type("{selectall}{backspace}");
  });
});
