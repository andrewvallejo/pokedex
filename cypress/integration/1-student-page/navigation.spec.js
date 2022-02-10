/// <reference types="cypress" />

describe('Student Page Navigation Spec', () => {
	before(() => {
		cy.visit('/')
		cy.intercept('GET', 'https://api.hatchways.io/assessment/students', {
			statusCode: 200,
			fixture: 'students.json'
		})
	})

	it('should render student portal', () => {
		cy.get('[data-cy=student-portal]').should('exist')
		cy.get('[data-cy=filter-nav]').should('exist')
		cy.get('[data-cy=search-bar-name]').should('exist')
		cy.get('[data-cy=search-bar-tags]').should('exist')
		cy.get('[data-cy=list-students]').should('exist')
	})
	it('should have a list of students', () => {
		cy.get('[data-cy=list-students]')
		cy.should('exist')
		cy.should('contain', 'Andrew Vallejo')
		cy.get('[data-cy=student-portal]').scrollTo('bottom')
		cy.get('[data-cy=list-students]')
		cy.should('contain', 'Maire')
		cy.get('[data-cy=student-portal]').scrollTo('top')
	})
	it('a student should have a profile', () => {
		cy.get('[cy-data="student-1"]')
		cy.should('contain', 'Andrew Vallejo')
		cy.should('contain', 'Email:')
		cy.should('contain', 'andrew.a.vallejo@gmail.com')
		cy.should('contain', 'Company:')
		cy.should('contain', 'Hatchways')
		cy.should('contain', 'Skill:')
		cy.should('contain', 'JavaScript')
		cy.should('contain', 'Average:')
		cy.should('contain', '88.875%')
		cy.get('[cy-data="student-1"] > .flex-row > .flex-1 > .absolute').click()
		cy.get('[cy-data="student-1"]')
		cy.should('contain', 'Test 1:')
		cy.should('contain', '78%')
		cy.should('contain', 'Test 8:')
		cy.should('contain', '87%')
		cy.get('[cy-data="student-1"] > .w-full > :nth-child(2) > .px-5.flex-col > .py-2 > [data-cy="testscores-list"]')
		cy.get('[cy-data="student-1"] > .flex-row > .flex-1 > .absolute').click()
	})
	it('should be able to add tags to any student', () => {
		cy.addTags()
		cy.get('[cy-data="student-1"]')
		cy.should('contain', 'tag1')
		cy.should('contain', 'tag2')
		cy.should('contain', 'tag3')
		cy.get('[cy-data="student-2"]')
		cy.should('contain', 'tag1')
		cy.should('contain', 'tag2')
		cy.get('[cy-data="student-3"]')
		cy.should('contain', 'tag2')
		cy.should('contain', 'tag3')
	})

	it('should have a "search by name" searchbar', () => {
		cy.get('[data-cy=search-bar-name]').should('have.attr', 'placeholder', 'Search by name')
	})
	it('should have a "search by tag" searchbar', () => {
		cy.get('[data-cy=search-bar-tags]').should('have.attr', 'placeholder', 'Search by tags')
	})
})
