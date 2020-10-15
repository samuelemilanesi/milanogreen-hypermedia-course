CREATE TABLE services(
    serviceID int NOT NULL,
    name varchar,
    image varchar,
    description varchar,
    PRIMARY KEY (ServiceID));

INSERT INTO services
VALUES ('1', 'Tree Planting','../assets/img/services/tree_planting.png', 'Lavoriamo per migliorare la salute delle nostre foreste urbane. Una sana diversità delle piante
                autoctone è essenziale affinché l''ecosistema si adatti agli stress urbani come i cambiamenti climatici
                e l''inquinamento. I volontari aiutano rimuovendo le piante invasive distruttive e sostituendole con
                specie autoctone. La battaglia contro le piante invasive non finisce mai e abbiamo bisogno di aiuto!
                Insieme possiamo proteggere l''eredità verde di Milano. Se vuoi saperne di più:' ),
        ('2','Ripristino delle foreste','../assets/img/services/ripristino.png','Il ripristino delle foreste viene fatto per migliorare la salute delle nostre foreste. Una sana diversità naturale è essenziale per permettere all''ecosistema di adattarsi facilmente agli stress urbani, dovuti a cambiamento climatico, frammentazione dell''habitataì e inquinamento.
             I volontari aiutano rimuovendo le piante esotiche invasive e riducendo l''erosione dell''acqua.
            La battaglia contro le piante invasive non finisce mai e noi abbiamo bisogno di aiuto!
            Insieme possiamo proteggere il verde a Milano.'),
        ('3','Mantenimento del verde urbano','../assets/img/services/mantenimento.png','
            Una volta che un albero è stato piantato e le radici si sono sviluppate, c''è ancora un mucchio di lavoro da fare.
            Il nostro team di volontari si occupa di prendersi cura dell''irrigazione , della concimazione, della potatura e in generale di prendersi cura delle nuove piante.
            Abbiamo sempre bisogno di nuove persone che ci possano aiutare a reperire l''equipaggiamento necessario e che siano volenterose di contribuire al benessere delle nostre piante.'),
        ('4','Educazione dei giovani','../assets/img/services/educazione_giovani.png','Milanogreen offre un ampia varietà di programmi per i giovani , inclusi campi scuola, workshop , eventi per famiglie e altro per far si che i bambini e i ragazzi si interessino ad un mondo più verde ed esplorino tutte le possibilità che la nostra città ha da offrire.
            Inoltre stiamo implementando una piattaforma di istruzione live con programmi interattivi, così che i giovani possano divertirsi e imparare ovunque essi si trovino.'),
        ('5','Educazione per adulti','../assets/img/services/educazione_adulti.png','Con i programmi individuali, per volontari , per scuole e per aziende, offriamo una varietà di opportunità educative che forniscono gli strumenti per aiutarci a preservare il nostro verde urbano.
            Attraverso lezioni, wokrshop ed eventi speciali , imparerete molto sui temi come piantare e  curare le i parchi, rimuovere speci invasive, proteggere gli impollinatori, i giardini pubblici e molto altro.
            Ogni programma è un insieme a se stante ma tutti insieme raggiungono il nostro scopo: una città più verde.'),
        ('6','Visite nel verde','../assets/img/services/visite.png','Ogni anno organizziamo una moltitudine di uscite per visitare il nostro verde e godere cosi praticamente del nostro lavoro.
            Riteniamo sia fondamentale per conoscerci, stringere amicizie e fortificare così la nostra associazione.
            Invitiamo tutti a prenderne parte per divertirsi e condividere insieme una cosa meravigliosa delle nostre vite, scambiarci idee e aiutarci a migliorare la nostra città e il nostro pianeta.')

