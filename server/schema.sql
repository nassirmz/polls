drop database if exists pollsDigest;

create database pollsDigest;

\c pollsDigest;

drop table if exists users CASCADE;

create table users (
  id serial primary key,
  name text not null,
  email text UNIQUE not null,
  password text not null
);

drop table if exists polls CASCADE;

create table polls (
  id serial primary key,
  user_id int references users (id),
  title text not null,
  descriptin text

);

drop table if exists options;

create table options (
  id serial primary key,
  pole_id int references polls (id),
  name text not null,
  downvote int,
  upvote int
);
