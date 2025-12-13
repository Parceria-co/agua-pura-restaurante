const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export const aguaPura = {
    name: "Água Pura",
    themeColor: "#000",
    theme: {
        white: true,
        custom: ""
    },
    color: {
        navbar: "#000",
    },
    logo: `${baseURL}agua-pura/AguaPura.logo(1).png`,
    cnpj: {
        value: 0,
        formatted: "",
    },
    email: "Giovannicastella68@gmail.com",
    phone: "11 97466-4275",
    texts: [
        "O Aguapura Bar e Restaurante é um ponto marcante da Vila Esperança, conhecido pela decoração rica em detalhes e pela atmosfera exótica que mistura Brasil, Índia, Tailândia, Indonésia e Ilhas Polinésias. Cada ambiente convida o visitante a uma imersão sensorial, equilibrando natureza, estilo e conforto em pleno coração de São Paulo.",

        "Seu clima vibrante e acolhedor combina iluminação quente, elementos naturais, texturas artesanais e o som ambiente que remete às paisagens de água e terra das culturas que inspiram a casa. A energia leve, somada ao atendimento próximo, cria o cenário ideal para encontros, conversas e boas experiências.",

        "O Aguapura traz personalidade própria: simplicidade bem executada, detalhes artísticos e referências ao herói MAUI, símbolo da mitologia polinésia. A temática aquática e o toque urbano se fundem de forma elegante, tornando o espaço perfeito para aniversários, celebrações, jantares especiais ou aquele descanso merecido após um dia intenso.",

        "Cada visita revela algo novo — seja pela decoração exótica, pelo cardápio sofisticado, pelo aroma das especiarias ou pela proposta de conectar pessoas através de boa comida, bons drinks e um ambiente pensado com cuidado.",

        "Com presença forte na região, o Aguapura se tornou um ponto natural de encontro. A essência da casa está no equilíbrio: água, natureza, cultura e sabor. Aqui, cada detalhe foi planejado para proporcionar uma experiência única, combinando autenticidade, aconchego e um toque de aventura.",

        "Misturando alegria, cultura e o espírito vibrante das tradições polinésias, o Aguapura conquistou moradores e visitantes. É o tipo de lugar que transforma qualquer momento — de um almoço descontraído a uma noite marcante — em uma lembrança especial."
    ],
    history: [
        {
            title: "Aguapura Hoje: Tradição, Cultura e Experiência Exótica na Vila Esperança",
            year: "Atual",
            image: { 
                src: `${baseURL}agua-pura/highlight_1.jpg`, 
                alt: "Aguapura Atualmente" 
            },
            text: `
                Hoje, o Aguapura é uma referência na Vila Esperança, em São Paulo, reunindo a força das 
                culturas brasileiras, asiáticas e polinésias em um único ambiente. A casa mantém um clima leve, 
                acolhedor e repleto de elementos que remetem à natureza e ao simbolismo da água — essência do 
                herói MAUI, inspiração da marca.
                
                Com um cardápio que agrada desde os amantes de frutos do mar e carnes nobres até quem busca 
                sushis, petiscos e pratos contemporâneos, o Aguapura continua evoluindo sem perder sua alma.
                A proposta é simples e ao mesmo tempo profunda: oferecer boa comida, boa energia e uma 
                experiência marcante em cada visita.
            `
        }
    ],
    units: [           
        {
            name: "Água Pura",
            value: "agua-pura",
            hourly: "QUA A DOM - 18h às 02h",
            phone: "11 97466-4275",
            email: "Giovannicastella68@gmail.com",
            location: {
                extended: "R. Nilza, 65 - Vila Esperança, São Paulo - SP, 03651-120",
                street: "R. Nilza",
                city: "São Paulo",
                neighborhood: "Vila Esperança",
                state: {
                    abbreviation: "SP",
                    extended: "São Paulo",
                },
                number: "65",
                zipCode: "03651-120",
                linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.999117856705!2d-46.53151643879103!3d-23.523516986642576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e23fc255191%3A0x753ffa79d83746b1!2sAguapura%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1765467198920!5m2!1spt-BR!2sbr"
            },
            info: {
                "saloons": [
                    {
                        image: {src: `${baseURL}agua-pura/inner_1.jpg`, alt: "defaulImage"},
                        title: {saloon: `Salão Principal`, quantity: "48 Pessoas"},
                        text:  `Fazemos eventos de 32 lugares, salão compartilhado com o público do restaurante. \nDisponível na segunda e quarta no almoço e de quinta a sexta no jantar.`
                    },
                    
                    
                ],
                "differences": [
                    {
                        icon: "car",
                        iconText: "Estacionamento Amplo e Seguro"
                    },
                    {
                        icon: "tank",
                        iconText: "Gerador de Energia Próprio"
                    },
                ],
            },
            images: [
                `${baseURL}agua-pura/inner_1.jpg`,
                `${baseURL}agua-pura/inner_2.jpg`,
                `${baseURL}agua-pura/inner_3.jpg`,
                `${baseURL}agua-pura/inner_4.jpg`,
                `${baseURL}agua-pura/inner_5.jpg`,
                `${baseURL}agua-pura/inner_6.jpg`,
                `${baseURL}agua-pura/highlight_1.jpg`,
                `${baseURL}agua-pura/highlight_2.jpg`,
                `${baseURL}agua-pura/highlight_3.jpg`,
                `${baseURL}agua-pura/outter_1.jpg`,
            ]
        },
    ],
    images: [
        `${baseURL}agua-pura/info_1.jpg`,
        `${baseURL}agua-pura/inner_2.jpg`,
        `${baseURL}agua-pura/inner_3.jpg`,
        `${baseURL}agua-pura/inner_4.jpg`,
        `${baseURL}agua-pura/inner_5.jpg`,
        `${baseURL}agua-pura/inner_6.jpg`,
        `${baseURL}agua-pura/inner_7.jpg`,
        `${baseURL}agua-pura/highlight_1.jpg`,
        `${baseURL}agua-pura/highlight_2.jpg`,
        `${baseURL}agua-pura/highlight_3.jpg`,
        `${baseURL}agua-pura/highlight_4.jpg`,
        `${baseURL}agua-pura/highlight_5.jpg`,
        `${baseURL}agua-pura/outter_1.jpg`,            
        `${baseURL}agua-pura/inner_1.jpg`,
    ],
    banners: [
        `${baseURL}agua-pura/inner_3.jpg`,
        `${baseURL}agua-pura/highlight_2.jpg`,
        `${baseURL}agua-pura/inner_4.jpg`,
    ],
    highlights: [
        `${baseURL}agua-pura/highlight_1.jpg`,
        `${baseURL}agua-pura/highlight_2.jpg`,
        `${baseURL}agua-pura/highlight_3.jpg`,
    ],
    cards: [
        `${baseURL}agua-pura/inner_2.jpg`,
    ],
    menuItens: [
        {
            id: 1,
            category: "Entradas",
            itens: [
                {
                    id: 11,
                    name: "Ceviche",
                    image: `${baseURL}agua-pura/food_1.jpg`,
                    description: "San Piter em Cubos, Kani-Kama, Tomate Cereja, Cebola Roxa, Pimentos e Salsinha, Tudo Regado ao Molho Cítrico da Casa e Coberto com Milho Torrado.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 58.00, formatted: "R$ 58,00" }
                },
                {
                    id: 12,
                    name: "Bolinho de Bacalhau Artesanal",
                    image: `${baseURL}agua-pura/food_2.jpg`,
                    description: "Delicados por Fora, Macios por Dentro: Nossa Receita Resgata a Tradição Portuguesa com Bacalhau Nobre, Batatas Selecionadas e um Toque Fresco de Raspas de Limão Siciliano. Servidos com Maionese Verde da Casa e Gomo de Limão para Realçar Cada Mordida. Perfeitos para Abrir o Apetite!",
                    measure: { value: 5, formatted: "5 Unidades" },
                    price: { value: 48.00, formatted: "R$ 48,00" }
                },
                {
                    id: 13,
                    name: "Coxinha Gourmet",
                    image: `${baseURL}agua-pura/food_3.jpg`,
                    description: "Deliciosas Coxinhas de Frango Temperada, Não Vai Nenhum Tipo de Farinha e Nem Batata, Somente Frango",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 46.00, formatted: "R$ 46,00" }
                },
                {
                    id: 14,
                    name: "Dadinho de Tapioca com Provolone",
                    image: `${baseURL}agua-pura/food_4.jpg`,
                    description: "10 Unidades de Uma Experiência Entre o Salgado, o Doce e o Picante. Acompanha Geleia de Pimenta com Frutas Vermelhas",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 40.00, formatted: "R$ 40,00" }
                },
                {
                    id: 15,
                    name: "Burrata ao Pesto",
                    image: `${baseURL}agua-pura/food_5.jpg`,
                    description: "Uma Burrata Delicada, Envolta em um Pesto Fresco e Aromático, Complementada por Tomates Cereja Confitados e um Toque de Ervas Selecionadas. Servida com Pão Italiano, Criando uma Combinação Perfeita Entre Cremosidade, Frescor e Crocância.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 68.00, formatted: "R$ 68,00" }
                },
                {
                    id: 16,
                    name: "Provoleta Napolitana",
                    image: `${baseURL}agua-pura/food_6.jpg`,
                    description: "Tradicional Provolone Redondo, Lentamente Derretido na Chapa, Perfumado com Alecrim Fresco e Coroado com Tomates Cereja Confitados. Servido com Pão Italiano, Proporcionando uma Experiência Rica, Intensa e Irresistivelmente Aromática.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 69.00, formatted: "R$ 69,00" }
                },
                {
                    id: 17,
                    name: "Provolone à Milanesa",
                    image: `${baseURL}agua-pura/food_7.jpg`,
                    description: "Acompanha Molho da Casa.\n Prato Vegetariano",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 59.00, formatted: "R$ 59,00" }
                },
                {
                    id: 18,
                    name: "Tirinhas de Beringela",
                    image: `${baseURL}agua-pura/food_8.jpg`,
                    description: "Empanadas e Fritas. Acompanha Geleia de Pimenta.\n Prato Vegano",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 35.00, formatted: "R$ 35,00" }
                }
            ]
        },
        {
            id: 2,
            category: "Salada",
            itens: [
                {
                    id: 21,
                    name: "Caeser Individual",
                    image: `${baseURL}agua-pura/food_9.png`,
                    description: "Alface Americana Crocante, Tomate Cereja, Filé de Frango em Pedaços, Croutons, Parmesão Ralado E Molho Caeser.",
                    // measure: { value: 4, formatted: "4 unidades" },
                    price: { value: 38.00, formatted: "R$ 38,00" }
                },
            ]
        },
        {
            id: 3,
            category: "Pratos Individuais",
            itens: [
                {
                    id: 31,
                    name: "Salmão Grelhado ao Molho de Maracujá",
                    image: `${baseURL}agua-pura/food_11.jpg`,
                    description: "Acompanha Legumes na Manteiga.",
                    price: { value: 98.00, formatted: "R$ 98,00" }
                },
                {
                    id: 32,
                    name: "Camarão Tropical",
                    image: `${baseURL}agua-pura/food_12.jpeg`,
                    description: "Camarões Frescos Cobertos por um Delicado Molho Branco e Catupiry, Gratinados à Perfeição. Servidos Dentro de uma Casca de Abacaxi, Oferencendo um Toque Tropical, e Acompanhandos de Arroz Branco, Criando uma Experiência Gastronômica Única e Sofisticada.",
                    price: { value: 120.00, formatted: "R$ 120,00" }
                },
            ]
        },
        {
            id: 4,
            category: "Massas",
            itens: [
                {
                    id: 41,
                    name: "Spaguet com Camarões",
                    image: `${baseURL}agua-pura/food_13.jpeg`,
                    description: "Spaguet Italiano Regado no Azeite Trufado Manteiga com Camarões e com um Toque de Salsinha.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 70.00, formatted: "R$ 70,00" }
                },
                {
                    id: 42,
                    name: "Talharim Mediterraneo",
                    image: `${baseURL}agua-pura/food_14.jpeg`,
                    description: "Talharim Italiano Regado no Azeite Trufado e Manteiga Salteados com Mexilhões, Camarões e Aquele Toque Especial de Paprica Defumada e Salsinha.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 72.00, formatted: "R$ 72,00" }
                },
                {
                    id: 43,
                    name: "Fusilli da Nona",
                    image: defaultDish,
                    description: "Massa Artesanal, Feita à Mão com a Técnica Tradicional de Enrolar na Agulha de Crochê, Serivda com um Molho Napolitano Caseiro, Preparado sem Conservantes ou Agrotóxicos. Acompanha Almôndegas Suculentas, Pão Italiano Fresco e Queijo Parmesão Ralado, Criando uma Verdadeira Viagem aos Sabores da Itália.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 69.00, formatted: "R$ 69,00" }
                },
            
            ]
        },
        {
            id: 5,
            category: "Pratos 2 Pessoas",
            itens: [
                {
                    id: 51,
                    name: "Contra à Parmegiana Aperitivo",
                    image: defaultDish,
                    description: "Suculentos Filés de Contra Filé empanados à milanesa, cobertos com um molho artesanal de tomates frescos e finalizados com mussarela derretida e folhas de manjericão fresco. Cortados em aperitivos, são servidos na tábua, para uma experiência de sabor rústica e requintada.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 120.00, formatted: "R$ 120,00" }
                },
                {
                    id: 52,
                    name: "Filé Aperitivo ao Molho de Queijos",
                    image: defaultDish,
                    description: "Acompanha, Cesta de Pães. Vinagrete e Farofa da Casa.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 120.00, formatted: "R$ 120,00" }
                },
                {
                    id: 53,
                    name: "Filé Aperitivo ao Molho de Queijos no Pão Bolinha",
                    image: defaultDish,
                    description: "Filé Aperitivo ao Molho de Queijos no Pão Bolinha",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 140.00, formatted: "R$ 140,00" }
                },
                {
                    id: 54,
                    name: "Escondidinho de Camarão",
                    image: defaultDish,
                    description: "Uma Delicada Camada de Cremoso Purê de Batatas, Recheado com Camarões Frescos e Suculentos, e Finalizado com Mozzarella Derretida e Crocante Batata Palha. Um Prato Reconfortante e Cheio de Sabor, que Une Texturas a Cada Garfada.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 98.00, formatted: "R$ 98,00" }
                },
                {
                    id: 55,
                    name: "Camarão Itamambuca",
                    image: defaultDish,
                    description: "Camarões Frescos Refogados com Álho e Azeite Extravirgem, Servidos Sobre um Cremoso Arroz com Manjericão, Envolto em um Delicado Molho Branco e Gratinado com Mozzarella. Finailzado com Batata Palha Crocante, Criando uma Combinação Sublime de Sabores e Texturas.",
                    // measure: { value: 350, formatted: "350ml" },
                    price: { value: 125.00, formatted: "R$ 125,00" }
                },
            ]
        },
        {
            "id": 6,
            "category": "Rechaud",
            "itens": [
                {
                    "id": 61,
                    "name": "Picanha",
                    "image": defaultDish,
                    "description": "A Deliciosa Picanha Vem Crua para Você Poder Escolher o Melhor Ponto da Carne, Aquele que Melhor Agrada Seu Paladar. Acompanha Cesto de Pães, Molho de Alho da Casa, Vinagrete e Farofa.",
                    options: [
                        { 
                            label: "Picanha",
                            price: {
                                value: 190.00, formatted: "R$ 190,00" 
                            },
                            measure: { value: 700, formatted: "700G" },
                            id: 610
                        },
                        { 
                            label: "Picanha",
                            price: {
                                value: 150.00, formatted: "R$ 150,00" 
                            },
                            measure: { value: 375, formatted: "375G" },
                            id: 611
                        },
                    ],
                },
                {
                    "id": 63,
                    "name": "Picanha com Shimeji",
                    "image": defaultDish,
                    "description": "A deliciosa picanha vem crua para você poder escolher o melhor ponto da carne, aquele que melhor agrada seu paladar. Acompanha cesto de pães, molho de alho da casa, vinagrete e farofa.",
                    "price": { "value": 159.00, "formatted": "R$ 159,00" }
                },
                {
                    "id": 64,
                    "name": "Chapa Mista",
                    "image": defaultDish,
                    "description": "Picanha, calabresa, frango e legumes na manteiga, acompanha cesto de pães, molho de alho da casa, vinagrete e farofa.",
                    "price": { "value": 165.00, "formatted": "R$ 165,00" }
                },
                {
                    "id": 65,
                    "name": "Calabresa na Cachaça",
                    "image": defaultDish,
                    "description": "Calabresa enrolada, cebolas e azeitonas verdes, acompanha cesto de pães, molho de alho da casa, vinagrete e farofa.",
                    "price": { "value": 98.00, "formatted": "R$ 98,00" }
                }
            ]
        },
        {
            "id": 7,
            "category": "Porções",
            "itens": [
                {
                    "id": 71,
                    "name": "Isca no Anzol",
                    "image": defaultDish,
                    "description": "Pedaços de cação empanados e fritos, acompanha molho da casa",
                    "price": { "value": 70.00, "formatted": "R$ 70,00" }
                },
                {
                    "id": 72,
                    "name": "Manjuba Frita",
                    "image": defaultDish,
                    "description": "Anjuba frita crocante, acompanha maionese verde",
                    "price": { "value": 45.00, "formatted": "R$ 45,00" }
                },
                {
                    "id": 73,
                    "name": "Camarão Alho e Óleo",
                    "image": defaultDish,
                    "description": "Camarão Alho e Óleo",
                    "price": { "value": 89.00, "formatted": "R$ 89,00" }
                },
                {
                    "id": 74,
                    "name": "Camarão Crocante",
                    "image": defaultDish,
                    "description": "A sua queridinha, deliciosos camarões envolvidos por uma massa com macarrão ninho, uma porção extremamente crocante, acompanha molho de alho da casa",
                    "price": { "value": 150.00, "formatted": "R$ 150,00" }
                },
                {
                    "id": 75,
                    "name": "Shimeji na Manteiga de Garrafa",
                    "image": defaultDish,
                    "description": "PRATO VEGETARIANO - Shimeji salteado na manteiga de garrafa",
                    "price": { "value": 48.00, "formatted": "R$ 48,00" }
                },
                {
                    "id": 76,
                    "name": "Tempura",
                    "image": defaultDish,
                    "description": "PRATO VEGANO - Uma seleção de vegetais envolvidos em uma fina camada de massa de tempura, fritos à perfeição para proporcionar uma crocância irresistível, criando um contraste de sabores e texturas.",
                    "price": { "value": 42.00, "formatted": "R$ 42,00" }
                },
                {
                    "id": 77,
                    "name": "Iscas de Frango Super Crocantes",
                    "image": defaultDish,
                    "description": "Iscas de frango super crocantes, acompanha maionese verde",
                    "price": { "value": 65.00, "formatted": "R$ 65,00" }
                },
                {
                    "id": 78,
                    "name": "À la Mare",
                    "image": defaultDish,
                    "description": "Seleção de peixe fresco (cação), mariscos e camarões, delicadamente empanados e fritos até ficarem dourados e crocantes. Acompanhados de maionese verde caseira, um toque cremoso e refrescante para equilibrar os sabores intensos do mar.",
                    "price": { "value": 72.00, "formatted": "R$ 72,00" }
                },
                {
                    "id": 79,
                    "name": "Batata Rústica",
                    "image": defaultDish,
                    "description": "PRATO VEGANO - Fatias rústicas de batata, fritas em formato pedaçados com alho fresco e salpicadas com um toque suave, uma experiência genuína da simplicidade e do sabor autêntico.",
                    "price": { "value": 46.00, "formatted": "R$ 46,00" }
                },
                {
                    "id": 710,
                    "name": "Batata Rústica",
                    "image": defaultDish,
                    "description": "PRATO VEGANO",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 711,
                    "name": "Batata Supreme",
                    "image": defaultDish,
                    "description": "Crocantes batatas fritas, cobertas com queijo cheddar derretido e finalizadas com calabresa defumada ralada, proporcionando uma combinação irresistível de sabores intensos e texturas perfeitas.",
                    "price": { "value": 49.00, "formatted": "R$ 49,00" }
                },
            ]
        },
        {
            id: 8,
            category: "Bruschettas",
            itens: [
                {
                    "id": 81,
                    "name": "Bruschetta de Shimeji",
                    "image": defaultDish,
                    "description": "PRATO VEGETARIANO - Pão italiano levemente tostado, com uma camada cremosa de ricota, salteado de shimeji fresco, azeitonas pretas selecionadas e um delicado toque de gorgonzola. Um encontro de texturas e sabores intensos, perfeito para os amantes da alta gastronomia.",
                    "price": { "value": 65.00, "formatted": "R$ 65,00" }
                },
                {
                    "id": 82,
                    "name": "Bruschetta Mediterrânea",
                    "image": defaultDish,
                    "description": "Sobre crocantes fatias de pão italiano ao azeite, tomates selecionados, um requintado mix de frutos do mar é suavemente abraçado pela cremosidade da mussarela gratinada. Um convite aos sabores frescos e autênticos do Mediterrâneo.",
                    "price": { "value": 65.00, "formatted": "R$ 65,00" }
                },
                {
                    "id": 83,
                    "name": "Bruschetta Napolitana",
                    "image": defaultDish,
                    "description": "PRATO VEGETARIANO - Pão italiano artesanal levemente tostado com vinagrete de tomates frescos e mussarela gratinada. Simples, vibrante e cheio de tradição.",
                    "price": { "value": 58.00, "formatted": "R$ 58,00" }
                },
                {
                    "id": 84,
                    "name": "Bruschetta Divina",
                    "image": defaultDish,
                    "description": "Fatias douradas de pão italiano recebem um toque artesanal de veludo de tomate e manjericão frescos, parmesão gratinado, coroado com lâminas de bacon crocante, e um surpreendente toque de geleia de frutas vermelhas levemente picante. Uma harmonia perfeita entre o salgado e o adocicado, para paladares exigentes.",
                    "price": { "value": 65.00, "formatted": "R$ 65,00" }
                }
            ]
        },
        {
            id: 9, 
            category: "Guarnições",
            itens: [
                {
                    id: 91,
                    name: "Arroz Branco",
                    image: defaultDish,
                    description: "Arroz Branco",
                    price: {
                        value: 12.00, formatted: "R$ 12,00"
                    }
                },
                {
                    id: 92,
                    name: "Cesta de Pães",
                    image: defaultDish,
                    description: "Cesta de Pães",
                    price: {
                        value: 7.00, formatted: "R$ 7,00"
                    }
                },
                {
                    id: 93,
                    name: "Vinagrete",
                    image: defaultDish,
                    description: "Vinagrete",
                    price: {
                        value: 7.00, formatted: "R$ 7,00"
                    }
                },
                {
                    id: 94,
                    name: "Farofa",
                    image: defaultDish,
                    description: "Farofa",
                    price: {
                        value: 4.00, formatted: "R$ 4,00"
                    }
                },
                {
                    id: 95,
                    name: "Maionese Verde",
                    image: defaultDish,
                    description: "Maionese Verde",
                    price: {
                        value: 8.00, formatted: "R$ 8,00"
                    }
                },
                {
                    id: 96,
                    name: "Geléia de Pimenta",
                    image: defaultDish,
                    description: "Geléia de Pimenta",
                    price: {
                        value: 8.00, formatted: "R$ 8,00"
                    }
                },
                {
                    id: 97,
                    name: "Parmesão Ralado",
                    image: defaultDish,
                    description: "Parmesão Ralado",
                    price: {
                        value: 10.00, formatted: "R$ 10,00"
                    }
                },
                {
                    id: 98,
                    name: "Emb. Para Viagem",
                    image: defaultDish,
                    description: "Emb. Para Viagem",
                    price: {
                        value: 5.00, formatted: "R$ 5,00"
                    }
                }
            ]
        },
        {
            "id": 10,
            "category": "Opções de Inverno",
            "itens": [
                {
                    "id": 101,
                    "name": "Fondue de Queijo Gruyère",
                    "image": defaultDish,
                    "description": "Fondue de queijo Gruyère com snacks de queijo, palitos de cenoura, pão italiano, brócolis, palitos de cenoura, batatas em conserva, tomate cereja, azeitonas e gergelim",
                    "price": { "value": 120.00, "formatted": "R$ 120,00" }
                },
                {
                    "id": 102,
                    "name": "Fondue de Chocolate",
                    "image": defaultDish,
                    "description": "Fondue de chocolate com marshmallows, banana, frutas da época e suspiros",
                    "price": { "value": 89.00, "formatted": "R$ 89,00" }
                },
            ]
        },
        {
            id: 11,
            category: "Caldos",
            itens: [
                {
                    "id": 111,
                    "name": "Caldo de Feijão Carioca",
                    "image": defaultDish,
                    "description": "Caldo de feijão carioca acompanha farofa de calabresa e cesta de pães",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 112,
                    "name": "Caldo de Feijão Preto",
                    "image": defaultDish,
                    "description": "Caldo de feijão preto acompanha farofa de calabresa e cesta de pães",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                }
            ]
        },
        {
            "id": 12,
            "category": "Sobremesas",
            "itens": [
                {
                    "id": 121,
                    "name": "Gelato Nero",
                    "image": defaultDish,
                    "description": "Deliciosa taça colegial envolvida dentro e fora por brigadeiro, confeitos, com sorvete de creme, crótons de negresco e canudos de waffles.",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 122,
                    "name": "Petit Gateau",
                    "image": defaultDish,
                    "description": "Bolo quente com sorvete de creme e calda de ganache de brigadeiro.",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 123,
                    "name": "Ice Cream Morango",
                    "image": defaultDish,
                    "description": "Sorvete de creme com cobertura, morangos e leite Ninho.",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 124,
                    "name": "Passion Fruit",
                    "image": defaultDish,
                    "description": "Sorvete de creme com calda in natura de maracujá.",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 125,
                    "name": "Torta Holandesa",
                    "image": defaultDish,
                    "description": "Torta holandesa com camadas crocantes e creme",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 126,
                    "name": "Tiramisu",
                    "image": defaultDish,
                    "description": "Clássico tiramisu italiano",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 127,
                    "name": "Brownie de Chocolate",
                    "image": defaultDish,
                    "description": "Brownie de chocolate quente com sorvete",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 128,
                    "name": "Cheesecake de Frutas Vermelhas",
                    "image": defaultDish,
                    "description": "Cheesecake com cobertura de frutas vermelhas",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 129,
                    "name": "Mousse de Chocolate",
                    "image": defaultDish,
                    "description": "Mousse de chocolate cremoso",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                }
            ]
        },
        {
            "id": 13,
            "category": "Drinks Clássicos",
            "itens": [
                {
                    "id": 131,
                    "name": "Mojito",
                    "image": defaultDish,
                    "description": "Rum, Hortelã e Limão",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 132,
                    "name": "Mojitão",
                    "image": defaultDish,
                    "description": "Serve 4 pessoas - Rum, Hortelã e Limão",
                    "price": { "value": 89.00, "formatted": "R$ 89,00" }
                },
                {
                    "id": 133,
                    "name": "Drink de Coco",
                    "image": defaultDish,
                    "description": "Vodka, Leite de Coco, Leite Condensado, Coco Ralado e em Pedaços de Coco",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 134,
                    "name": "Sex on the Beach",
                    "image": defaultDish,
                    "description": "Vodka, Suco de Laranja, Licor de Pêssego e Groselha",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 135,
                    "name": "Caipirinhas",
                    "image": defaultDish,
                    "description": "Vodka, Cachaça ou Sake com Frutas Naturais, até 2 frutas (Laranja, Maçã Verde, Maracujá, Tangerina, Frutas Vermelhas, Abacaxi e Morango)",
                    "price": { "value": 30.00, "formatted": "R$ 30,00" }
                },
                {
                    "id": 136,
                    "name": "Caipirinha 2 Limões com Rapadura",
                    "image": defaultDish,
                    "description": "Caipirinha especial com 2 limões e rapadura",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 137,
                    "name": "Margarita",
                    "image": defaultDish,
                    "description": "Tequila, Suco de Limão, Licor Triple Sec, Limão, Gelo Britado e Borda de Sal",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 138,
                    "name": "Bloody Mary",
                    "image": defaultDish,
                    "description": "Vodka, Suco de Tomate, Limão, Molho Inglês e Pimenta",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 139,
                    "name": "Cuba Libre",
                    "image": defaultDish,
                    "description": "Rum, Rodelas de Limão e Coca-Cola",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 1310,
                    "name": "Espanhola",
                    "image": defaultDish,
                    "description": "Vinho, Abacaxi e Leite Condensado",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 1311,
                    "name": "Drink na Banheira",
                    "image": defaultDish,
                    "description": "Vodka, Malibu, Curaçau, Abacaxi, Leite Condensado e Chantilly",
                    "price": { "value": 50.00, "formatted": "R$ 50,00" }
                },
                {
                    "id": 1312,
                    "name": "Pina Colada",
                    "image": defaultDish,
                    "description": "Rum, Leite de Coco, Leite Condensado e Suco de Abacaxi",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 1313,
                    "name": "Lagoa Azul",
                    "image": defaultDish,
                    "description": "Vodka, Curaçau Blue e Soda",
                    "price": { "value": 33.00, "formatted": "R$ 33,00" }
                },
                {
                    "id": 1314,
                    "name": "Negroni",
                    "image": defaultDish,
                    "description": "Gin, Campari, Vermute Russo e Casca de Laranja",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 1315,
                    "name": "Whiskey Sour",
                    "image": defaultDish,
                    "description": "Whisky Red Label, Suco de Limão e Açúcar na Borda",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 1316,
                    "name": "Moscow Mule",
                    "image": defaultDish,
                    "description": "Vodka, Xarope de Gengibre, Suco de Limão, Água com Gás e Espuma de Gengibre",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 1317,
                    "name": "Coronarita",
                    "image": defaultDish,
                    "description": "Tequila, Suco de Limão, Cerveja Corona Mergulhada e Borda com Sal",
                    "price": { "value": 50.00, "formatted": "R$ 50,00" }
                },
                {
                    "id": 1318,
                    "name": "Free Style",
                    "image": defaultDish,
                    "description": "Drink Sem Alcool Consulte o Garçon",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1319,
                    "name": "Jack & Coke",
                    "image": defaultDish,
                    "description": "Jack Daniels com Coca-Cola",
                    "price": { "value": 32.00, "formatted": "R$ 32,00" }
                },
                {
                    "id": 1320,
                    "name": "Tropical Mango",
                    "image": defaultDish,
                    "description": "Licor de manga com pimenta, cachaça, energético, manga macerada e gelo",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1321,
                    "name": "Jager Bomb",
                    "image": defaultDish,
                    "description": "Jagermeister com Red Bull",
                    "price": { "value": 55.00, "formatted": "R$ 55,00" }
                },
            ]
        },
        {
            id: 14,
            category: "Drinks Autorais",
            itens: [
                {
                    "id": 141,
                    "name": "Drink de Nuvem com Algodão Doce",
                    "image": defaultDish,
                    "description": "Vodka, Frutas Vermelhas, Xarope de Frutas Vermelhas, Cereja e Algodão Doce",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 142,
                    "name": "Tinto de Verano",
                    "image": defaultDish,
                    "description": "Vinho seco, suco de limão, laranja, soda e muito gelo",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 143,
                    "name": "Banheira da Barbie",
                    "image": defaultDish,
                    "description": "Vodka, Malibu, Curaçau, Abacaxi, Leite Condensado e Chantilly",
                    "price": { "value": 50.00, "formatted": "R$ 50,00" }
                }
            ]
        },
        {
            "id": 15,
            "category": "Gin Tônica Tropical",
            "itens": [
                {
                    "id": 151,
                    "name": "Gin Tônica",
                    "image": defaultDish,
                    "description": "Gin com água tônica",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 152,
                    "name": "Gin Fizz",
                    "image": defaultDish,
                    "description": "Gin Fizz clássico",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 153,
                    "name": "Gin Tropical Coco",
                    "image": defaultDish,
                    "description": "Gin com toques tropicais de coco",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 154,
                    "name": "Gin Tropical Maçã Verde",
                    "image": defaultDish,
                    "description": "Gin com maçã verde tropical",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 155,
                    "name": "Gin Tropical Frutas Vermelhas",
                    "image": defaultDish,
                    "description": "Gin com mix de frutas vermelhas",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 156,
                    "name": "Gin Tropical Pêssego com Morango",
                    "image": defaultDish,
                    "description": "Gin com pêssego e morango",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 157,
                    "name": "Gin Tropical Pitaya",
                    "image": defaultDish,
                    "description": "Gin com pitaya tropical",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 158,
                    "name": "Gin Tropical Morango",
                    "image": defaultDish,
                    "description": "Gin com morango fresco",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 159,
                    "name": "Gin Tropical Melancia",
                    "image": defaultDish,
                    "description": "Gin com melancia refrescante",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1510,
                    "name": "Gin Tropical Tangerina",
                    "image": defaultDish,
                    "description": "Gin com tangerina cítrica",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1511,
                    "name": "Gin Tropical Laranja",
                    "image": defaultDish,
                    "description": "Gin com laranja fresca",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1512,
                    "name": "Gin Tropical Pimenta",
                    "image": defaultDish,
                    "description": "Gin com tangerina e pimenta gota",
                    "price": { "value": 38.00, "formatted": "R$ 38,00" }
                },
                {
                    "id": 1513,
                    "name": "Gin Tropical Trio",
                    "image": defaultDish,
                    "description": "Gin com maracujá, abacaxi e hortelã",
                    "price": { "value": 39.00, "formatted": "R$ 39,00" }
                }
            ]
        },
        {
            "id": 16,
            "category": "Cervejas",
            "itens": [
                {
                    "id": 161,
                    "name": "Corona Long Neck",
                    "image": defaultDish,
                    "description": "Cerveja Corona em long neck",
                    "price": { "value": 16.00, "formatted": "R$ 16,00" }
                },
                {
                    "id": 162,
                    "name": "Heineken Long Neck",
                    "image": defaultDish,
                    "description": "Cerveja Heineken em long neck",
                    "price": { "value": 16.00, "formatted": "R$ 16,00" }
                },
                {
                    "id": 163,
                    "name": "Chopp de Vinho",
                    "image": defaultDish,
                    "description": "Chopp de vinho",
                    "price": { "value": 20.00, "formatted": "R$ 20,00" }
                },
                {
                    "id": 164,
                    "name": "Baden 600ml",
                    "image": defaultDish,
                    "description": "Cerveja Baden em garrafa 600ml",
                    "price": { "value": 34.00, "formatted": "R$ 34,00" }
                },
                {
                    "id": 165,
                    "name": "Amstel Lager 600ml",
                    "image": defaultDish,
                    "description": "Cerveja Amstel Lager em garrafa 600ml",
                    "price": { "value": 17.90, "formatted": "R$ 17,90" }
                },
                {
                    "id": 166,
                    "name": "Império Lager 600ml",
                    "image": defaultDish,
                    "description": "Cerveja Império Lager em garrafa 600ml",
                    "price": { "value": 18.90, "formatted": "R$ 18,90" }
                },
                {
                    "id": 167,
                    "name": "Original 600ml",
                    "image": defaultDish,
                    "description": "Cerveja Original em garrafa 600ml",
                    "price": { "value": 20.90, "formatted": "R$ 20,90" }
                },
                {
                    "id": 168,
                    "name": "Heineken 600ml",
                    "image": defaultDish,
                    "description": "Cerveja Heineken em garrafa 600ml",
                    "price": { "value": 22.90, "formatted": "R$ 22,90" }
                }
            ]
        },
        {
            "id": 17,
            "category": "Vinho Tinto",
            "itens": [
                {
                    "id": 171,
                    "name": "Taça Suave",
                    "image": defaultDish,
                    "description": "Taça de vinho tinto suave",
                    "price": { "value": 20.00, "formatted": "R$ 20,00" }
                },
                {
                    "id": 172,
                    "name": "Taça Seco",
                    "image": defaultDish,
                    "description": "Taça de vinho tinto seco",
                    "price": { "value": 20.00, "formatted": "R$ 20,00" }
                },
                {
                    "id": 173,
                    "name": "Concha y Toro (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Concha y Toro do Chile",
                    "price": { "value": 128.00, "formatted": "R$ 128,00" }
                },
                {
                    "id": 174,
                    "name": "Casillero del Diablo (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Casillero del Diablo do Chile",
                    "price": { "value": 158.00, "formatted": "R$ 158,00" }
                },
                {
                    "id": 175,
                    "name": "Santa Helena (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Santa Helena do Chile",
                    "price": { "value": 125.00, "formatted": "R$ 125,00" }
                },
                {
                    "id": 176,
                    "name": "Santa Carolina (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Santa Carolina do Chile",
                    "price": { "value": 140.00, "formatted": "R$ 140,00" }
                },
                {
                    "id": 177,
                    "name": "Chilano (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Chilano do Chile",
                    "price": { "value": 120.00, "formatted": "R$ 120,00" }
                },
                {
                    "id": 178,
                    "name": "El Enigma (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto El Enigma do Chile",
                    "price": { "value": 120.00, "formatted": "R$ 120,00" }
                },
                {
                    "id": 179,
                    "name": "Quatro Caminhos (Chile)",
                    "image": defaultDish,
                    "description": "Vinho tinto Quatro Caminhos do Chile",
                    "price": { "value": 100.00, "formatted": "R$ 100,00" }
                },
                {
                    "id": 1710,
                    "name": "Gomes Aguirre (Espanha)",
                    "image": defaultDish,
                    "description": "Vinho tinto Gomes Aguirre da Espanha",
                    "price": { "value": 130.00, "formatted": "R$ 130,00" }
                },
                {
                    "id": 1711,
                    "name": "Aguapura Suave",
                    "image": defaultDish,
                    "description": "Vinho tinto Aguapura Suave",
                    "price": { "value": 80.00, "formatted": "R$ 80,00" }
                },
                {
                    "id": 1712,
                    "name": "Aguapura Seco",
                    "image": defaultDish,
                    "description": "Vinho tinto Aguapura Seco",
                    "price": { "value": 80.00, "formatted": "R$ 80,00" }
                }
            ]
        },
        {
            "id": 18,
            "category": "Espumantes",
            "itens": [
                {
                    "id": 181,
                    "name": "Veuve Cliequot (França)",
                    "image": defaultDish,
                    "description": "Espumante Veuve Clicquot da França",
                    "price": { "value": 600.00, "formatted": "R$ 600,00" }
                },
                {
                    "id": 182,
                    "name": "Veuve Cliequot Mini (França)",
                    "image": defaultDish,
                    "description": "Espumante Veuve Clicquot Mini da França",
                    "price": { "value": 250.00, "formatted": "R$ 250,00" }
                },
                {
                    "id": 183,
                    "name": "Chandon",
                    "image": defaultDish,
                    "description": "Espumante Chandon",
                    "price": { "value": 140.00, "formatted": "R$ 140,00" }
                },
                {
                    "id": 184,
                    "name": "Chandon Mini",
                    "image": defaultDish,
                    "description": "Espumante Chandon Mini",
                    "price": { "value": 80.00, "formatted": "R$ 80,00" }
                },
                {
                    "id": 185,
                    "name": "Aurora Moscatel (Brasil)",
                    "image": defaultDish,
                    "description": "Espumante Aurora Moscatel do Brasil",
                    "price": { "value": 90.00, "formatted": "R$ 90,00" }
                },
                {
                    "id": 186,
                    "name": "Lambrusco (Itália)",
                    "image": defaultDish,
                    "description": "Espumante Lambrusco da Itália",
                    "price": { "value": 100.00, "formatted": "R$ 100,00" }
                },
                {
                    "id": 187,
                    "name": "Marcus James (Brasil)",
                    "image": defaultDish,
                    "description": "Espumante Marcus James do Brasil",
                    "price": { "value": 95.00, "formatted": "R$ 95,00" }
                }
            ]
        },
        {
            "id": 19,
            "category": "Vinho Branco / Verde",
            "itens": [
                {
                    "id": 191,
                    "name": "Terrazas Branco (Argentina)",
                    "image": defaultDish,
                    "description": "Vinho branco Terrazas da Argentina",
                    "price": { "value": 150.00, "formatted": "R$ 150,00" }
                },
                {
                    "id": 192,
                    "name": "Chalise Branco (Brasil)",
                    "image": defaultDish,
                    "description": "Vinho branco Chalise do Brasil",
                    "price": { "value": 60.00, "formatted": "R$ 60,00" }
                },
                {
                    "id": 193,
                    "name": "Quadrante Verde (Portugal)",
                    "image": defaultDish,
                    "description": "Vinho verde Quadrante de Portugal",
                    "price": { "value": 110.00, "formatted": "R$ 110,00" }
                }
            ]
        },
        {
            "id": 20,
            "category": "Drinks sem Álcool",
            "itens": [
                {
                    "id": 201,
                    "name": "Drink FreeStyle",
                    "image": defaultDish,
                    "description": "Drink sem Álcool.\n Consulte o Garçom",
                    "price": { "value": 38.00, "formatted": "R$ 39,00" }
                },
                {
                    "id": 202,
                    "name": "Água Mineral",
                    "image": defaultDish,
                    "description": "Água mineral sem gás",
                    "price": { "value": 7.00, "formatted": "R$ 7,00" }
                },
                {
                    "id": 203,
                    "name": "Água com Gás",
                    "image": defaultDish,
                    "description": "Água mineral com gás",
                    "price": { "value": 9.00, "formatted": "R$ 9,00" }
                },
                {
                    "id": 204,
                    "name": "Suco Natural (Copo)",
                    "image": defaultDish,
                    "description": "Suco natural de frutas",
                    "price": { "value": 15.00, "formatted": "R$ 15,00" }
                },
                {
                    "id": 205,
                    "name": "Suco Natural (Jarra)",
                    "image": defaultDish,
                    "description": "Jarra de suco natural de frutas",
                    "price": { "value": 36.00, "formatted": "R$ 36,00" }
                },
                {
                    "id": 206,
                    "name": "Refrigerante Lata",
                    "image": defaultDish,
                    "description": "Refrigerante em lata",
                    "price": { "value": 9.00, "formatted": "R$ 9,00" }
                },
                {
                    "id": 207,
                    "name": "Red Bull",
                    "image": defaultDish,
                    "description": "Energético Red Bull",
                    "price": { "value": 20.00, "formatted": "R$ 20,00" }
                },
                {
                    "id": 208,
                    "name": "Gelo de Coco",
                    "image": defaultDish,
                    "description": "Gelo de coco refrescante",
                    "price": { "value": 10.00, "formatted": "R$ 10,00" }
                },
                {
                    "id": 209,
                    "name": "Chá Mate Gelado (Copo)",
                    "image": defaultDish,
                    "description": "Chá mate gelado com ou sem limão",
                    "price": { "value": 16.00, "formatted": "R$ 16,00" }
                },
                {
                    "id": 2010,
                    "name": "Chá Mate Gelado (Jarra)",
                    "image": defaultDish,
                    "description": "Jarra de chá mate gelado com ou sem limão",
                    "price": { "value": 36.00, "formatted": "R$ 36,00" }
                }
            ]
        },
        {
            "id": 21,
            "category": "Cachaças",
            "itens": [
                {
                    "id": 211,
                    "name": "Seleta",
                    "image": defaultDish,
                    "description": "Cachaça Seleta",
                    "price": { "value": 19.00, "formatted": "R$ 19,00" }
                },
                {
                    "id": 212,
                    "name": "São Francisco",
                    "image": defaultDish,
                    "description": "Cachaça São Francisco",
                    "price": { "value": 19.00, "formatted": "R$ 19,00" }
                },
                {
                    "id": 213,
                    "name": "Boazinha",
                    "image": defaultDish,
                    "description": "Cachaça Boazinha",
                    "price": { "value": 19.00, "formatted": "R$ 19,00" }
                },
                {
                    "id": 214,
                    "name": "Busca Vida",
                    "image": defaultDish,
                    "description": "Cachaça Busca Vida",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 215,
                    "name": "Salinas",
                    "image": defaultDish,
                    "description": "Cachaça Salinas",
                    "price": { "value": 19.00, "formatted": "R$ 19,00" }
                },
                {
                    "id": 216,
                    "name": "Ypióca",
                    "image": defaultDish,
                    "description": "Cachaça Ypióca",
                    "price": { "value": 19.00, "formatted": "R$ 19,00" }
                }
            ]
        },
        {
            "id": 22,
            "category": "Combo Drinks Premium",
            "itens": [
                {
                    "id": 221,
                    "name": "Gin Gordons",
                    "image": defaultDish,
                    "description": "Gin Gordons com 4 Red Bull/Bopiocala",
                    "price": { "value": 300.00, "formatted": "R$ 300,00" }
                },
                {
                    "id": 222,
                    "name": "Gin Tanqueray 10",
                    "image": defaultDish,
                    "description": "Gin Tanqueray 10 com 4 Red Bull/Bopiocala",
                    "price": { "value": 450.00, "formatted": "R$ 450,00" }
                },
                {
                    "id": 223,
                    "name": "Red Label Combo",
                    "image": defaultDish,
                    "description": "Red Label com 2 Red Bull",
                    "price": { "value": 360.00, "formatted": "R$ 360,00" }
                },
                {
                    "id": 224,
                    "name": "Black Label Combo",
                    "image": defaultDish,
                    "description": "Black Label com 2 Red Bull",
                    "price": { "value": 470.00, "formatted": "R$ 470,00" }
                },
                {
                    "id": 225,
                    "name": "Jack Daniels Combo",
                    "image": defaultDish,
                    "description": "Jack Daniels com 2 Red Bull",
                    "price": { "value": 480.00, "formatted": "R$ 480,00" }
                },
                {
                    "id": 226,
                    "name": "Buchanans Combo",
                    "image": defaultDish,
                    "description": "Buchanans com 2 Red Bull",
                    "price": { "value": 480.00, "formatted": "R$ 480,00" }
                },
                {
                    "id": 227,
                    "name": "Smirnoff Combo",
                    "image": defaultDish,
                    "description": "Smirnoff com 4 Red Bull",
                    "price": { "value": 198.00, "formatted": "R$ 198,00" }
                },
                {
                    "id": 228,
                    "name": "Absolut Combo",
                    "image": defaultDish,
                    "description": "Absolut com 4 Red Bull",
                    "price": { "value": 298.00, "formatted": "R$ 298,00" }
                }
            ]
        },
        {
            "id": 23,
            "category": "Licores",
            "itens": [
                {
                    "id": 231,
                    "name": "Licor de Cachaça com Pimenta",
                    "image": defaultDish,
                    "description": "Licor de cachaça com pimenta",
                    "price": { "value": 16.00, "formatted": "R$ 16,00" }
                },
                {
                    "id": 232,
                    "name": "Gabriela Cravo e Canela",
                    "image": defaultDish,
                    "description": "Licor de cachaça Gabriela com cravo e canela",
                    "price": { "value": 16.00, "formatted": "R$ 16,00" }
                },
                {
                    "id": 233,
                    "name": "Licor 43",
                    "image": defaultDish,
                    "description": "Licor 43 espanhol",
                    "price": { "value": 33.00, "formatted": "R$ 33,00" }
                },
                {
                    "id": 234,
                    "name": "Baileys",
                    "image": defaultDish,
                    "description": "Licor de creme irlandês Baileys",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 235,
                    "name": "Jägermeister",
                    "image": defaultDish,
                    "description": "Licor de ervas Jägermeister alemão",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                }
            ]
        },
        {
            "id": 24,
            "category": "Doses",
            "itens": [
                {
                    "id": 241,
                    "name": "Smirnoff",
                    "image": defaultDish,
                    "description": "Dose de Smirnoff",
                    "price": { "value": 30.00, "formatted": "R$ 30,00" }
                },
                {
                    "id": 242,
                    "name": "Absolut",
                    "image": defaultDish,
                    "description": "Dose de Absolut",
                    "price": { "value": 30.00, "formatted": "R$ 30,00" }
                },
                {
                    "id": 243,
                    "name": "Gin Gordons",
                    "image": defaultDish,
                    "description": "Dose de Gin Gordons",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 244,
                    "name": "Red Label",
                    "image": defaultDish,
                    "description": "Dose de Red Label",
                    "price": { "value": 35.00, "formatted": "R$ 35,00" }
                },
                {
                    "id": 245,
                    "name": "Jack Daniels",
                    "image": defaultDish,
                    "description": "Dose de Jack Daniels",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 246,
                    "name": "Buchanans",
                    "image": defaultDish,
                    "description": "Dose de Buchanans",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 247,
                    "name": "Black Label",
                    "image": defaultDish,
                    "description": "Dose de Black Label",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 248,
                    "name": "Chivas 12",
                    "image": defaultDish,
                    "description": "Dose de Chivas 12",
                    "price": { "value": 40.00, "formatted": "R$ 40,00" }
                },
                {
                    "id": 249,
                    "name": "Domecq",
                    "image": defaultDish,
                    "description": "Dose de Domecq",
                    "price": { "value": 18.00, "formatted": "R$ 18,00" }
                },
                {
                    "id": 2410,
                    "name": "Martini",
                    "image": defaultDish,
                    "description": "Dose de Martini",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 2411,
                    "name": "Campari",
                    "image": defaultDish,
                    "description": "Dose de Campari",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                },
                {
                    "id": 2412,
                    "name": "Sakê",
                    "image": defaultDish,
                    "description": "Dose de Sakê",
                    "price": { "value": 25.00, "formatted": "R$ 25,00" }
                },
                {
                    "id": 2413,
                    "name": "Tequila",
                    "image": defaultDish,
                    "description": "Dose de Tequila",
                    "price": { "value": 28.00, "formatted": "R$ 28,00" }
                }
            ]
        },
        {
            "id": 25,
            "category": "Garrafas",
            "itens": [
                {
                    "id": 251,
                    "name": "Jack Daniels",
                    "image": defaultDish,
                    "description": "Garrafa de Jack Daniels",
                    "price": { "value": 400.00, "formatted": "R$ 400,00" }
                },
                {
                    "id": 252,
                    "name": "Buchanans",
                    "image": defaultDish,
                    "description": "Garrafa de Buchanans",
                    "price": { "value": 450.00, "formatted": "R$ 450,00" }
                },
                {
                    "id": 253,
                    "name": "Gin Tanqueray 10",
                    "image": defaultDish,
                    "description": "Garrafa de Gin Tanqueray 10",
                    "price": { "value": 420.00, "formatted": "R$ 420,00" }
                },
                {
                    "id": 254,
                    "name": "Gin Gordons",
                    "image": defaultDish,
                    "description": "Garrafa de Gin Gordons",
                    "price": { "value": 290.00, "formatted": "R$ 290,00" }
                },
                {
                    "id": 255,
                    "name": "Smirnoff",
                    "image": defaultDish,
                    "description": "Garrafa de Smirnoff",
                    "price": { "value": 150.00, "formatted": "R$ 150,00" }
                },
                {
                    "id": 256,
                    "name": "Absolut",
                    "image": defaultDish,
                    "description": "Garrafa de Absolut",
                    "price": { "value": 250.00, "formatted": "R$ 250,00" }
                },
                {
                    "id": 257,
                    "name": "Jose Cuervo",
                    "image": defaultDish,
                    "description": "Garrafa de Jose Cuervo",
                    "price": { "value": 280.00, "formatted": "R$ 280,00" }
                },
                {
                    "id": 258,
                    "name": "Bacardi",
                    "image": defaultDish,
                    "description": "Garrafa de Bacardi",
                    "price": { "value": 140.00, "formatted": "R$ 140,00" }
                },
                {
                    "id": 259,
                    "name": "Red Label",
                    "image": defaultDish,
                    "description": "Garrafa de Red Label",
                    "price": { "value": 240.00, "formatted": "R$ 240,00" }
                },
                {
                    "id": 2510,
                    "name": "Black Label",
                    "image": defaultDish,
                    "description": "Garrafa de Black Label",
                    "price": { "value": 400.00, "formatted": "R$ 400,00" }
                },
                {
                    "id": 2511,
                    "name": "Green Label",
                    "image": defaultDish,
                    "description": "Garrafa de Green Label",
                    "price": { "value": 590.00, "formatted": "R$ 590,00" }
                },
                {
                    "id": 2512,
                    "name": "Blue Label",
                    "image": defaultDish,
                    "description": "Garrafa de Blue Label",
                    "price": { "value": 1200.00, "formatted": "R$ 1.200,00" }
                }
            ]
        }
    ],
    links: {
        facebook: "https://www.facebook.com/aguapurabar/",
        instagram: "https://www.instagram.com/aguapurarestaurante",
        whatsapp: "https://api.whatsapp.com/send/?phone=5511974664275",
    }
};