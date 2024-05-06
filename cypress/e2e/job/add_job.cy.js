describe("Cypress tests", () => {
    it("Successfully added a new job", () => {
        cy.fixture("example").then((data) => {
            cy.viewport(1920, 1080);

            cy.visit(data.login_url)
            cy.log("Вводим логин")
            cy.get('.form-input--text').type("testerEmployer")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Password1")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Переходим во вкладку Вакансии")
            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()

            cy.log("Ждем пока загрузится страница")
            cy.wait(1000)

            cy.log("Кликаем на кнопку Создать вакансию")
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
           
                .click()

            cy.log("Ждем загрузки формы")
            cy.wait(1000)

            cy.log("Вводим Название вакансии")
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type("Varshik")

            cy.log("Вводим Требования")
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .type("Varshik")

            cy.log("Вводим Обязанности")
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type("Varshik")

            cy.log("Кликаем на Создать вакансию")
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons')
                .children()
                .click()

            cy.log("Ждем перезагрузки списка вакансий")
            cy.wait(1000)

            cy.log("Проверяем, что вакансия успешно создана по уникальному имени")
            cy.get('.vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name')
                .filter((_, element) => Cypress.$(element).text().trim() === "Varshik")
                .should("have.length", 1)
                .then(() => {
                    cy.log("Тест успешно пройден")
                })
        })
    })

    // it.only("Failed added a new job", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.viewport(1920, 1080);
    //          cy.visit(data.login_url)

    //             cy.log("Вводим логин")
    //             cy.get('.form-input--text').type("testerEmployer")
    //             cy.log("Вводим пароль")
    //             cy.get('.form-input--password').type("Password1")
    //             cy.log("Нажимаем на кнопку Войти")
    //             cy.get(':nth-child(3) > .button').click()

    //         cy.log("Переходим во вкладку Вакансии")
    //         cy.get(':nth-child(7) > .menu-item__item-name')
    //             .click()

    //         cy.log("Ждем пока загрузится страница")
    //         cy.wait(1000)

    //         cy.log("Кликаем на кнопку Создать вакансию")
    //         cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
    //             .click()

    //         cy.log("Ждем загрузки формы")
    //         cy.wait(1000)

    //         cy.log("Вводим невалидное Название вакансии")
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
    //             .type("Varshik")
    //             .clear()

    //         cy.get(':nth-child(1) > .form-error > span')
    //             .should("contain", "Обязательное поле, максимум 255 символов")

    //         cy.log("Вводим невалидные Требования")
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
    //             .type("Varshik")
    //             .clear()

    //         cy.get(':nth-child(5) > .form-error > span')
    //             .should("contain", "Обязательное поле, максимум 1000 символов")

    //         cy.log("Вводим невалидные Обязанности")
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
    //             .type("Varshik")
    //             .clear()

    //         cy.get(':nth-child(6) > .form-error > span')
    //             .should("contain", "Обязательное поле, максимум 1000 символов")

    //         cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons')
    //             .children()
    //             .should("have.attr", "disabled")
    //     })
    // })
})