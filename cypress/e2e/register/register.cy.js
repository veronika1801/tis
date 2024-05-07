describe("Cypress tests", () => {
    // it("Successful Registration Test", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.log("Переход на страницу регистрации")
    //         cy.visit(data.register_url)

    //         cy.log("Ввод логина")
    //         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.register_login)

    //         cy.log("Ввод почты")
    //         cy.get('.form-input--email')
    //             .type(data.register_email)

    //         cy.log("Ввод пароля")
    //         cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
    //             .type(data.register_password)

    //         cy.log("Ввод подтверждения пароля")
    //         cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
    //             .type(data.register_password)

    //         cy.wait(300)

    //         cy.log("Кликаем на кнопку 'Далее'")
    //         cy.get(':nth-child(4) > .button')
    //             .click()

    //         cy.wait(600)

    //         cy.log("Ввод имени")
    //         cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type(data.first_name)

    //         cy.log("Ввод фамилии")
    //         cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
    //             .type(data.surname)

    //         cy.wait(300)

    //         cy.log("Кликаем на кнопку 'Создать аккаунт'")
    //         cy.get('.form__buttons > :nth-child(3)')
    //             .click()

    //         cy.wait(600)

    //         cy.get('.page-nav__text-message')
    //             .should("contain", "Подтвердите свой аккаунт по почте.")
    //             .then(() => {
    //                 cy.log("Тест успешно пройден")
    //             })
    //     })
    // })

    it.only("Error Message Display Test", () => {
        cy.fixture("example").then((data) => {
            cy.log("Переход на страницу регистрации")
            cy.visit(data.register_url)

            cy.log("Ввод логина")
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.none_existent_register_login)

            cy.log("Ввод почты")
            cy.get('.form-input--email')
                .type(data.none_existent_register_email)

            cy.log("Ввод пароля")
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.none_existent_register_password)

            cy.log("Ввод подтверждения пароля")
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.none_existent_register_password)

            cy.get(':nth-child(2) > .form-error > span')
                .should("contain", "Обязательное поле, некорректная почта")

            cy.get(':nth-child(3) > .form-error > span')
                .should("contain", "Обязательное поле, мин 6 символов, должен содержать буквы в верхнем и нижнем регистре, минимум 1 цифру, не содержать пробелы")
        })
    })
})