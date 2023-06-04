create database server_mysql;
use server_mysql;
create table User(
	id int not null auto_increment,
	firstname varchar(50) not null,
	lastname varchar(50) not null,
	email varchar(100) not null,
	mobile varchar(30) not null,
	password varchar(30) not null,
	role varchar(20) DEFAULT 'user',
	primary key(id),
	unique (email, mobile)
);