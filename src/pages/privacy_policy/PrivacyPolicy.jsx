import Navbar from "@/components/navbar/Navbar";
import companyImg from "@/utils/assets/company.jpeg";
import styles from "./PrivacyPolicy.module.css";
import Footer from "../../components/footer/Footer";
import { aguaPura } from "../../data/AguaPura";

export default function PrivacyPolicy({ 
    inChange = "",
}) {

    const data = aguaPura;
    
    const { cnpj, name, email } = data;
    const address = data.units.length == 1 ? data.units[0].location.extended : "";

  return (
    <>
        <Navbar />
        <main className={styles.container}>
            <section className={styles.wrapperImg}>
                <img src={data.images[1]} alt="" className={styles.img} />
                <div className={styles.backgroundImg}></div>
                <h1 className={styles.textImg}>Política de Privacidade</h1>
            </section>

            <section className={styles.wrapperText}>
                <div className={styles.description}>
                    <p>
                        A proteção de suas informações é nossa prioridade. Nós, da <b>{name}</b>,
                        inscrita no CNPJ/ME sob o n.º <b>{cnpj.formatted}</b>, levamos a sua privacidade e a proteção dos seus
                        dados a sério.
                    </p>

                    <p>
                        Esta política de privacidade descreve o processamento de informações disponibilizadas ou 
                        coletadas nos sites em que esta política é divulgada, seja em nossas plataformas digitais 
                        oficiais. Também descreve o processamento de informações fornecidas por clientes ou 
                        coletadas de maneira offline, em nossas unidades físicas, eventos ou por meio de nossos 
                        canais de atendimento.
                    </p>

                </div>

                <div>   
                    <h2>1 – Coleta de Informações</h2>
                    <p>
                        1.1 Para otimizar a experiência dos nossos clientes o {name} poderá coletar informações 
                        pessoais dos usuários, tais como nome, e-mail, endereço e número telefônico. Seus dados 
                        pessoais são utilizados principalmente para fornecer os produtos e serviços do {name}. 
                        Eles também podem ser utilizados para cumprir obrigações legais às quais estamos sujeitos 
                        ou para cumprir nossos interesses legítimos, como personalizar sua experiência, desenvolver 
                        e melhorar nossos serviços. O {name} também pode processar dados pessoais para fins de 
                        conformidade com as leis e regulamentos locais aplicáveis no território onde nossos produtos 
                        e serviços são oferecidos. Com seu consentimento prévio ou sempre que houver um interesse 
                        legítimo, eles também poderão ser utilizados para lhe enviar ofertas e promoções.
                    </p>
    
                    <p>
                        1.2 Nós coletamos as informações de transações que você fornece quando utiliza nossos 
                        serviços de WI-FI in loco em qualquer unidade da empresa, bem como quando entra em contato 
                        com o Serviço de Atendimento ao Cliente, ou ainda, informações de pagamento através de pedidos 
                        de delivery realizados por meio de nossos canais oficiais, especialmente quando você vincula 
                        seu perfil, responde a pesquisas e, ainda, quando visita nossos espaços físicos.
                        Os fornecedores de terceiros que podem receber dados pessoais incluem processadores de cartões 
                        de pagamento e instituições financeiras para transações e gerenciamento financeiro.
                    </p>
                    <p>
                        1.3 Algumas informações relativas ao hardware e software de nossos usuários também poderão ser 
                        automaticamente coletadas, inclusive através de cookies. Essas informações incluem: o endereço 
                        de protocolo de internet (IP), o navegador utilizado para acesso ao site, os horários de acesso, 
                        o tempo de permanência em cada página e as páginas mais acessadas dentro de nosso site. 
                        Garantimos que o uso dessas informações tem tão somente o fim de aprimorar o site e melhor 
                        adaptá-lo à necessidade de nossos clientes.
                    </p>
                    <p>
                        1.3.1 Em relação aos cookies, o usuário poderá sempre configurar seu navegador para que notifique 
                        e cancele a instalação dos cookies enviados pelo site, sem que isso prejudique seu acesso ao 
                        conteúdo que ofertamos.
                    </p>
                </div>

                <div>
                    <h2>2 – Uso das Informações</h2>
                    <p>
                        2.1 Os dados fornecidos para o cadastro nas plataformas digitais do {name} e para a elaboração de 
                        documentos não são vendidos, trocados ou divulgados para terceiros, exceto quando (i) expressamente 
                        autorizados por nossos usuários; (ii) necessários para a prestação de serviços específicos e/ou 
                        execução de contrato; (iii) exigidos por lei; (iv) necessários para a proteção de nossos direitos; 
                        ou (v) em caso de fusão, cisão, incorporação, aquisição ou qualquer outra forma de reorganização 
                        societária envolvendo a Empresa, hipótese na qual as informações só serão transmitidas ao terceiro 
                        sucessor ou adquirente. Nesses casos, a Empresa notificará o usuário sobre a transferência de 
                        informações e, se for o caso, diligenciará para que os terceiros sejam proibidos de utilizar essas 
                        informações para fins diversos dos relacionados à prestação dos serviços ofertados pela Empresa.
                    </p>
                    <p>
                        2.2 Em consonância com a legislação aplicável, bem como com as escolhas e controles que podem estar 
                        disponíveis para você, poderemos utilizar informações coletadas de você, inclusive de dispositivos 
                        utilizados por você, com o intuito de:
                    </p>
                    <p>
                        Proporcionar experiências, produtos e serviços por você solicitados, visualizados, acessados ou 
                        comprados, inclusive através da utilização de parceiros que oferecem serviço de cashback;<br />

                        Comunicar a respeito de sua conta ou reservas realizadas conosco, bem como enviar informações, 
                        solicitar feedback sobre nossos serviços, recursos de nossos sites e eventualmente informar mudanças 
                        em nossas políticas;<br />
                        
                        Personalizar conteúdo e experiências; <br />

                        Fornecer publicidade direcionada baseada em sua atividade em nossos sites (bem como de terceiros); <br />

                        Operar, entender, otimizar, desenvolver ou melhorar nossos sites, produtos, serviços e operações, 
                        inclusive utilizando pesquisas com usuários.
                    </p>
                </div>

                <div>
                    <h2>3 – Geolocalização</h2>
                    <p>
                        Se você forneceu permissão por meio do seu dispositivo móvel ou computador para coletar informações 
                        de localização por meio do acesso aos nossos sites, a {name} poderá obter suas informações de 
                        localização física utilizando tecnologias como GPS, Wi-Fi ou proximidade de torres de celular.
                        Essas informações poderão ser utilizadas para fornecer dados sobre unidades da {name}, eventos e ofertas 
                        promocionais na sua área ou localidade atual ou nas proximidades.
                        Você pode retirar sua permissão para que a {name} colete informações de sua localização física a qualquer 
                        momento, por meio das configurações do seu dispositivo.
                    </p>
                </div>

                <div>
                    <h2>4 – Trabalhe Conosco</h2>
                    <p>
                        4.1 Você pode ter a oportunidade de se candidatar a vagas de emprego on-line por meio do preenchimento de 
                        formulário no portal “Trabalhe Conosco”, enviando uma candidatura pelo site, que geralmente é recebida pelo 
                        departamento de recursos humanos dos Restaurantes {name}.
                        Se enviado através desse sistema, seu currículo ou CV e outras Informações Pessoais (coletivamente, 
                        “Informações de Anúncio de Vagas”) serão disponibilizados ao proprietário, operador ou gerente do local das 
                        unidades dos Restaurantes {name}.
                        Além disso, suas Informações de Anúncio de Vagas serão armazenadas em um sistema interno de banco de dados.
                    </p>
                            
                    <p>
                        4.2 Todas essas Informações de Anúncios de Vagas podem ser usadas pela empresa contratante aplicável com o 
                        objetivo de avaliar sua adequação para vagas atuais e futuras e para prosseguir com seu processo de 
                        recrutamento.
                    </p>
                    <p>   
                        4.3 Se a qualquer momento você desejar que suas informações pessoais, currículo ou CV sejam excluídos, basta 
                        notificar o operador contratante ou a empresa de administração da {name}, por nossos canais de atendimento.
                    </p>
                </div>

                <div>
                    <h2>5 – Compartilhamento de Informações</h2>
                    <p>
                        5.1 A {name} ({cnpj.formatted}) poderá compartilhar seus dados pessoais com terceiros ou parceiros de negócios que sejam relevantes 
                        para fins de viabilizar a utilização do site e da internet em nossos restaurantes. Referido compartilhamento ocorre com 
                        base nos seguintes critérios e para as finalidades descritas abaixo.
                    </p>

                    <p>
                        1) <strong>Prestadores de serviços ou parceiros comerciais:</strong> Podemos compartilhar seus dados pessoais com prestadores 
                        de serviços ou parceiros comerciais contratados pela {name} para fins de: (a) fornecimento de software, sistemas antifraude 
                        e/ou ferramenta para gestão de clientes; (b) processamento das transações por cartão de crédito ou demais meios de pagamento; 
                        (c) geração de leads, prospecção de clientes e desenvolvimento de ações de marketing; (d) prestação de serviços logísticos 
                        dos pedidos realizados através do site; (e) auxílio no gerenciamento de promoções; (f) prestação de serviços de atendimento 
                        ao consumidor; e (g) gestão e aprimoramento do site, incluindo fornecimento de promoções e tickets cash-back.
                    </p>

                    <p>
                        2) <strong>Requisição de autoridade competente:</strong> A {name} ainda poderá compartilhar seus dados pessoais com terceiros 
                        (incluindo órgãos governamentais) a fim de responder a investigações, medidas judiciais, processos judiciais ou investigar, 
                        impedir ou adotar medidas acerca de atividades ilegais, suspeita de fraude ou situações que envolvam ameaças em potencial 
                        à segurança física de qualquer pessoa, ou se de outra maneira exigido pela legislação.
                    </p>

                    <p>
                        3) <strong>Todos os restaurantes {name}:</strong> Podemos compartilhar os dados pessoais dos titulares com restaurantes que 
                        operem legalmente sob a marca {name}, ainda que pessoas jurídicas independentes, com a finalidade estritamente necessária 
                        para viabilizar a fabricação e a entrega de produtos e/ou a prestação dos nossos serviços ao cliente.
                    </p>

                    <p>
                        4) <strong>Outros negócios:</strong> Também poderemos compartilhar os dados caso a {name} esteja envolvida em uma fusão, 
                        aquisição ou venda de todos ou de parte de seus ativos — seus dados pessoais poderão ser transferidos para a empresa ou 
                        pessoa adquirente. Em circunstâncias nas quais a identidade do controlador de seus dados pessoais se alterar como resultado 
                        de qualquer transação, você será notificado de quaisquer escolhas que possa ter acerca de seus dados pessoais.
                    </p>
                </div>

                <div>
                    <h2>6 – Seus Controles e Escolhas</h2>
                    <p>
                        6.1 Fornecemos a você a capacidade de exercer certos controles e escolhas em relação à nossa coleta, uso e compartilhamento 
                        de suas informações. De acordo com a lei aplicável, seus controles e escolhas podem incluir:
                    </p>
                    <p>
                        Correção, atualização e exclusão da sua conta de registro em nossas plataformas digitais;<br />
                        Escolher se receberá ou não ofertas e promoções de nossos produtos e serviços, ou produtos e serviços que acreditamos ser de seu interesse;<br />
                        Escolher se compartilhamos ou não suas informações pessoais com outras empresas para que elas possam enviar ofertas e promoções sobre seus produtos e serviços;<br />
                        Solicitar acesso às informações pessoais que mantemos sobre você e àquelas que corrigimos ou excluímos.
                    </p>
                    <p>
                        6.2 Esteja ciente de que, se você não nos permitir coletar informações pessoais, talvez não possamos oferecer determinadas 
                        experiências, produtos e serviços, e alguns de nossos serviços talvez não possam considerar seus interesses e preferências. 
                        Se a coleta de informações pessoais for obrigatória, deixaremos isso claro no ponto de coleta, para que você possa tomar 
                        uma decisão informada quanto à sua participação. Caso tenha dúvidas sobre suas informações pessoais específicas que 
                        processamos ou mantemos e seus direitos em relação a elas, entre em contato por meio dos nossos canais de atendimento.
                    </p>
                </div>

                <div>
                    <h2>7 – Por Quanto Tempo os Dados Pessoais Serão Armazenados?</h2>
                    <p>
                        7.1 A {name} ({cnpj.formatted}) possui uma política de retenção de dados pessoais alinhada com a lei aplicável. Os dados pessoais são 
                        armazenados somente pelo tempo que forem legalmente permitidos e necessários para cumprir com as finalidades para as quais 
                        foram coletados, salvo se houver qualquer outra razão para sua manutenção — como, por exemplo, cumprimento de quaisquer 
                        obrigações legais, regulatórias, contratuais, entre outras permitidas sob a lei.
                    </p>
                </div>

                <div>
                    <h2>8 – Como a {name} Protege Seus Dados Pessoais?</h2>
                    <p>
                        8.1 Nossa responsabilidade é cuidar dos seus dados pessoais e utilizá-los somente para as finalidades descritas nesta 
                        Política. Para garantir a sua privacidade e a proteção dos seus dados pessoais, adotamos recursos tecnológicos avançados 
                        para garantir a segurança de todos os dados tratados pela {name}.
                    </p>
                    <p>
                        Entre as medidas de segurança implementadas estão: implementação de controles de acesso a sistemas e ambientes de tratamento 
                        de dados, técnicas de criptografia e a instalação de barreiras contra o acesso indevido às bases de dados (incluindo firewalls), 
                        entre outros controles de segurança da informação.
                    </p>
                    <p>
                        8.2 Nós nos esforçamos para proteger a privacidade de seus dados pessoais, mas infelizmente não podemos garantir total 
                        segurança. Entradas e usos não autorizados de terceiros com informações suas, falhas de hardware ou software que não estejam 
                        sob controle da {name}, e outros fatores externos podem comprometer a segurança dos seus dados pessoais. Caso você identifique 
                        ou tome conhecimento de qualquer fator que comprometa a segurança dos seus dados na sua relação com a {name}, entre em contato 
                        conosco por meio das informações de contato indicadas abaixo.
                    </p>
                </div>

                <div>
                    <h2>9 – Como Falar Sobre Dados Pessoais com a {name}?</h2>
                    <p>
                        9.1 Se você acredita que seus dados pessoais foram tratados de maneira incompatível com esta Política ou com as suas escolhas 
                        enquanto titular dos dados pessoais, ou se tiver dúvidas, comentários ou sugestões relacionadas a esta Política e à forma como 
                        tratamos seus dados pessoais, entre em contato conosco.
                    </p>
                    <p>
                        Temos um Encarregado (DPO) à disposição nos seguintes endereços de contato:
                    </p>
                    <p>
                        <strong>Encarregado:</strong> {inChange}<br />
                        <strong>Endereço de Correspondência:</strong> {address} <br />
                        <strong>E-mail para Contato:</strong> {email}
                    </p>
                </div>

                <div>
                    <h2>10 – Mudanças na Política de Privacidade</h2>
                    <p>
                        Como estamos sempre buscando melhorar os nossos serviços e a forma como operamos, esta Política de Privacidade pode passar 
                        por atualizações para refletir as melhorias realizadas. Dessa forma, recomendamos a visita periódica desta página para que 
                        você tenha conhecimento sobre as modificações efetivadas.
                    </p>
                </div>

            </section>
        </main>
        <Footer />
    </>
  );
}
