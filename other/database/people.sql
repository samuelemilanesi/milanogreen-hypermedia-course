CREATE TABLE people(
    personID int NOT NULL,
    name varchar,
    role varchar,
    motto varchar,
    image varchar,
    mail varchar,
    phone varchar,
    PRIMARY KEY (personID));


INSERT INTO people 
VALUES ('1','Tony Baviera', 'Planting Director','Un albero oggi per un domani migliore','../assets/img/association/staff_team/tony.png','tony.baviera@milanogreen.it','+39 3472352452'),
       ('2','Cecilia Li','Director of education','Ogni cosa che puoi immaginare, la natura l''ha già creata','../assets/img/association/staff_team/cecilia.png','cecilia.li@milanogreen.it','+39 3460131754'),
       ('3','Ignazio Bove','Urban foresy director','La via più chiara verso l''Universo è attraverso una foresta selvaggia','../assets/img/association/staff_team/ignazio.png','ignazio.bove@milanogreen.it','+39 3405606534'),
       ('4','Giulia Capelli','Director of development','C''è un libro sempre aperto per tutti gli occhi: la natura','../assets/img/association/staff_team/giulia.png','giulia.capelli@milanogreen.it','+39 3488593884'),
       ('5','Filippo Pettine','Co-Executive Director','La natura non ha fretta, eppure tutto si realizza','../assets/img/association/staff_team/filippo.png','filippo.pettine@milanogreen.it','+39 3394596887'),
       ('6','Sara Salzani','Co-Executive Director','Gli uomini discutono, la natura agisce','../assets/img/association/staff_team/sara.png','sara.salzani@milanogreen.it','+39 3391239854')
