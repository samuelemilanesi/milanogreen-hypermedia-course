CREATE SEQUENCE sequence_person_service;
CREATE TABLE service_person(
    ID smallint NOT NULL DEFAULT nextval('sequence_person_service'),
    personID int,
    ServiceID int,
    PRIMARY KEY (ID),

    FOREIGN KEY (personID) REFERENCES people(personID),
    FOREIGN KEY (serviceID) REFERENCES services(serviceID));

INSERT INTO service_person (personID, serviceID)
VALUES ('1','6'),
       ('1','2'),
       ('1','3'),
       ('2','1'),
       ('2','5'),
       ('2','4'),
       ('3','1'),
       ('3','4'),
       ('3','6'),
       ('4','2'),
       ('4','3'),
       ('4','5'),
       ('5','6'),
       ('5','2'),
       ('5','4'),
       ('6','3'),
       ('6','5'),
       ('6','1')
       
       
       


    
