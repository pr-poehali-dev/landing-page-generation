import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState<Record<string, string>>({});

  const handleQuizNext = (answer: string) => {
    setQuizData({ ...quizData, [`step${quizStep}`]: answer });
    setQuizStep(quizStep + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-primary">PartnerDept</div>
          <Button variant="outline">Связаться</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              Экономия до 300 000 ₽ в год
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Партнерский отдел<br />под ключ за 60 дней
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Получайте теплые заявки от партнеров без постоянных затрат на маркетинг
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-lg">
              Получить план партнерского отдела за 15 минут
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Готовая схема с партнерами и расчетом лидов в WhatsApp, без звонков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              { icon: 'Clock', text: 'Запускаем партнерский отдел под ключ за 60 дней — результат гарантируем по договору' },
              { icon: 'TrendingDown', text: 'Экономия до 142 000 ₽ в месяц на рекламе — партнеры приводят теплых клиентов бесплатно' },
              { icon: 'Target', text: 'Теплые лиды от проверенных партнеров конвертятся в продажи на 73% лучше холодной рекламы' },
              { icon: 'Zap', text: 'Стабильный поток заявок без зависимости от рекламных аукционов и алгоритмов' },
              { icon: 'FileCheck', text: 'Все регламенты, шаблоны и база партнеров передаем вашей команде для самостоятельной работы' },
              { icon: 'TrendingUp', text: 'Масштабирование на новые регионы без увеличения маркетинг-бюджета' }
            ].map((item, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-secondary" size={24} />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-secondary/30 bg-secondary/5">
            <CardContent className="p-6 text-center">
              <Icon name="Shield" className="inline-block text-secondary mb-2" size={32} />
              <p className="font-semibold text-lg">
                Если не запустим систему за 60 дней — вернем 100% оплаты по договору
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Построим систему, которая приносит теплых клиентов без затрат на рекламу
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ваши партнеры из смежных ниш будут сами приводить вам прогретых и готовых к покупке клиентов, уставших от холодной рекламы.
              </p>
              <ul className="space-y-4">
                {[
                  'Стабильный поток теплых заявок, который не зависит от рекламных аукционов и роста цен на клики',
                  'Высокая конверсия в продажу за счет лидов от доверенных партнеров, а не случайных людей из интернета',
                  'Создадим партнерский отдел «под ключ» за 60 дней — от поиска партнеров до найма и обучения менеджера',
                  'Передаем готовую систему с регламентами для самостоятельного управления'
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Выстраиваем систему в 7 шагов с гарантией результата по договору
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Полностью погружаемся в ваш бизнес, чтобы создать автономный канал лидов, который останется с вами навсегда.
              </p>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Анализируем нишу и ваш продукт', desc: 'Находим десятки смежных компаний, чьи клиенты уже сейчас готовы покупать у вас' },
                  { num: '02', title: 'Готовим офферы и скрипты', desc: 'Разрабатываем коммерческие предложения, которые убеждают партнеров работать именно с вами' },
                  { num: '03', title: 'Нанимаем и запускаем менеджера', desc: 'Находим, обучаем и контролируем сотрудника, который будет вести всю работу с партнерами' },
                  { num: '04', title: 'Передаем готовую систему', desc: 'Вы получаете работающий отдел с регламентами и шаблонами для самостоятельного управления' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-5xl font-bold text-secondary/20">{step.num}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" id="quiz">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Узнайте потенциал партнерских лидов в вашей нише за 2 минуты
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответьте на 3 вопроса и получите персональный расчет количества лидов и экономии на рекламе
            </p>
          </div>

          <Card className="p-8">
            {quizStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Шаг 1: Сколько лидов получаете сейчас в месяц?</h3>
                  <RadioGroup onValueChange={handleQuizNext}>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="0-20" id="r1" />
                      <Label htmlFor="r1" className="cursor-pointer flex-1">До 20 лидов</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="21-50" id="r2" />
                      <Label htmlFor="r2" className="cursor-pointer flex-1">21-50 лидов</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="51-100" id="r3" />
                      <Label htmlFor="r3" className="cursor-pointer flex-1">51-100 лидов</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="100+" id="r4" />
                      <Label htmlFor="r4" className="cursor-pointer flex-1">Более 100 лидов</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Шаг 2: Сколько тратите на рекламу в месяц?</h3>
                  <RadioGroup onValueChange={handleQuizNext}>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="0-50k" id="b1" />
                      <Label htmlFor="b1" className="cursor-pointer flex-1">До 50 000 рублей</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="50-150k" id="b2" />
                      <Label htmlFor="b2" className="cursor-pointer flex-1">50-150 тысяч рублей</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="150-300k" id="b3" />
                      <Label htmlFor="b3" className="cursor-pointer flex-1">150-300 тысяч рублей</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="300k+" id="b4" />
                      <Label htmlFor="b4" className="cursor-pointer flex-1">Более 300 тысяч рублей</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Шаг 3: Куда отправить расчет?</h3>
                  <RadioGroup onValueChange={(value) => setQuizData({ ...quizData, messenger: value })}>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="whatsapp" id="m1" />
                      <Label htmlFor="m1" className="cursor-pointer flex-1">WhatsApp</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="telegram" id="m2" />
                      <Label htmlFor="m2" className="cursor-pointer flex-1">Telegram</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-6">
                    <Label htmlFor="phone" className="text-base mb-2 block">Телефон:</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" className="text-lg p-6" />
                  </div>
                  <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-6 text-lg">
                    Получить расчет и готовые шаблоны
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Пришлем персональный расчет в течение часа. Никаких звонков без вашего согласия.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наши клиенты получают стабильный поток лидов от партнеров
            </h2>
            <p className="text-lg text-muted-foreground">
              Реальные результаты компаний, которые построили партнерские отделы с нашей помощью
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '+62 теплых лида в первый месяц без рекламы',
                metric: '44%',
                metricLabel: 'конверсия',
                was: 'Компания тратила более 100 000 ₽ в месяц на рекламу, но получала только холодные заявки',
                became: 'В первый месяц получили 62 целевых заявки от партнеров. Бюджет на маркетинг обнулили',
                quote: 'Первый месяц без затрат на рекламу и из 62 заявок половина сразу закрылись в продажи'
              },
              {
                title: 'ROI 750% за 4 месяца для B2B-компании',
                metric: '2.25M₽',
                metricLabel: 'контрактов',
                was: 'Интегратор CRM-систем получал мало лидов с высоким чеком. Холодные звонки давали низкую конверсию',
                became: 'За 4 месяца от партнёров пришло 12 крупных клиентов. При затратах 300 000 ₽ заключили контракты на 2 250 000 ₽',
                quote: 'Партнёры приводят уже «подогретых» клиентов. Цикл сделки сократился почти вдвое'
              },
              {
                title: 'Расширение на 4 новых города за 2 месяца',
                metric: '15-18',
                metricLabel: 'заявок/город',
                was: 'Региональная клининговая компания работала только в своем городе',
                became: 'За 60 дней запустили партнерские отделы в Воронеже, Липецке, Курске и Белгороде',
                quote: 'Теперь у нас работающая модель расширения. Планируем открыть еще 6 городов'
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-secondary mb-2">{caseItem.metric}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{caseItem.metricLabel}</div>
                  </div>
                  <h3 className="font-bold text-lg mb-4">{caseItem.title}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground"><span className="font-semibold">Было:</span> {caseItem.was}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground"><span className="font-semibold">Стало:</span> {caseItem.became}</p>
                    </div>
                    <Separator />
                    <div className="bg-muted/50 p-4 rounded-lg italic">
                      "{caseItem.quote}"
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Выберите формат роста без рекламных бюджетов
            </h2>
            <p className="text-lg text-muted-foreground">
              Инвестируйте один раз в систему, которая годами будет приносить теплые заявки от партнеров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'СТРАТЕГИЯ',
                price: '49 000 ₽',
                description: 'Для оценки потенциала партнерского канала',
                features: [
                  { text: 'Анализ вашего продукта и ЦА', included: true },
                  { text: 'Карта потенциальных ниш-партнеров (до 10 направлений)', included: true },
                  { text: 'Прогноз по объему заявок от партнеров', included: true },
                  { text: 'Пошаговый план запуска отдела', included: true },
                  { text: 'Найм и обучение менеджера', included: false },
                  { text: 'Запуск и передача отдела', included: false }
                ],
                cta: 'Получить стратегию',
                popular: false
              },
              {
                name: 'ПОД КЛЮЧ',
                price: '300 000 ₽',
                priceNote: 'за 2 месяца',
                description: 'Для построения системного канала теплых заявок',
                features: [
                  { text: 'Всё из тарифа «Стратегия»', included: true },
                  { text: 'Разработка офферов для партнеров', included: true },
                  { text: 'Найм и обучение менеджера по работе с партнерами', included: true },
                  { text: 'Запуск работы отдела и первые заявки', included: true },
                  { text: 'Передача всех регламентов и шаблонов', included: true },
                  { text: '2 консультации после запуска', included: true }
                ],
                cta: 'Построить отдел',
                popular: true
              },
              {
                name: 'МАСШТАБ',
                price: 'Индивидуально',
                description: 'Для выхода в новые регионы или запуска новых продуктов',
                features: [
                  { text: 'Всё из тарифа «Под ключ»', included: true },
                  { text: 'Адаптация стратегии под новые рынки/регионы', included: true },
                  { text: 'Построение сети партнеров в нескольких городах', included: true },
                  { text: 'Создание команды менеджеров для экспансии', included: true },
                  { text: 'Ежемесячное стратегическое сопровождение', included: true }
                ],
                cta: 'Обсудить проект',
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-secondary border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-primary">🔥 Рекомендуем</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-secondary mb-1">{plan.price}</div>
                    {plan.priceNote && <div className="text-sm text-muted-foreground">{plan.priceNote}</div>}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        {feature.included ? (
                          <Icon name="Check" className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                        ) : (
                          <Icon name="X" className="text-muted-foreground/40 flex-shrink-0 mt-0.5" size={18} />
                        )}
                        <span className={feature.included ? '' : 'text-muted-foreground/60'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-secondary hover:bg-secondary/90 text-primary' : 'bg-primary hover:bg-primary/90'}`}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-secondary/5 border-secondary/30">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold">
                Сэкономьте 30 000 ₽ — скидка 10% при заключении договора до конца месяца
              </p>
              <p className="text-muted-foreground mt-2">Гарантия запуска за 60 дней по договору</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Создаем ваш отдел за 60 дней в 7 четких этапов
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { day: '5 дней', title: 'Глубокое погружение в бизнес', subtitle: 'Находим точки роста и идеальных партнёров для вас', desc: 'Проводим стратегическую сессию, анализируем смежные ниши и составляем карту потенциальных партнёров' },
              { day: '7 дней', title: 'Разработка стратегии и офферов', subtitle: 'Создаём предложения, от которых партнёры не смогут отказаться', desc: 'Готовим персональные коммерческие предложения для каждого сегмента партнёров' },
              { day: '10 дней', title: 'Поиск и подбор партнёров', subtitle: 'Формируем базу 50+ компаний для сотрудничества', desc: 'Анализируем рынок, находим смежные компании и проверяем их на соответствие критериям' },
              { day: '14 дней', title: 'Найм менеджера', subtitle: 'Нанимаем и обучаем менеджера для работы с партнёрами', desc: 'Наши HR-специалисты находят, собеседуют и нанимают менеджера, обучают по методикам' },
              { day: '14 дней', title: 'Запуск и отладка системы', subtitle: 'Контролируем старт и добиваемся первых результатов', desc: 'Под руководством проджект-менеджера запускаем систему, отслеживаем метрики' },
              { day: '7 дней', title: 'Тестирование и оптимизация', subtitle: 'Анализируем эффективность и улучшаем процессы', desc: 'Докручиваем тексты КП, корректируем работу менеджера, улучшаем скрипты' },
              { day: '3 дня', title: 'Передача системы', subtitle: 'Ваш автономный источник тёплых клиентов готов', desc: 'Передаём все регламенты, шаблоны и инструкции. Система работает без нашего участия' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary border-2 border-secondary/30">
                    {idx + 1}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{step.day}</Badge>
                      <h3 className="font-bold text-xl">{step.title}</h3>
                    </div>
                    <p className="font-semibold text-muted-foreground mb-2">{step.subtitle}</p>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Card className="mt-12 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Icon name="Award" className="inline-block mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Результат через 60 дней</h3>
              <p className="text-lg opacity-90">
                У вас работает устойчивый партнерский отдел, приносящий стабильный поток теплых лидов без затрат на рекламу
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Ваши гарантии результата, закрепленные в договоре
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы уверены в своей системе, поэтому все обязательства и сроки фиксируем юридически
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Clock', title: 'Запуск в срок', desc: 'Получите работающий партнерский отдел точно через 60 дней или вернем 100% предоплаты. В договоре прописаны штрафы 5% за каждый день просрочки' },
              { icon: 'Users', title: 'Минимум 15 активных партнеров', desc: 'Вы получите минимум 15 активных партнеров в вашей базе к концу проекта. Если партнеров будет меньше — доплачиваем разницу' },
              { icon: 'UserCheck', title: 'Качество менеджера', desc: 'Вы получите проверенного менеджера с опытом партнерских продаж от 2 лет. Если не подойдет — найдем замену за наш счет' },
              { icon: 'FileCheck2', title: 'Работающие регламенты', desc: 'Вы получите 12 готовых шаблонов и инструкций. Если документы потребуют доработки — дорабатываем бесплатно' },
              { icon: 'Headphones', title: 'Поддержка после сдачи', desc: 'Вы получите 2 персональные консультации в течение месяца после передачи проекта. Отвечаем на вопросы в течение 24 часов' },
              { icon: 'TrendingDown', title: 'Снижение затрат на маркетинг', desc: 'После единоразового вложения ваши затраты на привлечение клиентов могут снизиться до 0 руб. в месяц' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Команда, которая построит вам независимый канал привлечения клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              За 60 дней создаем систему, которая приносит теплые заявки от партнеров без постоянных затрат на рекламу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Михаил Андреев', role: 'Основатель, стратег', stats: ['47 партнерских отделов запущено за 24 месяца', '150+ типов партнерских ниш проанализировано', '12 лет опыта в построении отделов продаж'] },
              { name: 'Анна Белова', role: 'Руководитель проектов', stats: ['Запускает отдел в среднем за 58 дней', '1200+ потенциальных партнеров проанализировано', '40+ шаблонов с конверсией 30%+'] },
              { name: 'Дмитрий Козлов', role: 'HR-специалист', stats: ['Находит менеджера за 21 день', '89% менеджеров работают более 6 месяцев', '9 из 10 успешно проходят испытательный срок'] }
            ].map((member, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 mb-4 mx-auto flex items-center justify-center">
                    <Icon name="User" className="text-secondary" size={40} />
                  </div>
                  <h3 className="font-bold text-xl text-center mb-1">{member.name}</h3>
                  <p className="text-secondary text-center font-medium mb-4">{member.role}</p>
                  <ul className="space-y-2 text-sm">
                    {member.stats.map((stat, sidx) => (
                      <li key={sidx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-muted-foreground">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/5 border-secondary/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">35+</div>
                  <p className="text-muted-foreground">лет суммарного опыта</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-muted-foreground">проектов сдано в срок</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                  <p className="text-muted-foreground">готовых регламентов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Узнайте, как получать стабильный поток теплых заявок от партнеров
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответим в WhatsApp или Telegram и покажем, как выстроить готовый партнерский отдел за 60 дней. Без назойливых звонков и спама.
            </p>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="final-phone" className="text-base mb-2 block">Телефон</Label>
                <Input id="final-phone" placeholder="+7 (___) ___-__-__" className="text-lg p-6" />
                <p className="text-sm text-muted-foreground mt-2">Можно вводить в любом формате (+7, 8, 9...)</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm cursor-pointer">
                  Согласен с политикой конфиденциальности
                </Label>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg">
                ПОЛУЧИТЬ ПЛАН ЗАПУСКА
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Напишем в мессенджер в течение 30 минут, чтобы уточнить детали по вашему бизнесу и подготовить персональный план. 
                Данные полностью конфиденциальны. Не звоним без предупреждения и не шлем спам.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">PartnerDept</div>
            <p className="text-primary-foreground/80 mb-6">
              Партнерский отдел под ключ за 60 дней
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Услуги</a>
              <a href="#" className="hover:text-secondary transition-colors">Кейсы</a>
              <a href="#" className="hover:text-secondary transition-colors">Гарантии</a>
              <a href="#" className="hover:text-secondary transition-colors">Контакты</a>
            </div>
            <Separator className="my-8 bg-primary-foreground/20" />
            <p className="text-sm text-primary-foreground/60">
              © 2024 PartnerDept. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
