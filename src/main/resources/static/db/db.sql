create database communityproject;
use communityproject;

create table member(
    id bigint not null auto_increment primary key,
);

create table follow(
    id bigint not null auto_increment primary key,
);

create table board(
    id bigint not null auto_increment primary key,
);