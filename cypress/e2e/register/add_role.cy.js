describe("Cypress tests", () => {
    it("Correct data when choosing the student role", () => {
        cy.fixture("example").then((data) => {
            cy.visit(data.login_url)

            cy.log("Вводим логин")
            cy.get('.form-input--text').type("Smval")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Smval1801")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Ждем ответа")
            cy.wait(600)

            cy.log("Нажимаем на кнопку Пройти верификацию")
            cy.get('.message-student > .button')
                .click()

            cy.log("Ждем пока пройдет анимация открытия модального окна")
            cy.wait(500)

            cy.log("Выбираем университет вбивая значения ТТИТ")
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
                .type("ТТИТ")

            cy.log("Ждем пока загрузиться список совпадений")
            cy.wait(1000)

            cy.log("Кликаем на первое совпадение в списке")
            cy.get(".search-input__wrapper-result")
                .children()
                .eq(0)
                .click()

            cy.log("Вбиваем название специальности")
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
                .type("27.02.04 Автоматические системы управления")

            cy.log("Ждем пока загрузиться список совпадений")
            cy.wait(1000)

            cy.log("Кликаем на первое совпадение в списке")
            cy.get(".search-input__wrapper-result")
                .children()
                .eq(0)
                .click()

            cy.log("Указываем квалификацию")
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
                .type("Бакалавр")

            cy.log("Выбираем курс")
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
                .click()

            cy.log("Вписываем Год начала обучения")
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
                .type("2022")

            cy.log("Вписываем Год конца обучения")
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
                .type("2025")

            cy.log("Ждем пока загориться кнопка Создать заявку")
            cy.wait(500)

            cy.log("Кликаем на кнопку Создать заявку")
            cy.get('.desktop-modal__content > .student-form')
                .find(".button.button__background-color-light-blue.button__size-large.button__color-white.student-form__button")
                .click()

            cy.log("Выбираем в табах пункт Заявки")
            cy.get(':nth-child(3) > .menu-item__item-name')
                .click()

            cy.log("Ждем пока загрузятся все заявки")
            cy.wait(3000)

            cy.log("Проверям, что заявка успешно создана")
            cy.get(':nth-child(1) > .shared-list-item > .shared-list-item__content > .shared-list-item__text > .shared-list-item__title > span')
                .should("contain", "Верификация аккаунта с прикреплением к ТТИТ по адресу ")
        })
    })

    // it.only("Incorrect data when selecting the student role", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.visit(data.login_url)

    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("ADARNUL")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("QWEasd123!")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()

    //         cy.log("Ждем ответа")
    //         cy.wait(600)

    //         cy.log("Сравниваем ссылки, чтобы убедиться в успешной авторизации")
    //         cy.url().should("include", "/account/main")
            

    //         cy.log("Нажимаем на кнопку Пройти верификацию")
    //         cy.get('.message-student > .button')
    //             .click()

    //         cy.log("Ждем пока пройдет анимация открытия модального окна")
    //         cy.wait(500)

    //         cy.log("Выбираем университет не корректное значение")
    //         cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
    //             .type("123fsdf")

    //         cy.log("Ждем пока загрузиться список совпадений")
    //         cy.wait(1000)

    //         cy.log("Кликаем на первое совпадение в списке")
    //         cy.get(".search-input__wrapper-result")
    //             .children()
    //             .eq(0)
    //             .should("contain", "Совпадений не найдено")

    //         cy.log("После не корректного значения ОУ поле должно быть заблокировано")
    //         cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
    //             .should("have.attr", "disabled")

    //         cy.log("Указываем квалификацию")
    //         cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
    //             .type("123fsdf")

    //         cy.log("Выбираем курс")
    //         cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
    //             .click()

    //         cy.log("Вписываем Год начала обучения")
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
    //             .type("222")

    //         cy.get(':nth-child(1) > .student-form__error > .form-error > span')
    //             .should("contain", "Введите корректное значение")

    //         cy.log("Вписываем Год конца обучения")
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
    //             .type("223")

    //         cy.get(':nth-child(2) > .student-form__error > .form-error > span')
    //             .should("contain", "Введите корректное значение")

    //         cy.log("Ждем пока загориться кнопка Создать заявку")
    //         cy.wait(500)

    //         cy.log("Кликаем на кнопку Создать заявку")
    //         cy.get('.desktop-modal__content > .student-form')
    //             .find(".button.button__background-color-light-blue.button__size-large.button__color-white.student-form__button")
    //             .should("have.attr", "disabled")
    //     })
    // })
})