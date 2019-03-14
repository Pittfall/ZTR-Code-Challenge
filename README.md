![alt text](https://github.com/Pittfall/ZTR-Code-Challenge/blob/master/images/Add_Machine.png)
![alt text](https://github.com/Pittfall/ZTR-Code-Challenge/blob/master/images/View_Machines.png)

# Coding Challenge

A coding challenge presented by ZTR which is to be completed in a few hours.

# Development
For the backend, I chose to use DRF because I am not to familiar with .NET Core
and I was using a Macbook.  For the front end, I used ReactJS as my JS framework.


# Installation

git clone https://github.com/Pittfall/ZTR-Code-Challenge.git && cd ZTR-Code-Challenge

## Set up Server
1. Install required packages
cd server
pipenv shell
pipenv install

2. Initial migration (create database)
./ztr/manage.py migrate

3. Serve
./ztr/manage.py runserver

## Set up Client
1. Install required packages
cd client/ztr-machines
npm install

3. Serve
./npm start

# Comments
- Updating does not work yet.  You can click on a machine right now and it will take you
  to the new machine page with an id parameter but it does not read it yet.  I did
  not get a chance to complete that but I would use a patch for this which my server
  does currently support.
- Testing is an important part of development but I did not get a chance to write
  any tests.
- Every piece of data is currently stored as a string but the long and lat would
  be stored as a float and the data would ideally be validated on the front end as well.
- For keeping it simple, I did not use Redux as a data store and would only do so on an as
  needed basis.  Such a simple app does not create any spaghetti code by not using Redux.
- I noticed you mentioned future features but the issue is that I don't know how
  this application would be used to suggest anything useful.  Adding reports, as mentioned
  in the instructions, sounds really cool I'd really just be taking stabs as to how
  this is used and what is needed next.  I can simply say that we should be able to delete
  a machine as well but would love to engage in a conversation about this for further steps.



