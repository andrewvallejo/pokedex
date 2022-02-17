// -- This is a "add tags to the first three pokemon" command --
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('addTags', () => {
	cy
		.get('[cy-data="pokemon-1"] > .flex-row > :nth-child(2) > .px-5.flex-col > .py-2 > form > .max-w-1\\/2')
		.type('tag1{enter}')
	cy
		.get('[cy-data="pokemon-1"] > .flex-row > :nth-child(2) > .px-5.flex-col > .py-2 > form > .max-w-1\\/2')
		.type('tag2{enter}')
	cy
		.get('[cy-data="pokemon-1"] > .flex-row > :nth-child(2) > .px-5.flex-col > .px-5 > form > .max-w-1\\/2')
		.type('tag3{enter}')
	cy
		.get('[cy-data="pokemon-2"] > .flex-row > :nth-child(2) > .px-5.flex-col > .py-2 > form > .max-w-1\\/2')
		.type('tag1{enter}')
	cy
		.get('[cy-data="pokemon-2"] > .flex-row > :nth-child(2) > .px-5.flex-col > .px-5 > form > .max-w-1\\/2')
		.type('tag2{enter}')
	cy
		.get('[cy-data="pokemon-3"] > .flex-row > :nth-child(2) > .px-5.flex-col > .py-2 > form > .max-w-1\\/2')
		.type('tag2{enter}')
	cy
		.get('[cy-data="pokemon-3"] > .flex-row > :nth-child(2) > .px-5.flex-col > .px-5 > form > .max-w-1\\/2')
		.type('tag3{enter}')
})
