+++
authors = ["admin"]
categories = ["тестирование","онлайн"]
date = "2020-11-30T05:10:51+03:00"
draft = false
tags = ["автоматизация","cucumber","selenium","java","BDD"]
title = "Разбираемся в Запоздалой Популярности Cucumber и BDD подхода"

+++
## Знакомство с BDD

{{< figure src="header.png" link="https://cucumber.io/" title="BDD - мнения за и против, best practicies и anti patterns." caption="*Особенности процесса и полезные инструменты позволяющие команде сосредоточиться на реальных примерах использования системы с точки зрения конечного пользователя.*" alt="Behaviour Driven Development (BDD) - командное обсуждение существенных детелей проекта, позволяющее добиться однозначного понимания будущих изменений у всех членов команды." class="small" >}}

О фреймворке [Cucumber](https://cucumber.io/), я узнал достаточно давно, примерно 7 лет назад, когда пытался овладеть технологией Ruby on Rails. RoR подразумевает написание большого количества тестов и имеет очень развитой инструментарий для различных видов тестирования. Собственно, абрревиатуры BDD & TDD и какие процессы за ними кроются, я тоже узнал изучая RoR.

При первом знакомстве, я не смог оценить по достуинству возможности предлагаемыми BDD & TDD методологиями и начать их применять на практике. Сразу стоит оговориться, что до сих пор споры на тему применимости данных подходов и реального профита для команды, не утихли и продожаются среди сторонников и противников в среде тестировщиков-автоматизаторов.

В следующий раз я столкнулся с синтаксисом Given, When, Then уже при написании тестов на REST API используя Java и библиотеку [Rest-Assured](http://rest-assured.io/). Тесты выглядели примерно так и кроме  синтаксиса от BDD не заимствовали ничего лишнего.

{{% gist snayp c41875f9b2aa729ee29b32e13cc5205c %}}

[Выложил больше примеров с описанием, что делают тесты](https://automated-testing.info/t/code-recipe-primer-ispolzovaniya-rest-assured-dlya-avtomatizaczii-restfull-api/24599?u=snayp)

Затем, при автоматизации Websocket API пришлось использовать JavaScript инструменты - [Jasmine](https://jasmine.github.io/) + [Karma](https://karma-runner.github.io/latest/index.html). Jasmine - BDD фреймворк, который "из коробки" имеет все необходимое для тестировани JavaScript кода. Не зависит ни каких сторонних npm модулей, потому очень шустрый. В моем случае, он был очень удобен по двум причинам:

- для тестирования ассинхронного WebSocket API JavaScript оказался гораздо приспособленней, чем Java;
- парсить JSON объекты JavaScript'ом, намного легче, чем возиться с Java объектами;

Возможности BDD, снова никакой роли не играли. Тут хочу мельком сказать про свое первое знакомство с магией Promise, Поскольку тесты подразумевали несколько последовательных вызовов API, где каждый последующий вызов использовал результаты предыдущего, то очень быстро код стал абсолютно не читаемым из-за огромного числа вложенных callback'ов.

{{< highlight javascript >}}
wsApi.sendMessage("service", "linktourist", linkQuery, function (data) {
    wsApi.sendMessage("service", "unlinktourist", linkQuery, function (data) {
        wsApi.sendMessage("person", "delete", {id: personId}, function (data) {
            wsApi.sendMessage("service", "delete", {service: serviceId}, function (data) {
                wsApi.sendMessage("order", "delete", {id: orderId}, function (data) {
                    done();
                });
            });
        });
    });
});
{{< /highlight >}}

Хоть IntelliJIDEA и мощнейший редактор текста, но искать, где же пропущена одна скобка или точка с зяпятой, было просто не выносимо. Тогда я первый раз узнал про Linter'ы, это тоже отдельная тема, которой будет посвящен пост в будущем. Сокральный смысл Promise я тогда не понял, а вот возможность отрефакторить код, чтобы он был выровнен по левому краю, оценил сразу!

{{< highlight javascript >}}
it("dry cleaning", function(done) {
        var inDate = new Date().getTime() + 60 * 60 * 24 * 40 * 1000;
        var outDate = new Date().getTime() + 60 * 60 * 24 * 40 * 1000;
        var searchQuery = {
            place: {
                in: "HO000288TR"
            },
            date: {
                in: inDate,
                out: outDate,
                intime: 43200000, // 12:00
                outtime: 50400000 // 14:00
            },
            families: [
                {
                    adults: 2
                }
            ]
        };
        var paginationQuery = function(searchQuery) {
            var context = {};
            wsApi.sendMessage2("service", "dayuse", searchQuery).then(function(data) {
                expect(data.search).not.toBeUndefined();
                expect(data.done).not.toBeNull();
                if (!data.done) {
                    setTimeout(function() {
                        paginationQuery(searchQuery);
                    }, 1000);
                } else {
                    expect(data.search).toBeDefined();
                    expect(data.search.length).toBeGreaterThan(0, "Нет результатов поиска");
                    expect(data.search[0].items).toBeDefined("Нет результатов поиска");
                    expect(data.search[0].items.length).toBeGreaterThan(0);
                    var room = data.search[0].items[0][0];
                    expect(room.meal).toBeDefined();
                    expect(room.type).toBeDefined();
                    expect(room.outtime).toBe(searchQuery.date.outtime, "Не сходится время выезда");
                    expect(room.commerce.currency).toBe(978);
                    expect(room.commerce.offer).not.toBeNull();
                    context.offer = room.commerce.offer;
                    return wsApi.sendMessage2("person", "create", context.createPersonQuery);
                }
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.id).not.toBeNull();
                context.personId = data.id;
                return wsApi.sendMessage2("order", "create");
            }).then(function(data) {
                context.orderId = data.id;
                var createServiceQuery = {
                    type: "dayuse",
                    orderid: context.orderId,
                    items: [{
                        offer: context.offer
                    }]
                };
                return wsApi.sendMessage2("service", "create", createServiceQuery);
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.id).not.toBeNull();
                context.serviceId = data.id;
                context.linkQuery = {
                    "service": context.serviceId,
                    "tourist": context.personId,
                    "item" : 0
                };
                return wsApi.sendMessage2("service", "linktourist", context.linkQuery);
            }).then(function() {
                return wsApi.sendMessage2("autocomplete", "clothes", { search:"", hotel:searchQuery.place.in });
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.length).toBeGreaterThan(0);
                var cloth = data[0];
                expect(cloth.id).not.toBeNull();
                expect(cloth.name).not.toBeNull();
                context.clothId = cloth.id;
                return wsApi.sendMessage2("extras", "dry", { cloth:context.clothId });
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.actions).not.toBeNull();
                expect(data.actions.length).toBeGreaterThan(0);
                var action = data.actions[0];
                expect(action.id).not.toBeNull();
                context.actionId = action.id;
                expect(action.name).not.toBeNull();
                expect(action.commerce).not.toBeNull();
                expect(action.commerce.original).not.toBeNull();
                expect(action.commerce.offer).not.toBeNull();
                context.extraOffer = action.commerce.offer;
                var updateExtras = {
                    service: context.serviceId,
                    extras: [
                        {
                            index: 0,
                            person: context.personId,
                            amount: 1,
                            offer: context.extraOffer,
                            type: "DRY",
                            item: {
                                id: context.clothId
                            },
                            action: {
                                id: context.actionId
                            }
                        }
                    ]
                }
                return wsApi.sendMessage2("extras", "update", updateExtras);
            }).then(function() {
                return wsApi.sendMessage2("order", "retrieve", { id:context.orderId });
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.date).not.toBeNull();
                expect(data.commerce.payment).not.toBeNull();
                expect(data.commerce.currency).not.toBeNull();
                expect(data.services).not.toBeNull();
                expect(data.services.length).toBeGreaterThan(0);
                expect(data.services.length).toBe(1);
                var service = data.services[0];
                expect(service.type).not.toBeNull();
                expect(service.type).toBe("dayuse");
                expect(service.persons.length).toBe(1);
                var person = service.persons[0];
                expect(person).not.toBeNull();
                expect(person.id).not.toBeNull();
                expect(person.name.last).not.toBeNull();
                expect(person.name.last).toBe(context.createPersonQuery.name.last);
                expect(service.commerce.currency).toBe(978);
                expect(service.commerce.tl).not.toBeNull();
                expect(service.extraCommerce.payment).not.toBeNull();
                expect(service.extraCommerce.original).not.toBeNull();
                expect(service.extraCommerce.currency).not.toBeNull();
                expect(service.extraCommerce.currency).toBe(978);

                return wsApi.sendMessage2("extras", "retrieve", { service:context.serviceId, type:"DRY" });
            }).then(function(data) {
                expect(data).not.toBeNull();
                expect(data.extras).not.toBeNull();
                expect(data.extras.length).toBeGreaterThan(0);
                expect(data.extras.length).toBe(1);
                
                var extra = data.extras[0];
                expect(extra.type).not.toBeNull();
                expect(extra.type).toBe("DRY");
                expect(extra.index).not.toBeNull();
                expect(extra.index).toBe(0);
                expect(extra.commerce.offer).toBe(context.extraOffer);
                expect(extra.commerce.original).not.toBeNull();
                expect(extra.commerce.payment).not.toBeNull();
                expect(extra.commerce.currency).not.toBeNull();
                expect(extra.commerce.currency).toBe(978);

                done();
            });
        };
        
        paginationQuery(searchQuery);
    }, 20000);
});
{{< /highlight >}}

Итого, за первые 5 лет моего знакомства с термином Behaviour Driven Development (BDD), так и не возникло насущной необходимости, благодаря который я бы смог подробнее разобраться, зачем же еще что то новое придумали и смог бы применить новый подход в своей работе.

В следующей части будет рассказ, о том, как же я все таки осознал, как и зачем можно использовать BDD и даже нашел задачу, где предложенные методы, могли реально упростить разработку, а точнее, что описание конкретного кейса на естественном языке, действительно помогает понять смысл разрабатываемого функционала всем членам команды и не тратить ресуры на реализацию сомнительнего функционала.
