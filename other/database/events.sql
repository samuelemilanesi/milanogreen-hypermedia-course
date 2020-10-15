CREATE SEQUENCE event_sequence;
CREATE TABLE events(
    eventID smallint NOT NULL DEFAULT nextval('event_sequence') ,
    name varchar,
    date varchar,
    address varchar,
    type varchar,
    image varchar,
    contact_id int,
    icon varchar,
    description varchar,
    timestamp int,
    PRIMARY KEY (eventID));


INSERT INTO events (name,date,address,type,image,contact_id, icon,description,timestamp)
VALUES ('Salviamo la quercia nana', '28 giugno 2020 - 14:00', 'Via Andrea Solari 13  - Milano','VOL','../assets/img/events/quercianana.png', '1', '../assets/img/events/volontariato.svg','Sulle note di Elio e le storie tese, proponiamo questa iniziativa simbolica, un evento in cui dibatteremo sulle tematiche green di Milano alla presenza dell''assessore all''urbanistica Pierfrancesco Maran, che ci illustrerà le iniziative della nostra comunità cittadina e i piani per il futuro.
       Accorete numerosi, il cambiamento passa anche da queste iniziative!','20200628'),
       ('Piantami!', '12 luglio 2020 - 10:00', 'Via perugino 8 - Milano','EDU','../assets/img/events/piantami.png', '1', '../assets/img/events/education.svg','
        Ti piace piantare nel tuo orto o sul terrazzo a Milano ma i tuoi risultati non sono tra i migliori? Finalmente è arrivato l''evento che fa per te: una giornata per grandi e piccini in cui insegenermo tutta la base per piantare al meglio i nostri amati fiori ed alberi. Sai già tutto e hai un pollice verde che farebbe impallidire Hulk? Scrivici e vieni ad aiutarci!','20200712'),
       ('Quanto inquiniamo?', '29 settembre 2020 - 15:00', 'via celoria 8 - Milano','EDU','../assets/img/events/inquiniamo.png', '1', '../assets/img/events/education.svg','Ogni giorno in televisione, sui giornali, in radio sentiamo parlare di pm10, C02, inquinamento, ma cosa ne sappiamo veramente?
       Qui ne parliamo chiaramente, più precisamente raccontiamo qual è l''impatto di ognuno di noi sul mondo e cosa possiamo fare per ridurlo.
       Ad una prima parte divulgativa ne seguirà una tecnica con alcuni dei più grandi esperti in Italia, quale occasione migliore per fargli tutte le domande possibili per chiarire i vostri dubbi?
       A seguire dibattito e buffet.','20200929'),
       ('Un orto sociale', '31 ottobre 2020 - 10:00', 'via san dionigi 40 - Milano','EDU','../assets/img/events/orto.png', '2', '../assets/img/events/education.svg','Un orto a Milano? ti sembra impossibile vero?
       Invece è una realtà consolidata , il nostro orto si trova ai margini di Milano est, la maggior parte dei vegetali che consumiamo con amore ai nostri buffet vengono da lì, chilometro zero che più di così non si può!
       Il nostro piccolo tesoro, non sarebbe possibile senza l''aiuto di tutti, il nostro evento mensile, uno di quelli a cui teniamo di più, vuole illustrare alla comunità, agli adulti, ma soprattutto ai bambini, che un mondo diverso è possibile e bisogna seminare oggi per goderne dei frutti domani.','20201031'),
       ('Un orto sociale', '27 settembre 2020 - 10:00', 'via san dionigi 40 - Milano','EDU','../assets/img/events/orto.png', '3', '../assets/img/events/education.svg','Un orto a Milano? ti sembra impossibile vero?
       Invece è una realtà consolidata , il nostro orto si trova ai margini di Milano est, la maggior parte dei vegetali che consumiamo con amore ai nostri buffet vengono da lì, chilometro zero che più di così non si può!
       Il nostro piccolo tesoro, non sarebbe possibile senza l''aiuto di tutti, il nostro evento mensile, uno di quelli a cui teniamo di più, vuole illustrare alla comunità, agli adulti, ma soprattutto ai bambini, che un mondo diverso è possibile e bisogna seminare oggi per goderne dei frutti domani.','20200927'),
       ('Un orto sociale', '28 novembre 2020 - 10:00', 'via san dionigi 40 - Milano','EDU','../assets/img/events/orto.png', '4', '../assets/img/events/education.svg','Un orto a Milano? ti sembra impossibile vero?
       Invece è una realtà consolidata , il nostro orto si trova ai margini di Milano est, la maggior parte dei vegetali che consumiamo con amore ai nostri buffet vengono da lì, chilometro zero che più di così non si può!
       Il nostro piccolo tesoro, non sarebbe possibile senza l''aiuto di tutti, il nostro evento mensile, uno di quelli a cui teniamo di più, vuole illustrare alla comunità, agli adulti, ma soprattutto ai bambini, che un mondo diverso è possibile e bisogna seminare oggi per goderne dei frutti domani.','20201128'),
       ('Un orto sociale', '20 dicembre 2020 - 10:00', 'via san dionigi 40 - Milano','EDU','../assets/img/events/orto.png', '5', '../assets/img/events/education.svg','Un orto a Milano? ti sembra impossibile vero?
       Invece è una realtà consolidata , il nostro orto si trova ai margini di Milano est, la maggior parte dei vegetali che consumiamo con amore ai nostri buffet vengono da lì, chilometro zero che più di così non si può!
       Il nostro piccolo tesoro, non sarebbe possibile senza l''aiuto di tutti, il nostro evento mensile, uno di quelli a cui teniamo di più, vuole illustrare alla comunità, agli adulti, ma soprattutto ai bambini, che un mondo diverso è possibile e bisogna seminare oggi per goderne dei frutti domani.','20201220'),
       ('Le zucche di halloween', '25 ottobre 2020 - 17:00', 'via festa del perdono 7 - Milano','EXP','../assets/img/events/hallo.png', '2', '../assets/img/events/explore.svg','Halloween, la festa delle streghe e dei vampiri ma...anche delle nostre amate zucche!
       Un nuovo evento, che inauguriamo quest''anno e che non vediamo l''ora di vivere con tutti i bambini della nostra associazione!
       Dolcetto o scherzetto? A noi piacciono gli scherzetti , ma comunque sarà siamo sicuri ci divertiremo un mondo insieme!','20201025'),
       ('Le piante del futuro', '18 giugno 2020 - 18:00', 'corso 22 marzo 28- Milano','EDU','../assets/img/events/chimica.png', '2', '../assets/img/events/education.svg','Si parla tanto, e spesso in maniera confusa, di OGM; noi vogliamo fare chiarezza una volta per tutte. In questa conferenza racconteremo cosa sono le piante transgeniche, una incredibile innovazione della scienza negli ultimi 10-15 anni, parleremo delle loro applicazioni e discuteremo rilevanti temi etici.
       Segue dibattito e rinfresco.','20200618'),
       ('Riforestiamo!', '13 giugno 2020 - 9:00', 'parco sempione- Milano','VOL','../assets/img/events/sempione.png', '3', '../assets/img/events/volontariato.svg','Il parco simbolo di Milano copre un''area di 386 000 metri quadri e racchiude al suo interno un grande numero di piante di diversi tipi, compresa una vasta varietà di aceri, anche grazie alla riqualificazione di inizio 21esimo secolo, ora però spetta anche a noi cittadini prendercene cura, a tal proposito invitiamo tutti i nostri soci e volontari a quella che è ormai una tradizione annuale: la riforestazione del parco, per rinnovare e mantenere sana la sua flora!
        ','20200613'),
       ('Riforestiamo!', '11 luglio 2020 - 9:00', 'parco nord- Milano','VOL','../assets/img/events/nord.png', '4', '../assets/img/events/volontariato.svg','Importante luogo di aggregazione della periferia milanese, si estende per 640 ettari, presentando centinaia di speci legnose, 30% delle quali addirittura autoctone, pensiamo sia fondamentale proteggere questo gioiello della natura milanese e spetta anche a noi cittadini prendercene cura, a tal proposito invitiamo tutti i nostri soci e volontari a quella che è ormai una tradizione annuale: la riforestazione del parco, per rinnovare e mantenere sana la sua flora!
       Portate i bambini che si innamoreranno dei conigli selvatici!','20200711'),
       ('Riforestiamo!', '13 settembre 2020 - 9:00', 'parco lambro- Milano','VOL','../assets/img/events/lambro.png', '5', '../assets/img/events/volontariato.svg','Per anni è stato il più grande parco di Milano, con i suoi 900 000 metri quadrati, ora è un po'' ridimensionato ma resta una culla di gea da proteggere e un vanto per la città, spetta anche a noi cittadini prendercene
       cura, a tal proposito invitiamo tutti i nostri soci e volontari a quella che è ormai una tradizione annuale: la riforestazione del parco, per rinnovare e mantenere sana la sua flora!','20200913'),
       ('Riforestiamo!', '11 ottobre 2020 - 9:00', 'parco agricolo sud- Milano','VOL','../assets/img/events/agricolo.png', '6', '../assets/img/events/volontariato.svg','Un''immensa area verde a sud di Milano, che copre 60 comuni e si pone a tutela della economia agricola di Milano, nel parco ci sono più di 1400 aziende agricole, vivai, allevamenti, chiaramente è un''area spropositata per la nostra associazione ma siamo sempre pronti a dare una mano quando c''è da difendere il verde e la natura!
       Per questa impresa non sarebbero sufficienti 1000 volontari ma noi lanciamo comunque l''appello a tutti voi: venite venite venite a proteggere il parco agricolo!','20201011'),
       ('Pesca di beneficienza', '21 giugno 2020 - 9:00', 'porta romana 52- Milano','VOL','../assets/img/events/pesca.png', '4', '../assets/img/events/volontariato.svg',
       'Anche per questa estate riproponiamo la pesca di beneficienza, un modo divertente per raccogliere fondi, stare insieme e scambiarsi idee.
       I premi come sempre saranno messi in palio dai nostri partners che sponsorizzeranno le attività di quest''anno.
       Per tutti i bambini premi speciali!','20200621'),
       ('Un albero è per sempre', '11 luglio 2020 - 16:00', 'porta romana 52- Milano','VOL','../assets/img/events/albero.png', '5', '../assets/img/events/volontariato.svg','Sei sempre in difficoltà perchè non sai cosa regalare alle persone a cui vuoi bene? Tranquillo ci abbiamo pensato noi quest''anno, abbiamo per te un regalo che farà sciogliere il cuore anche dell''uomo più rude e della donna più cinica sul pianeta.
       Fai una donazione, scegli un albero e vieni a piantarlo con la persona a cui lo dedicherai, è pur sempre una nuova vita creata insieme e non è impegnativo come un figlio ma comunque pensa bene al nome che vuoi dare all''albero perchè poi se lo dovrà tenere tutta la vita!','20200711'),
       ('Hai orientamento?', '5 agosto 2020 - 8:00', 'Oasi WWF- Vanzago','EXP','../assets/img/events/oasi.png', '3', '../assets/img/events/explore.svg','Nel tuo gruppo di amici sei quello che sa sempre la strada giusta? che non si è mai perso nel bosco nemmeno da bambino? Allora abbiamo l''evento giusto in cui potrai mettere in mostra tutto il tuo talento!
       Iscriviti, mandandoci una mail con i tuoi dati, alla gara di orientiring , sarete tu, un bosco, una cartina e una bussola contro il tempo, mi raccomando vieni con la giusta competizione ma ricordati che la parola d''ordine è divertirsi!','20200805'),
       ('Conosciamoci', '5 settembre 2020 - 11:00', 'parco alesssandrini- Milano','EXP','../assets/img/events/buffet.png', '6', '../assets/img/events/explore.svg','L''evento più atteso da tutti i fan dell''ultima ora, che sono impazienti di entrare nella nostra grande famiglia, la modalità è sempre la solita: scegliamo un bel parco e organizziamo un picnic, dove ognuno porta ciò che più gli piace!
       Dopo pranzo, tradizionale caccia al tesoro per i bambini, con ricchi e appassionati premi!
       Vieni anche tu a incontrare tante persone che condividono le tue passioni, sicuramente nasceranno delle amicizie magari qualcosa di più...
       ','20200905'),
       ('Fungo prelibato', '7 novembre 2020 - 11:00', 'parco delle groane- Milano','EXP','../assets/img/events/funghi.png', '6', '../assets/img/events/explore.svg',' Il parco delle groane è un''area protetta di 8249 ettari alle porte di Milano, ricca di flora e fauna, ed è famosa per essere una miniera d''oro di funghi.
       Andiamo a scoprirli insieme, passeggeremo per il parco alla ricerca di queste perle della natura e concluderemo la mattinata con un pranzo a base di funghi porcini, una prelibatezza consigliata ad adulti e bambini che amano coccolarsi con il meglio che la nostra terra può offrire! ','20201107')