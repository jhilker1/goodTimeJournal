CREATE DATABASE journals,
\c journals

create table users 
/*(
    primary key,
    // username string,
    // email string,
    // password 
); */
create table journals
/* (
    foreign key,
    Entry entry

);
*/

create table journalEntries (
    /* foreign key,*/
    publicity boolean,
    date_created date,
    entry string,
    last_modified date,
    user_id int,
    activity_level int,
    published boolean;
)