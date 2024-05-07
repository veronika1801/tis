describe("Cypress tests", () => {
	// it("Successful Authorization Test", () => {
	// 	cy.fixture("example").then((data) => {
	// 		cy.log("Переход на страницу авторизации")
	// 		cy.visit(data.login_url)

	// 		cy.log("Ввод логина")
	// 		cy.get('.form-input--text')
	// 			.type(data.login)

	// 		cy.log("Ввод пароля")
	// 		cy.get('.form-input--password')
	// 			.type(data.password)

	// 		cy.log("Кликаем на кнопку \"Войти\"")
	// 		cy.get(':nth-child(3) > .button')
	// 			.click()

	// 		cy.wait(2000)

	// 		cy.url().should("include", "/account/main")
	// 	})
	// })

	it.only("Error Message Display Test", () => {
		cy.fixture("example").then((data) => {
			cy.log("Переход на страницу авторизации")
			cy.visit(data.login_url)

			cy.log("Ввод логина")
			cy.get('.form-input--text')
				.type(data.none_existent_login)

			cy.log("Ввод пароля")
			cy.get('.form-input--password')
				.type(data.none_existent_password)

			cy.log("Кликаем на кнопку \"Войти\"")
			cy.get(':nth-child(3) > .button')
				.click()

			cy.wait(300)

			cy.get('.form-error > span')
				.should("contain", "Неверный логин или пароль, попробуйте заново.")
		})
	})
})