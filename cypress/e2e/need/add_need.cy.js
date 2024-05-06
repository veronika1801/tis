describe("Cypress test", () => {
    // it("Successfully added need", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.viewport(1920, 1080);

    //         cy.visit(data.login_url)
    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("testerEmployer")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("Password1")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()
    //         cy.log("Переходим во вкладку Потребности")
    //         cy.get(':nth-child(6) > .menu-item__item-name')
    //             .click()

    //         cy.log("Ждем загрузки страницы")
    //         cy.wait(1000)

    //         cy.log("Кликаем на Создать потребность")
    //         cy.get('.needs-block__filters-wrapper > .button')
    //             .click()

    //         cy.log("Ждем пока откроется модальное окно")
    //         cy.wait(500)

    //         cy.log("Указываем Название потребности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
    //             .type("kyrsach")

    //         cy.log("Указываем Обязанности сотрудника")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
    //             .type("kyrsach")

    //         cy.log("Указываем Требования")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                   
    //             .type("kyrsach")

    //         cy.log("Кликаем на Добавить")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
                
    //             .click()

    //         cy.log("Ждем пока обновятся данные на странице")
    //         cy.wait(1000)

    //         cy.log("Находим созданную запись по уникальному имени")
    //         cy.get('.need-item__info-wrapper > .need-header > .need-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "kyrsach")
    //     })
    // })

    it.only("Failed added need", () => {
        cy.viewport(1920, 1080);

        cy.fixture("example").then((data) => {

            cy.visit(data.login_url)
            cy.log("Вводим логин")
            cy.get('.form-input--text').type("testerEmployer")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Password1")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Переходим во вкладку Потребности")
            cy.get(':nth-child(6) > .menu-item__item-name')
                .click()

            cy.log("Ждем загрузки страницы")
            cy.wait(1000)

            cy.log("Кликаем на Создать потребность")
            cy.get('.needs-block__filters-wrapper > .button')
                .click()

            cy.log("Ждем пока откроется модальное окно")
            cy.wait(500)

            cy.log("Указываем невалидное Название потребности")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type("kyrsach")
                .clear()

            cy.get(':nth-child(1) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 255 символов")

            cy.log("Указываем невалидные Обязанности сотрудника")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .type("kyrsach")
                .clear()

            cy.get(':nth-child(3) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.log("Указываем невалидные Требования")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type("kyrsach")
                .clear()

            cy.get(':nth-child(4) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.log("Проверяем, что кнопка заблокирована")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons')
                .find(".button.button__background-color-green.button__size-medium.button__color-white.buttons__button")
                .should("have.attr", "disabled")
        })
    })
})